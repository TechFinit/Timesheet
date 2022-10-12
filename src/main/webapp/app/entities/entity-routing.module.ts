import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'customer',
        data: { pageTitle: 'timesApp.customer.home.title' },
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
      },
      {
        path: 'project',
        data: { pageTitle: 'timesApp.project.home.title' },
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
      },
      {
        path: 'user-task',
        data: { pageTitle: 'timesApp.userTask.home.title' },
        loadChildren: () => import('./user-task/user-task.module').then(m => m.UserTaskModule),
      },
      {
        path: 'timesheetdetails',
        data: { pageTitle: 'timesApp.timesheetdetails.home.title' },
        loadChildren: () => import('./timesheetdetails/timesheetdetails.module').then(m => m.TimesheetdetailsModule),
      },
      {
        path: 'timesheet',
        data: { pageTitle: 'timesApp.timesheet.home.title' },
        loadChildren: () => import('./timesheet/timesheet.module').then(m => m.TimesheetModule),
      },
      {
        path: 'timesheetstatus',
        data: { pageTitle: 'timesApp.timesheetstatus.home.title' },
        loadChildren: () => import('./timesheetstatus/timesheetstatus.module').then(m => m.TimesheetstatusModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
