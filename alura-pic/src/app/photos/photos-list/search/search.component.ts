import { EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';

  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
