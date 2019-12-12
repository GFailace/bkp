import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  titles = ['Minhas Requisições', 'Requisições da Equipe', 'Requisições Encerradas'];
  requests = [] as any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRequests()
      .subscribe(dados => {
        this.requests = dados;
        console.log(this.requests);
      });

  }
}
