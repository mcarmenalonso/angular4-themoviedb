/**
 * Shared module, this module will be used among the different modules of the application
 */
import {
  NgModule,
  ModuleWithProviders
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { HeaderComponent } from "./components/header/header.component";
import { UtilService } from "./services/util.service";

@NgModule({
  imports: [ ],
  declarations: [ HeaderComponent ],
  exports: [
    CommonModule,
    HttpModule,
    HeaderComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ UtilService ]
    };
  }
}
