import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('signal', [
      state('true', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate(400)]),
      transition('* => void', [animate(0, style({ opacity: 0 }))]),
    ]),
    trigger('signal', [
      state('false', style({ opacity: 1 })),
      transition('* => void', [animate(400, style({ opacity: 0 }))]),
      transition('void => *', [style({ opacity: 0 }), animate(400)]),
    ]),
  ],
})
export class HomeComponent {
  tabIntro = false;
  tabAbout = false;
  tabContact = false;
  tabBlog = false;
  main = false;
  header = true;
  signal = false;
  openIntro() {
    this.tabIntro = true;
    this.tabAbout = false;
    this.tabContact = false;
    this.tabBlog = false;
    this.main = true;
    this.header = false;
    this.signal = true;
  }
  openAbout() {
    this.tabIntro = false;
    this.tabAbout = true;
    this.tabBlog = false;
    this.tabContact = false;
    this.main = true;
    this.header = false;
    this.signal = true;
  }
  openContact() {
    this.tabIntro = false;
    this.tabAbout = false;
    this.tabContact = true;
    this.tabBlog = false;
    this.main = true;
    this.header = false;
    this.signal = true;
  }
  openBlog() {
    this.tabIntro = false;
    this.tabAbout = false;
    this.tabContact = false;
    this.tabBlog = true;
    this.main = true;
    this.header = false;
    this.signal = true;
  }
  close() {
    this.signal = false;
    this.tabAbout = false;
    this.tabBlog = false;
    this.tabIntro = false;
    this.tabContact = false;
    this.main = false;
    this.header = true;
  }
}
