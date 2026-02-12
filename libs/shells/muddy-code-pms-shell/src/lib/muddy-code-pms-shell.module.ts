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
        loadChildren: () => import('@org/pms-technology').then((module) => module.PmsTechnologyModule),
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
