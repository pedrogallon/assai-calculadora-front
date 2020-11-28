import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';
import { BrowserModule } from '@angular/platform-browser'

interface Operator {
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

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.calculadoraService.getOperators().then(res => {
      this.operators = res.data;
    })



  }

  onClickCalcular(op: string, inputA: string, inputB: string) {
    let varA: number = parseFloat(inputA)
    let varB: number = parseFloat(inputB)
    this.calculadoraService.makeCalculation(op, varA, varB).then(res => {
      this.result = res.data.toFixed(2);
    })
  }
}
