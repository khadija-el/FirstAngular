import { SuperService } from './super.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// const API_URL = environment.api + '/users';
// @Injectable({
//   providedIn: 'root'
// })
export class UserService extends SuperService<any> {

  constructor() {
    super('users');
  }

  // register(o: User) {
  //   return http.post(`${url}/users/register`, o);
  // }

  getUsers(page, perPage, nom, prenom, organisme) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.urlApi}/users/getUsers?start=` + (page - 1) * perPage + '&number=' + perPage + '&nom=' + nom + '&prenom=' + prenom + '&organisme=' + organisme)
  }

  getAll(startIndex, pageSize, sortBy, sortDir) {
    return this.http.get(
      `${this.urlApi}/${this.controller}/GetAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}`
      );
  }

  login(model) {
    return this.http.post(`${this.urlApi}/users/logIn`, model);
  }

}
