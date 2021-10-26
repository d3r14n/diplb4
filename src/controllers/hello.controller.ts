// Uncomment these imports to begin using these cool features!
import {inject} from '@loopback/core';
import {get} from '@loopback/rest';
import {People} from '../services';

export class HelloController
{

  constructor(
    @inject('service.people')
    protected peopleService: People
  ){}

  @get('/hello')
  async hello(): Promise<string>
  {
    const people = await this.peopleService.getCharacter(1);
    console.log(people);
    return "hola a todos"
  }
}

//npm start
