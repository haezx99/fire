import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {
  public searchTerm: string ="";
  public items: any;
  
  constructor() { }

  ngOnInit() {
  }

}
