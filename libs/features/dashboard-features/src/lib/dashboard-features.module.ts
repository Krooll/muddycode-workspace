import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardFeatures} from "@org/dashboard-features";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardFeatures
      },
    ]),
    DashboardFeatures
  ]
})
export class DashboardFeaturesModule {}
