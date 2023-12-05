import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatingSystem } from '../../interfaces/operating-systems';


@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation:string=""
  @Output() greet: EventEmitter<string>=new EventEmitter<string>();
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  username: string='Mariana';
  doesUserExists: boolean= true;
  isEditable:boolean=true;

  onMouseOver (osName:string):void{
    console.log(osName);
    
  }

  emitToParent():void{
    this.greet.emit("Hi, I'm your child")
  }
}
