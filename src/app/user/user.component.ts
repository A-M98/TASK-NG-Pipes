import { Component, Input } from '@angular/core';
import { User } from '../../data/users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() data?: User;
}
