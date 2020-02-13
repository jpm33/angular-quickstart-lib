import { Injectable } from '@angular/core';

@Injectable()
export class LibService {
  constructor() { }
  getMeaning() { return Math.floor(Math.random() * 100); }
}
