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

    this.setTheme()
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

    const primaryColor = computedStyle.getPropertyValue(
      `--${currentTheme}-primary-color`
    );
    const secondaryColor = computedStyle.getPropertyValue(
      `--${currentTheme}-secondary-color`
    );
    const tertiaryColor = computedStyle.getPropertyValue(
      `--${currentTheme}-tertiary-color`
    );

    document.documentElement.style.setProperty(
      '--primary-color',
      primaryColor
    );
    document.documentElement.style.setProperty(
      '--secondary-color',
      secondaryColor
    );
    document.documentElement.style.setProperty('--tertiary-color', tertiaryColor);
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
