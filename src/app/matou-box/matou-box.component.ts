import { Component, OnInit } from '@angular/core';
import { MatouRoarService } from "../matou-roar.service"
import { MatouFetchService } from "../matou-fetch.service"

import {Observable, interval} from 'rxjs';


@Component({
  selector: 'matou-box',
  templateUrl: './matou-box.component.html',
  styleUrls: ['./matou-box.component.css']
})
export class MatouBoxComponent implements OnInit {

   private roar:MatouRoarService;
   private fetch:MatouFetchService;

   private pseudo:string = "";
   private message:string = "";

   private cacophonie:any[] = [];

   private refresh:number = 5;

  constructor(roar:MatouRoarService, fetch:MatouFetchService) {
     this.roar = roar;
     this.fetch = fetch;
 }

  ngOnInit() {

     // Create an Observable that will publish a value on an interval
     const secondsCounter = interval(1000);

        secondsCounter.subscribe(() =>
           this.fetch.cacophonie().subscribe(
           (incoming:any[]) => {
                console.log("Got back : ", incoming)
                if (this.cacophonie != incoming) this.cacophonie = incoming;
            })
        );

  }



  public miaou(pseudo, message):void {
     this.roar.roar(pseudo, message).subscribe(
      (incoming:any) => {
          console.log("Got back : ", incoming)
      });
      this.message = "";

 }

}
