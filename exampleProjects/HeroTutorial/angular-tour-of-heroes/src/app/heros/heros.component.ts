import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService,) { }

  ngOnInit(): void {
    this.getHeroes();
    // While you could call getHeroes() in the constructor, that's not the best practice.
    // Reserve the constructor for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.

    // Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(subscribedHeroes => { this.heroes = subscribedHeroes });
  }
  //   The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  // This asynchronous approach will work when the HeroService requests heroes from the server.


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();

//     Although the component delegates hero deletion to the HeroService, it remains responsible for updating its own list of heroes. The component's delete() method immediately removes the hero-to-delete from that list, anticipating that the HeroService will succeed on the server.
// There's really nothing for the component to do with the Observable returned by heroService.delete() but it must subscribe anyway
// If you neglect to subscribe(), the service will not send the delete request to the server. As a rule, an Observable does nothing until something subscribes.
  }
}
