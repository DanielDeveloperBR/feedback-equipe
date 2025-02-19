import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RedirectGuard } from './guards/redirect.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [RedirectGuard] }, // Verifica se está logado antes de ir para Home
    { path: 'login', component: LoginComponent, canActivate: [RedirectGuard] },
    { path: 'cadastro', component: CadastrarComponent, canActivate: [RedirectGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];