import { Injectable } from '@angular/core';
import { Pasantes } from '../models/pasantes';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  public pasantes:Pasantes [] = [
    {
      name: 'Erick Emmanuel',
      lastname: 'Morales',
      cedula: '402-1526213-6',
      phone: '809-412-2528',
      userImg: '',
      github: '',
      linkedin: '',
      cv: '',
      birthday: '2021 - 03 - 10T14: 58: 19.264Z'
      
    }
]
}
