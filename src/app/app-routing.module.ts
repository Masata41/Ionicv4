import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mymip',
    redirectTo: 'drive',
    pathMatch: 'full'
  },
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  {path: 'Options', loadChildren: './options/options.module#OptionsPageModule' },
  {path: 'Achievements', loadChildren: './achievements/achievements.module#AchievementsPageModule' },
  {path: 'mymip', loadChildren: './mymip/mymip.module#MymipPageModule' },
  { path: 'drive', loadChildren: './drive/drive.module#DrivePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
