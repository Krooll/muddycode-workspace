import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MuddyCodeWmsShell} from "./muddy-code-wms-shell/muddy-code-wms-shell";

export const shellRoutes: Routes = [
  {
    path: '',
    component: MuddyCodeWmsShell,
    children: [
      {
        path: '',
        loadChildren: () => import('@org/wms-barcodes').then((module) => module.WmsBarcodesModule),
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
export class MuddyCodeWmsShellModule {}
