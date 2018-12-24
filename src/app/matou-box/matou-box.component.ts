import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatouRoarService } from "../matou-roar.service"
import { MatouFetchService } from "../matou-fetch.service"

import {Observable, interval} from 'rxjs';


@Component({
  selector: 'matou-box',
  templateUrl: './matou-box.component.html',
  styleUrls: ['./matou-box.component.css']
})
export class MatouBoxComponent implements OnInit, AfterViewChecked {

   @ViewChild('matou-frame') private myScrollContainer: ElementRef;

   private roar:MatouRoarService;
   private fetch:MatouFetchService;

   private needScrolling:boolean = true;

   private pseudo:string = "";
   private message:string = "";

   private cacophonie:any[] = [];

   private refresh:number = 1000;

  constructor(roar:MatouRoarService, fetch:MatouFetchService) {
     this.roar = roar;
     this.fetch = fetch;
 }

  ngOnInit() {

     const secondsCounter = interval(this.refresh);

     secondsCounter.subscribe(() =>
        this.fetch.cacophonie().subscribe(
        (incoming:any[]) => {
             if (this.cacophonie.length != incoming.length) {
                this.cacophonie = incoming;
                this.needScrolling = true;
             }
         })
     );


  }

  ngAfterViewChecked() {
    var element = document.getElementById("frame-content");

    if(this.needScrolling) {
      element.scrollTop = element.scrollHeight;
      this.needScrolling = false;
      }
   }
  public miaou(pseudo, message):void {
     this.roar.roar(pseudo, message).subscribe(
      (incoming:any) => { });
      this.message = "";

 }


}
