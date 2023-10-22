import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Demo2DataSource} from '../datasources';
import {UserCredentials, UserCredentialsRelations} from '../models';

export class UserCredentialsRepository extends DefaultCrudRepository<
  UserCredentials,
  typeof UserCredentials.prototype.id,
  UserCredentialsRelations
> {
  constructor(
    @inject('datasources.demo2') dataSource: Demo2DataSource,
  ) {
    super(UserCredentials, dataSource);
  }
}
