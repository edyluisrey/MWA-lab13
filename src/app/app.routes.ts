import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { StundentComponent } from './stundent/stundent.component';
import { ProfileComponent } from "./profile/profile.component";
import { ErrorComponent } from "./error/error.component";
import { MyCanActivateGuard } from "./profile/mycanactivate.guard";

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'students', component: StundentComponent },
    // { path: '**', redirectTo: '/' },
     { path: 'profile/:id', component: ProfileComponent, canActivate:[MyCanActivateGuard]},
     { path: 'error', component:ErrorComponent}
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
