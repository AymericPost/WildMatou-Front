import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatouRoarService {

   private client:HttpClient;

   constructor(client:HttpClient) {
     this.client = client;
   }

   public roar(pseudo:string, message:string):Observable<any>{

      const url = "http://192.168.1.205:8042/send?pseudo=" + pseudo + "&text=" + message;
    const promise:Observable<any> = this.client.get(url)

    const treatment = (data:any):any => {
      return data;
   };
    return promise.pipe( map( treatment ));
  }
}
