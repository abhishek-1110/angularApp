import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() name = '';

  // Child to Parent implementation
  @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
    
  }
}
