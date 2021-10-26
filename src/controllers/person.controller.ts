// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {
  StarWars
} from '../services';

export class PersonController {
  constructor(
    @inject('services.StarWars')
    protected StarWars: StarWars,
  ) {}

  @get('/people/{personId}')
  async getCharacter(
    @param.path.integer('personId') personId: number,
  ): Promise<object>{
    return this.StarWars.getCharacter(personId);
  }
}
