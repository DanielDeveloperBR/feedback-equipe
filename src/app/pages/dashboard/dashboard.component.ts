import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [RouterModule, SideBarComponent],
})
export class DashboardComponent {}
