import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {WmsBarcodes} from "@org/wms-barcodes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WmsBarcodes
      },
    ]),
    WmsBarcodes
  ]
})
export class WmsBarcodesModule {}
