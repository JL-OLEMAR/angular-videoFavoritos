import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public page_title: string;

  constructor() {
    this.page_title = "Registro";
  }

  ngOnInit(): void {
  }

}
