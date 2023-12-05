import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userOcupation: string='Developer';
  title = 'angularproyecto';
  city:string= 'Manizales';
  childsMessage:string="";

  receiveEmision($event:string):void{
    this.childsMessage=$event;
  }

}
