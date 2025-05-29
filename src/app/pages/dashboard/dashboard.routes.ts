import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EquipeComponent } from './equipe/equipe.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { AuthGuard } from '../../guards/auth.guard';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '', component: DashboardHomeComponent },
      { path: 'equipe', component: EquipeComponent },
      { path: 'feedbacks', component: FeedbacksComponent },
      { path: 'configuracoes', component: ConfiguracoesComponent },
    ]
  }
];