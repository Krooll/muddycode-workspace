import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PmsDictionaries} from "@org/pms-dictionaries";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PmsDictionaries
      }
    ]),
    PmsDictionaries
  ]
})
export class PmsDictionariesModule {}
