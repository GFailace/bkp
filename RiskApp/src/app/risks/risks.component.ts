import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.css']
})
export class RisksComponent implements OnInit {

  risks = [] as any;
  users = [] as any;
  names = [] as any;
  name: string;
  match = true;
  risksBy = [] as any;
  byUser = [] as any;
  test = false;

  constructor(private apiService: ApiService) { }

  Procurar() {
    if (this.name.length > 0) {
      this.risks = this.risks.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    } else if (this.name === '' && this.name !== null) {
      this.ngOnInit();
    }
  }

  ngOnInit() {
    this.apiService.getRisks()
      .subscribe(dados => {
        this.risks = dados;
        console.log(this.risks);
        this.apiService.getUsers()
          .subscribe(data => {
            this.users = data;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < this.risks.length; i++) {
              if (this.risks[i].stakeholders[0] !== undefined) {
                // tslint:disable-next-line: prefer-for-of
                for (let j = 0; j < this.users.length; j++) {
                  if (this.risks[i].stakeholders[0] === this.users[j].id) {
                    this.risks[i].stakeholders[0] = this.users[j].firstName + ' ' + this.users[j].lastName;
                    this.risksBy[i] = this.risks[i].stakeholders[0];
                    this.risksBy.map(item => {
                      if (item[i] === item[i]) {
                        this.byUser[this.risksBy[i]] = item.length;
                      }
                    });
                  }
                }
              }
            }
            console.log(this.byUser);
          });
      });
  }
}
