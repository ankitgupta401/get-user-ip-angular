import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-user-ip';
  ip='';
  constructor(private commonService:CommonService){
    this.commonService.getIp().subscribe((data:any)=>{
      console.log(data)
      this.ip=data.ip;
    })
  }
}
