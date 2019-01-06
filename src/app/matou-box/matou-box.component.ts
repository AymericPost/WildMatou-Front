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

   private smInputIsDisplayed:boolean = false;

   // private regexUrl = new RegExp("(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’]))?");

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

     // Il y a un problème avec la RegEx ou la fonction... Je verai plus tard pour la gestion des liens.
     // if(this.regexUrl.test(message)) {
     //    let urls = [];
     //
     //    urls = this.regexUrl.exec(message);
     //    console.log(urls);
     //
     //    for(let i = 0 ; i < urls.length ; i++) {
     //       if(urls[i] != undefined) message += "\n <a href='" + urls[i] + "'>" + urls[i] + "</a>";
     //    }
     // }

     const miaou:any = {
        "pseudo":pseudo,
        "message":message
     };
     this.roar.roar(miaou).subscribe(
      (incoming:any) => { });
      this.message = "";
      this.smInputIsDisplayed = false;
 }


}
