import { User } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  getDoctorData():Observable<User[]>{
    return this._http.get<User[]>('https://tefa-be-default-rtdb.firebaseio.com/doctor.json')
  }
  saveDoctorData(doctoData:any):Observable<User[]>{
   return this._http.post<User[]>('https://tefa-be-default-rtdb.firebaseio.com/doctor.json',doctoData.value)
  }
}
