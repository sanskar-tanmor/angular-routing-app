import { NgModule } from '@angular/core';
import { RouterModule, Routes, ParamMap } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {
    path: 'first-component', title: 'First component', component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent },
    ],
  },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: 'second-component', component: SecondComponent },
  { path: 'child-a-component', component: ChildAComponent },
  { path: 'child-b-component', component: ChildBComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
  

}
