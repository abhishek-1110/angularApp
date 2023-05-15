import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformationService {
  constructor() {}

   users() {
    return [
      { name: 'Harry', age: '22', email: 'harry@gmail.com' },
      { name: 'Brook', age: '27', email: 'brook@ymail.com' },
      { name: 'David', age: '28', email: 'dvd@yahoo.com' },
      { name: 'Rahul', age: '29', email: 'rahul@yahoo.com' },
    ];
  }
}
