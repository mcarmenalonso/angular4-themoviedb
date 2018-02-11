/**
 * Register routes for application level component/modules
 */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/movies",
        pathMatch: "full"
      },
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
