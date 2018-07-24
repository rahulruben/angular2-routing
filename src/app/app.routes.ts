import { Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { ContactComponent } from "./component/contact/contact.component";
import { AboutComponent } from "./component/about/about.component";
import { GlobalContactComponent } from "./component/about/global-contact/global-contact.component";
import { LocalContactComponent } from "./component/about/local-contact/local-contact.component";

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'contacts',
        component: ContactComponent,
        children: [
            {
                path: 'global-contact',
                component: GlobalContactComponent
            }, {
                path: 'local-contact',
                component: LocalContactComponent
            }
        ]
    },
    { path: 'about', component: AboutComponent }
]