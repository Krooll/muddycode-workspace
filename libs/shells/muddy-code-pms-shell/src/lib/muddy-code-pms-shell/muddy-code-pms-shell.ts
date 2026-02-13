import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'lib-muddy-code-pms-shell',
  imports: [
    RouterOutlet
  ],
  templateUrl: './muddy-code-pms-shell.html',
  styleUrl: './muddy-code-pms-shell.scss',
})
export class MuddyCodePmsShell {
  private readonly _router = inject(Router);

  routeToSubpage(type: string) {
    if(type === 'technology') {
      this._router.navigate(['/technology'])
    }

    if(type === 'dictionaries') {
      this._router.navigate(['/dictionaries'])
    }
  }
}
