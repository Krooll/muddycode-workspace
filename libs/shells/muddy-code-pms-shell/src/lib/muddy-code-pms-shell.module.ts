import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MuddyCodePmsShell} from "./muddy-code-pms-shell/muddy-code-pms-shell";

export const shellRoutes: Routes = [
  {
    path: '',
    component: MuddyCodePmsShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'technology'
      },
      {
        path: 'technology',
        loadChildren: () =>
          import('@org/pms-technology')
            .then(m => m.PmsTechnologyModule),
      },
      {
        path: 'dictionaries',
        loadChildren: () =>
          import('@org/pms-dictionaries')
            .then(m => m.PmsDictionariesModule),
      }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: shellRoutes,
      },
    ]),
  ]
})
export class MuddyCodePmsShellModule {}
