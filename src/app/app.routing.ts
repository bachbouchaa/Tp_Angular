import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cvTech/cv/cv.component";
import { ColorComponent } from "./color/color.component";
import { DetailComponent } from "./cvTech/detail-cv/detail-cv.component";
import { DetailledComponent } from "./cvTech/detail/detail.component";
import { LoginFormComponent } from "./cvTech/login-form/login-form.component";
import { ObservableComponent } from "./observable/observable.component";


const APP_ROUTING: Routes = [
  { path: 'color', component: ColorComponent },
  {
    path: 'cv', 
    children: [
      { path: '', component: CvComponent },
      { path: ':id', component: DetailledComponent },
    ]
  },
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  { path: 'loginForm', component: LoginFormComponent},
  { path: 'image', component: ObservableComponent},

  
];

  
  export const ROUTING = RouterModule.forRoot(APP_ROUTING);
