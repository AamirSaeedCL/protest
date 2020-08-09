import { Directive, OnInit, OnDestroy, Input, Output, HostListener } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject, Subscription } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})

export class ButtonDebounceClickDirective implements OnInit, OnDestroy {
  @Input() interval = 5000; // Default interval time is five seconds.
  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject();
  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.clicks
      .pipe(debounceTime(this.interval))
      .subscribe( (e: string | number) => this.debounceClick.emit(e));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
