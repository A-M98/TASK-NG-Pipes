import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { StatusPipe } from '../status.pipe';
import { LastLoginPipe } from '../last-login.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, StatusPipe, LastLoginPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() data!: User;
}
