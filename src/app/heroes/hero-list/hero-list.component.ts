import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes : Hero[];

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

}