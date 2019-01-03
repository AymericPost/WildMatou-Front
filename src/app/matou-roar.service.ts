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

      const url = "http://localhost:8080/send?pseudo=" + pseudo + "&text=" + message;
      console.log(url)
    const promise:Observable<any> = this.client.get(url)

    const treatment = (data:any):any => {
      console.log(data)
      return data;
   };
    return promise.pipe( map( treatment ));
  }
}
