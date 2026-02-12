import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MuddyCodeDashboardShell} from "./muddy-code-dashboard-shell/muddy-code-dashboard-shell";

export const shellRoutes: Routes = [
  {
    path: '',
    component: MuddyCodeDashboardShell,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@org/dashboard-features').then(m => m.DashboardFeaturesModule),
      },
    ],
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
export class MuddyCodeDashboardShellModule {}
