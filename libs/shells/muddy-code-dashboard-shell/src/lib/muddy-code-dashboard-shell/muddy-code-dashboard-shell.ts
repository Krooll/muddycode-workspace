import {Component, ElementRef, inject, OnDestroy, OnInit, signal, ViewChild, viewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {fromEvent} from "rxjs";

export interface AppConfiguration {
  id: string;
  name: string;
  url: string;
  pwaUrl: string;
}

//TODO ZASTANOWIĆ SIĘ GDZIE BEDZIĘMY TRZYMAĆ KONFIGURACJE APEK
export const apps: AppConfiguration[] = [
  {
    id: 'wms',
    name: 'WMS',
    url: 'http://localhost:4201/',
    pwaUrl: 'http://localhost:4201/'
  },
  {
    id: 'pms',
    name: 'PMS',
    url: 'http://localhost:4202/',
    pwaUrl: 'http://localhost:4202/'
  },
];

@Component({
  selector: 'lib-muddy-code-dashboard-shell',
  imports: [
    RouterOutlet
  ],
  templateUrl: './muddy-code-dashboard-shell.html',
  styleUrl: './muddy-code-dashboard-shell.scss',
})
export class MuddyCodeDashboardShell implements OnInit, OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);
  @ViewChild('dashboard') dashboardRef!: ElementRef<HTMLDivElement>;
  @ViewChild('appWrapper') appWrapperRef!: ElementRef<HTMLDivElement>;

  showAppMenu = signal<boolean>(false);

  openedApps: AppConfiguration[] = [];
  activeAppId?: string;
  iframeUrls: { [id: string]: SafeResourceUrl } = {};
  draggedApp?: AppConfiguration;

  protected readonly apps = apps;

  constructor() {
    fromEvent<MouseEvent>(document, 'click')
      .pipe(takeUntilDestroyed())
      .subscribe(event => {
        if (!this.showAppMenu()) return;

        const target = event.target as HTMLElement;
        if (!this.appWrapperRef.nativeElement.contains(target)) {
          this.showAppMenu.set(false);
        }
      });

    fromEvent(window, 'blur')
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.showAppMenu.set(false);
      });
  }

  mouseUpListener = (event: MouseEvent) => {
    if (this.draggedApp) {
      const rect = this.dashboardRef.nativeElement.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        window.open(this.draggedApp.url, '_blank', 'width=1200,height=800');
        this.closeApp(this.draggedApp.id);
      }
      this.draggedApp = undefined;
    }
  };

  ngOnInit() {
    window.addEventListener('mouseup', this.mouseUpListener);
  }

  ngOnDestroy() {
    window.removeEventListener('mouseup', this.mouseUpListener);
  }

  showMenuToggler() {
    this.showAppMenu.update((v) => !v);
  }

  openApp(app: AppConfiguration) {
    const existing = this.openedApps.find(a => a.id === app.id);
    if (!existing) {
      this.openedApps.push({ ...app });
      this.iframeUrls[app.id] = this.sanitizer.bypassSecurityTrustResourceUrl(app.pwaUrl);
    }
    this.activeAppId = app.id;
  }

  focusApp(id: string) {
    this.activeAppId = id;
  }

  onDragStart(event: DragEvent, app: AppConfiguration) {
    event.dataTransfer?.setData('text/plain', app.id);
  }

  onDragEnd(event: DragEvent, app: AppConfiguration) {
    if (!this.dashboardRef.nativeElement.contains(document.elementFromPoint(event.clientX, event.clientY))) {
      window.open(app.url, '_blank', 'width=1200,height=800');
      this.closeApp(app.id);
    }
  }

  closeApp(id: string) {
    this.openedApps = this.openedApps.filter(a => a.id !== id);
    delete this.iframeUrls[id];
    if (this.activeAppId === id) this.activeAppId = undefined;
  }

  trackById(index: number, item: AppConfiguration) {
    return item.id;
  }
}
