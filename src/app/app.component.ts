import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  userOcupation: string='Developer';
  title = 'angularproyecto';
  city:string= 'Manizales';
  childsMessage:string="";

  receiveEmision($event:string):void{
    this.childsMessage=$event;
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
