import { Component, OnInit, Input } from '@angular/core';

export interface ContactOptions {
  id: number,
  name: string;
  url: string;
  className: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactOptions: ContactOptions[] = [
    {
      id: 1,
      name: 'twitter',
      url: 'https://twitter.com/gipek03',
      className: 'fa-twitter'
    },
    {
      id: 2,
      name: 'instagram',
      url: 'https://www.instagram.com/g6khan/',
      className: 'fa-instagram'
    },
    {
      id: 3,
      name: 'codepen',
      url: 'https://codepen.io/g6khan',
      className: 'fa-codepen'
    },
    {
      id: 4,
      name: 'github',
      url: 'https://github.com/gokhanipek/',
      className: 'fa-github'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
