import { Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CreateEntryPageComponent } from './pages/create-entry-page/create-entry-page.component';
import { DisplayEntryPageComponent } from './pages/display-entry-page/display-entry-page.component';
import { EditEntryPageComponent } from './pages/edit-entry-page/edit-entry-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { blogEntryListResolver } from './resolvers/blog-entry-list.resolver';
import { blogEntryResolver } from './resolvers/blog-entry.resolver';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    resolve: { entries: blogEntryListResolver },
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    resolve: { entries: blogEntryListResolver },
  },
  { path: 'new', component: CreateEntryPageComponent },
  {
    path: ':id/edit',
    component: EditEntryPageComponent,
    resolve: { entry: blogEntryResolver },
  },
  {
    path: ':id',
    component: DisplayEntryPageComponent,
    resolve: { entry: blogEntryResolver },
  },
];
