import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupLayoutComponent } from './startup-layout/startup-layout.component';
import { StartupComponent } from './startup.component';
import { EditStartupComponent } from './edit-startup/edit-startup.component';


const routes: Routes = [
  {
    path: '',
    component: StartupLayoutComponent,
    children: [
      { path: '', component: StartupComponent },
      { path: 'add', component: EditStartupComponent },
      { path: 'edit/:id', component: EditStartupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupRoutingModule {}
