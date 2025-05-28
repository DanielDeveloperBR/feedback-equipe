import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RedirectGuard } from './guards/redirect.guard';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { TermosDeUsoComponent } from './pages/termos-de-uso/termos-de-uso.component';

export const routes: Routes = [
    // Verifica se está logado antes de ir para Home
    { path: '', component: HomeComponent, canActivate: [RedirectGuard] }, 
    { path: 'login', component: LoginComponent, canActivate: [RedirectGuard] },
    { path: 'cadastro', component: CadastrarComponent, canActivate: [RedirectGuard] },
    { path: 'termos-de-uso', component: TermosDeUsoComponent, canActivate: [RedirectGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'feedbacks', component: FeedbacksComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];