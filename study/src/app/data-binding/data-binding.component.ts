import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nomeDoCurso = 'Angular';

  onMudouValor(evento){
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit() {
  }

}
