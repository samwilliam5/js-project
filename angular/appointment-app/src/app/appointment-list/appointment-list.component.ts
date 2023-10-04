import { Component } from '@angular/core';
import { Appointment } from '../objectMain/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  newAppointmentTitle : string = '';
  newAppointmentDate : Date = new Date();
  appointmentLists : Appointment[] =[] ;

  ngOnInit(){   
   const item = localStorage.getItem('appointment')

   this.appointmentLists = item ? JSON.parse(item) : [] ;

  }
   addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newappointment : Appointment = {
        id : Math.trunc(Math.random()*10)+1,
        appointmentTitle: this.newAppointmentTitle,
        appointmentDate : this.newAppointmentDate
      }
      this.appointmentLists.push(newappointment)
    }
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      localStorage.setItem('appointment',JSON.stringify(this.appointmentLists));   

   }

   deleteAppointment(index : number){
    this.appointmentLists.splice(index, 1);
    localStorage.setItem('appointment',JSON.stringify(this.appointmentLists));   
  }
}
