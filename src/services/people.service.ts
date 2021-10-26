import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {FakeApiDataSource} from '../datasources';

export interface People {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class PeopleProvider implements Provider<People> {
  constructor(
    // fakeApi must match the name property in the datasource json file
    @inject('datasources.fakeApi')
    protected dataSource: FakeApiDataSource = new FakeApiDataSource(),
  ) {}

  value(): Promise<People> {
    return getService(this.dataSource);
  }
}
