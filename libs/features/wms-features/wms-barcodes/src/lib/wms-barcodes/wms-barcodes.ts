import {Component, inject, OnInit, signal} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'lib-wms-barcodes',
  imports: [],
  templateUrl: './wms-barcodes.html',
  styleUrl: './wms-barcodes.scss',
})
export class WmsBarcodes implements OnInit {
  private readonly _cookiesService = inject(CookieService);
  cookiesData = signal<any>(undefined);


  ngOnInit() {
    console.log(this.getToken());
  }

  getToken(): { email: string; password: string } | null {
    const raw = this._cookiesService.get('auth_token');
    this.cookiesData.set(raw ? JSON.parse(raw) : null);

    return raw ? JSON.parse(raw) : null;
  }
}
