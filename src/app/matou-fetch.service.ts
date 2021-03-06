import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatouFetchService {

   private client:HttpClient;

   constructor(client:HttpClient) {
     this.client = client;
   }

   public cacophonie():Observable<any>{
    const promise:Observable<any> = this.client.get("http://localhost:8080/get")

    const treatment = (data:any):any[] => {
      return data;
   };

    return promise.pipe( map( treatment ));
  }
}
