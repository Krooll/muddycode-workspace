import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PmsTechnology} from "@org/pms-technology";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PmsTechnology
      },
    ]),
    PmsTechnology
  ]
})
export class PmsTechnologyModule {}
