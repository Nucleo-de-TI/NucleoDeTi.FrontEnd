import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UiThemeService {
  private localStorageService = LocalStorageService;

  constructor() {
    const savedTheme = this.localStorageService.getItem('theme');
    const userTheme = this.detectTheme();

    if (!savedTheme) {
      this.localStorageService.setItem('theme', userTheme);
    }

    this.setTheme();
  }

  private detectTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private setTheme() {
    let currentTheme = this.localStorageService.getItem('theme');

    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);

    const secondaryColor = computedStyle.getPropertyValue(
      `--${currentTheme}-secondary-color`
    );
    const tertiaryColor = computedStyle.getPropertyValue(
      `--${currentTheme}-tertiary-color`
    );
    const primaryFontColor = computedStyle.getPropertyValue(
      `--${currentTheme}-primary-font-color`
    );

    document.documentElement.style.setProperty(
      '--secondary-color',
      secondaryColor
    );
    document.documentElement.style.setProperty('--tertiary-color', tertiaryColor);
    document.documentElement.style.setProperty(
      '--primary-font-color',
      primaryFontColor
    );
  }

  changeUiTheme() {
    let currentTheme = this.localStorageService.getItem('theme');

    this.localStorageService.setItem(
      'theme',
      currentTheme === 'light' ? 'dark' : 'light'
    );

    this.setTheme();
  }
}
