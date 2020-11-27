import { Injectable } from '@angular/core';
import { Log } from '../modules/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() { 
    this.logs = [
      {id: '1',text: 'Generated components', date: new Date('12/26/2017')},
      {id: '2',text: 'Some logs', date: new Date('10/2/2017')},
      {id: '3',text: 'Added Bootstrap', date: new Date('12/30/2017')}

    ];
  }

  getLogs() {
    return this.logs;
  }
}
