import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080/assai-calculadora-back',

    })
  }

  getOperators() {
    return (this.api.get("/operators"))
  }

  makeCalculation(operator: string, varA: number, varB: number) {
    console.log(`op: ${operator}, varA: ${varA}, varB: ${varB}`)
    const data = {
      varA: varA,
      varB: varB
    }
    return (this.api.post(`/${operator}`, data))
  }


}
