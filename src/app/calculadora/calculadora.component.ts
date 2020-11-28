import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';
import { BrowserModule } from '@angular/platform-browser'

interface Operator{
  nome: string,
  simbolo: string
}

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  operators: Operator[] = [];
  result: string = "0.00";

  varA: number = 0;
  varB: number = 0;

  constructor(private calculadoraService:CalculadoraService) { }

  ngOnInit(): void {
    this.calculadoraService.getOperators().then(res => {
      this.operators = res.data;
    })
    
  }

  onClickCalcular(op:string, varA: number, varB: number){
      this.calculadoraService.makeCalculation(op, varA, varB).then(res =>{
      this.result = res.data.toFixed(2);
    })
  }
}
