import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = "Windstorm";

  constructor() { }

  ngOnInit(): void {
    console.log("Created a Heroes component!");
  }

}
