import { Injectable, Optional, Inject } from '@angular/core';
import { HEROES } from './mock-heroes';
import { LoggerService } from '../logger.service';

@Injectable({
  providedIn : 'root'
})
export class HeroService {
  // @Inject() and @Optional() are parameter decorators. They alter the way the DI framework provides a dependency

  //@Inject() is a manual mechanism for letting Angular know that a parameter must be injected
  // constructor(@Optional() private logger?: LoggerService) { }
  constructor(@Optional() @Inject(LoggerService) private logger?) { }

  getHeroes(){
    // When using @Optional(), your code must be prepared for a null value
    if(this.logger)
      this.logger.log('Getting Heroes...');
    return HEROES;
  }

}