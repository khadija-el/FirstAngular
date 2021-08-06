import { HttpClient } from '@angular/common/http';
// import { NotificationService } from './notification.service';
import { ProfilService } from './profil.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UowService {
  users = new UserService();
  profils = new ProfilService();
  
  years = [...Array(new Date().getFullYear() - 2000).keys()].map(e => 2008 + e);
  // mecanismes = ['Examen périodique universal', 'Organes de traités', 'Procédure spéciale'];
  // etats = ['Réalisé', 'En cours', 'En continue', 'Non réalisé'];
  mecanismes = this.http.get<{ name: string, nameAr: string }[]>('assets/json/mecanisme.json');
  config = this.http.get<{ download: string, appName: string }>('assets/json/config.json');

  organismeHomePE = this.http.get<{ fr: string[], ar: string[] }>('assets/json/organisme_home_pe.json');


  etats = this.http.get<{ name: string, nameAr: string }[]>('assets/json/etats.json');
  // themes = this.http.get<{
  //   id: number
  //   name: string,
  //   nameAr: string,
  //   sousThemes: {
  //     id: number
  //     name: string,
  //     nameAr: string,
  //   }[]
  // }[]>('assets/json/themes.json');

  monthsAlpha = [
    { name: 'Janvier', nameAr: 'يناير' },
    { name: 'Fevrier', nameAr: 'فبراير' },
    { name: 'Mars', nameAr: 'مارس' },
    { name: 'Avril', nameAr: 'أبريل' },
    { name: 'Mai', nameAr: 'ماي' },
    { name: 'Juin', nameAr: 'يونيو' },
    { name: 'Juillet', nameAr: 'يوليو' },
    { name: 'Août', nameAr: 'غشت' },
    { name: 'Septembre', nameAr: 'شتنبر' },
    { name: 'Octobre', nameAr: 'اكتوبر' },
    { name: 'Novembre', nameAr: 'نونبر' },
    { name: 'Décembre', nameAr: 'دجنبر' },
  ].map((e, i) => {
    return { id: i + 1, name: e.name, nameAr: e.nameAr };
  });

  constructor(private http: HttpClient) { }

  valideDate(date: Date): Date {
    date = new Date(date);

    const hoursDiff = date.getHours() - date.getTimezoneOffset() / 60;
    const minutesDiff = (date.getHours() - date.getTimezoneOffset()) % 60;
    date.setHours(hoursDiff);
    date.setMinutes(minutesDiff);

    return date;
  }

  decoupe(r) {
    const l = r.split(';');

    l.pop();

    // // console.log(l)

    return l;
  }
}
