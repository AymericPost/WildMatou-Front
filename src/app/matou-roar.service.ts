import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatouRoarService {

   private client:HttpClient;

   constructor(client:HttpClient) {
     this.client = client;
   }

   public roar(message:any):Observable<any>{
    const promise:Observable<any> = this.client.post<any>("http://localhost:8080/send", message)

    return promise.pipe(catchError(() => {
       return throwError("Le matou s'est perdu dans la forêt !");
    }));
  }
}
