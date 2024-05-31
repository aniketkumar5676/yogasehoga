import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './modules/components/home-view/home-view.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { YogaCenterComponent } from './modules/components/yoga-center/yoga-center.component';
import { AboutComponent } from './modules/components/about/about.component';

const routes: Routes = [{ path: '', component: HomeViewComponent },
                        { path: 'contact', component: ContactComponent},
                        { path: 'yogacenter', component: YogaCenterComponent},
                        { path: 'about', component: AboutComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
