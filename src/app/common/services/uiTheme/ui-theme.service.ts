import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UiThemeService {
  constructor() {
    const savedTheme = LocalStorageService.getItem('theme');
    const userTheme = this.detectTheme();

    if (!savedTheme) {
      LocalStorageService.setItem('theme', userTheme);
    }

    this.setTheme();
  }

  private detectTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private setTheme() {
    let currentTheme = LocalStorageService.getItem('theme');

    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);

    const colors = [
      'primary-color',
      'secondary-color',
      'tertiary-color',
      'quaternary-color',
    ] as const;

    colors.forEach((color) => {
      document.documentElement.style.setProperty(
        `--${color}`,
        computedStyle.getPropertyValue(`--${currentTheme}-${color}`)
      );
    });
  }

  changeUiTheme() {
    let currentTheme = LocalStorageService.getItem('theme');

    LocalStorageService.setItem(
      'theme',
      currentTheme === 'light' ? 'dark' : 'light'
    );

    this.setTheme();
  }
}
