import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  //provides this service in the root ModuleInjector
})
export class LoggerService {
  logs : string[] = [];

  log(message : string){
    this.logs.push(message);
    console.log(this.logs);
  }
  constructor() { }

}