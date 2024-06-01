import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './modules/components/home-view/home-view.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { YogaCenterComponent } from './modules/components/home-yoga-center/yoga-center.component';
import { AboutComponent } from './modules/components/about/about.component';
import { CorporateYogaComponent } from './modules/components/corporate-yoga/corporate-yoga.component';

const routes: Routes = [{ path: '', component: HomeViewComponent },
                        { path: 'contact', component: ContactComponent},
                        { path: 'home-yoga', component: YogaCenterComponent},
                        { path: 'corporate-yoga', component: CorporateYogaComponent},
                        { path: 'about', component: AboutComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
