import { Injectable, PLATFORM_ID, Inject, EventEmitter } from '@angular/core';
import { User } from '../Models/models/models';

const USER = 'USER';
const TOKEN = 'TOKEN';
const ROLE = 'ROLE';

const ID_ADMIN = 1;
const ID_SUPER_VISUER = 2;
const ID_POINT_FOCAL = 3;
const PROPREITAIRE = 4;
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public user = new User();
  public token = '';
  public idRole = -1;
  public notif: EventEmitter<{ is: boolean, user: User, idRole?: number }> = new EventEmitter();
  constructor() {
    this.getSession();
  }
  // se connecter
  public doSignIn(user: User, token, idRole) {
    if (!user || !token || !idRole) {
      return;
    }
    this.user = user;
    this.token = token;
    this.idRole = idRole;
    localStorage.setItem(USER, (JSON.stringify(this.user)));
    localStorage.setItem(TOKEN, (JSON.stringify(this.token)));
    localStorage.setItem(ROLE, (JSON.stringify(this.idRole)));
    this.notif.next({ is: true, user: this.user });
  }

  public updateUser(user: User) {
    if (!user) {
      return;
    }
    this.user = user;
    localStorage.setItem(USER, (JSON.stringify(this.user)));
    this.notif.next({ is: true, user: this.user });
  }

  // se deconnecter
  public doSignOut(): void {
    this.user = new User();
    localStorage.removeItem(USER);
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(ROLE);
    this.notif.next({ is: false, user: this.user });
  }

  // this methode is for our auth guard
  get isSignedIn(): boolean {
    // // console.log(!!localStorage.getItem(USER) ||
    // !!localStorage.getItem(TOKEN) ||
    // !!localStorage.getItem(ROLE));
    return !!localStorage.getItem(USER) ||
      !!localStorage.getItem(TOKEN) ||
      !!localStorage.getItem(ROLE)
      ;
  }

  public getSession(): void {
    try {
      this.user = JSON.parse(localStorage.getItem(USER));
      this.token = JSON.parse(localStorage.getItem(TOKEN));
      this.idRole = JSON.parse(localStorage.getItem(ROLE));
      // this.user = JSON.parse(atob(localStorage.getItem(USER)));
      // this.token = JSON.parse(atob(localStorage.getItem(TOKEN)));
      // this.idRole = JSON.parse(atob(localStorage.getItem(ROLE)));
      this.notif.next({ is: true, user: this.user });
    } catch (error) {
      this.user = new User();
      this.token = '';
      this.idRole = -1;
      console.warn('error localstorage data', error);
    }

    // // console.log('token here : ', this.token);
    // // console.log('idRole here : ', this.idRole);
  }

  get getUser() {
    return this.user;
  }

  get getName() {
    if (this.isPublic) {
      return '---';
    }

    return this.user.nom + ' ' + this.user.prenom;
  }

  get isPublic() {
    return this.user === null || this.user.id === 0;
  }

  get isAdmin() {
    if (this.isPublic) {
      return false;
    }
    return this.user.idProfil === ID_ADMIN;
  }

  get isSuperViseur() {
    if (this.isPublic) {
      return false;
    }
    return this.user.idProfil === ID_SUPER_VISUER;
  }

  get isPointFocal() {
    if (this.isPublic) {
      return false;
    }
    return this.user.idProfil === ID_POINT_FOCAL;
  }

  get isProprietaire() {
    if (this.isPublic) {
      return false;
    }
    return this.user.idProfil === PROPREITAIRE;
  }
}

// class User {
//   id: 0;
//   name = '';
// }

