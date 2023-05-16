import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageInfoService {
  usersData: any;
  constructor() {}

  getData() {
    // console.log('Constructor of localStorageService');
    this.usersData = JSON.parse(localStorage.getItem('usersData') || '') ;
    // console.log('this userdata', this.usersData);
    return this.usersData;
  }
}
