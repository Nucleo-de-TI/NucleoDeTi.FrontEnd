import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRegularAppearAnimation]',
  standalone: true,
})
export class RegularAppearAnimationDirective {
  private intersectionObserver!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const options: IntersectionObserverInit = {
      threshold: 0.5, // Adjust threshold as needed (0.5 means at least 50% of the target is visible)
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the target element is intersecting, add the visible class
          this.renderer.addClass(this.el.nativeElement, '--visible');
          this.intersectionObserver.unobserve(entry.target);
        }
      });
    }, options);

    // Start observing the target element
    this.intersectionObserver.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    // Stop observing when the directive is destroyed
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
