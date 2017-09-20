import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DbService } from '../db/db.service';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      Student:
      Name :{{student.name}}<br/>
      stuID :{{student.stuID}}<br/>
      Email :{{student.email}}
    </p>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  private subscription: Subscription;
  id: string;
  student:{};

  constructor(private activatedRoute: ActivatedRoute, private dbService: DbService) {
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
    this.student= dbService.getDataById(this.id);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
