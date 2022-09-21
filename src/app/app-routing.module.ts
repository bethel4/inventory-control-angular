import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: 'main',
   loadChildren: () => import('./main/main.module').then(m => m.MainModule)
   },
  {
    path: 'register',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    
  },
 { path: '**', redirectTo: 'signup' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
