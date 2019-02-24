import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tabIntro = false;
  tabAbout = false;
  tabContact = false;
  main = false;
  header = true;
  openIntro() {
    this.tabIntro = true;
    this.tabAbout = false;
    this.tabContact = false;
    this.main = true;
    this.header = false;
  }
  openAbout() {
    this.tabIntro = false;
    this.tabAbout = true;
    this.tabContact = false;
    this.main = true;
    this.header = false;
  }
  openContact() {
    this.tabIntro = false;
    this.tabAbout = false;
    this.tabContact = true;
    this.main = true;
    this.header = false;
  }
  close(){
    this.tabAbout = false;
    this.tabIntro = false;
    this.tabContact = false;
    this.main = false;
    this.header = true;
    
  }
}
