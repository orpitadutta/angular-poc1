import { Injectable } from '@angular/core';
import { User } from './user';
import { Users } from './user-data';
@Injectable({

  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return Users;
  }
 
//   getPopulatedCountries(): User[] {
//     return Users.sort((a, b) => b.population - a.population).slice(0, 3);
//   }
 
//   getLargestCountries(): Country[] {
//     return Users.sort((a, b) => b.area - a.area).slice(0, 3);
//   }
 
//   getGDPCountries(): Country[] {
//     return Users.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
//   }
 
//   getCountry(name: string): Country {
//     return Users.find(country => country.name === name);
//   }
}
