import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() username: string = 'user';
  constructor() {}

  ngOnInit(): void {}

  public getNameAcronyms() {
    return this.username
      .split(' ')
      .map((x) => x[0])
      .join('');
  }

  public getFirstName() {
    return this.username.split(' ')[0].toLowerCase();
  }
}
