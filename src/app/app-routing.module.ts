import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignformComponent } from './designform/designform.component';

const routes: Routes = [
  {path:'designform', component:DesignformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
