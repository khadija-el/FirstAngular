import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SuperService } from './super.service';

const API_URL = environment.api + '/profils';
@Injectable({
  providedIn: 'root'
})
export class ProfilService extends SuperService<any> {

  constructor() {
    super('profils');
  }

}
