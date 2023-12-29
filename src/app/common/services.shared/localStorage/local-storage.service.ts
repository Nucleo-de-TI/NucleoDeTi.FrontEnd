import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  static getLocalStorage() {
    if (!localStorage.getItem('nti')) {
      localStorage.setItem('nti', '{}');
    }

    return JSON.parse(localStorage.getItem('nti')!);
  }

  static getItem(key: string) {
    return this.getLocalStorage()[key];
  }

  static setItem(key: string, item: any) {
    const newLocalStorage = this.getLocalStorage();

    newLocalStorage[key] = item;

    localStorage.setItem('nti', JSON.stringify(newLocalStorage));
  }
}
