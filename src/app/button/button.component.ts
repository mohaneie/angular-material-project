import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SamplserviceService} from '../samplservice.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  userdetails:any = {
 
  }
  constructor(private samp: SamplserviceService,
    private router: Router) { }

    formnew() {
      this.samp.info(this.userdetails)
    .subscribe((data) => {
      console.log('data sucess')

    },(error)=>{
      console.log('failed data')
    })
    }
  

  ngOnInit() {
  }

}
