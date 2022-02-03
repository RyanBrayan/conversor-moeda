import { Component, OnInit } from '@angular/core';
import { ConversorMoedaService } from 'src/app/services/conversor-moeda.service';

@Component({
  selector: 'app-conversor-moeda',
  templateUrl: './conversor-moeda.component.html',
  styleUrls: ['./conversor-moeda.component.css']
})
export class ConversorMoedaComponent implements OnInit {

  moedaDe: string = 'USD'
  valorDe: number = 1
  moedaPara: string = 'BRL'
  valorPara: any
  cotacao: any

  constructor(private conversorMoedaService: ConversorMoedaService) { }

  ngOnInit(): void {
    this.calcularValorPara()
  }

  selecionarMoedaDe(evento: any){
    this.moedaDe = evento.target.value
    this.calcularValorPara()
  }
  selecionarValorDe(evento: any){
    this.valorDe = evento.target.value
    this.calcularValorPara()
  }
  selecionarMoedaPara(evento: any){
    this.moedaPara = evento.target.value
    this.calcularValorPara()
  }


  calcularValorPara(){
    this.conversorMoedaService.getConversao(this.moedaDe, this.moedaPara).subscribe(
      response => {
        console.log([this.moedaDe+this.moedaPara])
        this.valorPara = response[this.moedaDe + this.moedaPara].high * this.valorDe
      }
    )

  }
}
