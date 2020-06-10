import { Injectable, Optional } from '@angular/core';
import { HEROES } from './mock-heroes';
import { LoggerService } from '../logger.service';

@Injectable({
  providedIn : 'root'
})
export class HeroService {
  // @Inject() and @Optional() are parameter decorators. They alter the way the DI framework provides a dependency

  constructor(@Optional() private logger?: LoggerService) { }

  getHeroes(){
    // When using @Optional(), your code must be prepared for a null value
    if(this.logger)
      this.logger.log('Getting Heroes...');
    return HEROES;
  }

}