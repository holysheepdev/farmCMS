import { Injectable } from '@angular/core';
// import { dbconfig } from './database.config';
import postgres from 'postgres';

@Injectable({
  providedIn: 'root',
})
export class DatabaseControllerService {
  private sql: postgres.Sql | undefined;

  constructor() {}

  async InitConnection() {
    // this.sql = postgres(dbconfig.connectionString);
    this.sql = postgres(
      'postgresql://postgres:udtvxxpmimeyjsrdlzaq@db.udtvxxpmimeyjsrdlzaq.supabase.co:5432/postgres'
    );
    console.log(this.sql);

    // let employees = await this.sql`select * from employees`;

    // console.table(employees);
  }
}
