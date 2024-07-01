import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { CoffeeRefactor1719821033075 } from 'src/migrations/1719821033075-CoffeeRefactor';
import { SchemaSync1719821691445 } from 'src/migrations/1719821691445-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres', // type of our database
  host: 'localhost', // database host
  port: 5432, // database host
  username: 'user', // username
  password: 'password', // user password
  database: 'ilovecoffee', // name of our database,
  entities: [Coffee, Flavor, Event],
  migrations: [CoffeeRefactor1719821033075, SchemaSync1719821691445],
});
