import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';


import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit, OnDestroy {
  collapsed=true;
  @Output() featureSelected = new EventEmitter<string>();
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageSerivce: DataStorageService, private authService: AuthService) {}

  // store the subscription in userSub then get the userobject and check if the user is authenticated
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      // this.isAuthenticated = !user ? false : true; //!!user || checks if you dont havee a user || true if you have a user and false if theres none
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData() {
    this.dataStorageSerivce.storeRecipes();
  }

  onFetchData() {
    this.dataStorageSerivce.fetchRecipes().subscribe();
  }

  //clears the subscription in userSub
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

}
