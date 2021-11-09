import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
},
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
},
{
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
},
{
  path: 'my-appointments',
  loadChildren: () => import('./pages/my-appointments/my-appointments.module').then(m => m.MyAppointmentsPageModule)
},
{
  path: 'settings',
  loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
},
  {
    path: 'barber',
    loadChildren: () => import('./barber/barber.module').then( m => m.BarberPageModule)
  },
  {
    path: 'barber1',
    loadChildren: () => import('./barber1/barber1.module').then( m => m.Barber1PageModule)
  },
  {
    path: 'barber2',
    loadChildren: () => import('./barber2/barber2.module').then( m => m.Barber2PageModule)
  },
  {
    path: 'barber3',
    loadChildren: () => import('./barber3/barber3.module').then( m => m.Barber3PageModule)
  },
  {
    path: 'designing',
    loadChildren: () => import('./designing/designing.module').then( m => m.DesigningPageModule)
  },
  {
    path: 'designing1',
    loadChildren: () => import('./designing1/designing1.module').then( m => m.Designing1PageModule)
  },
  {
    path: 'designing2',
    loadChildren: () => import('./designing2/designing2.module').then( m => m.Designing2PageModule)
  },
  {
    path: 'designing3',
    loadChildren: () => import('./designing3/designing3.module').then( m => m.Designing3PageModule)
  },
  {
    path: 'electrical',
    loadChildren: () => import('./electrical/electrical.module').then( m => m.ElectricalPageModule)
  },
  {
    path: 'electrical1',
    loadChildren: () => import('./electrical1/electrical1.module').then( m => m.Electrical1PageModule)
  },
  {
    path: 'electrical2',
    loadChildren: () => import('./electrical2/electrical2.module').then( m => m.Electrical2PageModule)
  },
  {
    path: 'electrical3',
    loadChildren: () => import('./electrical3/electrical3.module').then( m => m.Electrical3PageModule)
  },
  {
    path: 'moving',
    loadChildren: () => import('./moving/moving.module').then( m => m.MovingPageModule)
  },
  {
    path: 'moving1',
    loadChildren: () => import('./moving1/moving1.module').then( m => m.Moving1PageModule)
  },
  {
    path: 'moving2',
    loadChildren: () => import('./moving2/moving2.module').then( m => m.Moving2PageModule)
  },
  {
    path: 'moving3',
    loadChildren: () => import('./moving3/moving3.module').then( m => m.Moving3PageModule)
  },
  {
    path: 'petcare',
    loadChildren: () => import('./petcare/petcare.module').then( m => m.PetcarePageModule)
  },
  {
    path: 'petcare1',
    loadChildren: () => import('./petcare1/petcare1.module').then( m => m.Petcare1PageModule)
  },
  {
    path: 'petcare2',
    loadChildren: () => import('./petcare2/petcare2.module').then( m => m.Petcare2PageModule)
  },
  {
    path: 'petcare3',
    loadChildren: () => import('./petcare3/petcare3.module').then( m => m.Petcare3PageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'security1',
    loadChildren: () => import('./security1/security1.module').then( m => m.Security1PageModule)
  },
  {
    path: 'security2',
    loadChildren: () => import('./security2/security2.module').then( m => m.Security2PageModule)
  },
  {
    path: 'security3',
    loadChildren: () => import('./security3/security3.module').then( m => m.Security3PageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'booking/:company',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
