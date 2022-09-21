import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  
 
  get(key) {
    const item = localStorage.getItem(key);
    console.log(localStorage.getItem(key))
    return item ? JSON.parse(item) : {};
  }

  save(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}
