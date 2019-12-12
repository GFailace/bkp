import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-risk-details',
  templateUrl: './risk-details.component.html',
  styleUrls: ['./risk-details.component.css']
})
export class RiskDetailsComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  details = [] as any;
  users = [] as any;
  risk = [] as any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }



  ngOnInit() {
    this.apiService.getRisks()
      .subscribe(dados => {
        this.details = dados;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.details.length; i++) {
          if (this.details[i]._id === this.id) {
            this.risk = this.details[i];
          }
        }
        this.apiService.getUsers()
          .subscribe(data => {
            this.users = data;
            if (this.risk.stakeholders[0] !== undefined) {
              // tslint:disable-next-line: prefer-for-of
              for (let j = 0; j < this.users.length; j++) {
                if (this.risk.stakeholders[0] === this.users[j].id) {
                  this.risk.stakeholders[0] = this.users[j].firstName + ' ' + this.users[j].lastName;
                }
              }
            }
          });
        console.log(this.risk.stakeholders);
      });
  }
}
