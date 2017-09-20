import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { DbService } from '../db/db.service';
import { Router } from "@angular/router"; 

@Injectable()
export class MyCanActivateGuard implements CanActivate {	
  constructor(private dbService: DbService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let id = route.params['id'];
    console.log(id);
    let student:{}= this.dbService.getDataById(id);
    if(student){
        return true;
    }
    else
      this.router.navigate(['error']);
    return false;
  }
}
