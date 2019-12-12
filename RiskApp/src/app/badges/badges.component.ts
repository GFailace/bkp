import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  risks = [] as any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRisks()
      .subscribe(dados => {
        this.risks = dados;
      });

  }
}
