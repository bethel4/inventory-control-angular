import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() actions: any;
  @Input() criterias: any;
  @Input() hasFilter: boolean;

  @Output() actionClick = new EventEmitter<any>();
  @Output() selectedValues = new EventEmitter<any>();


  values: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onCreate() {
    this.actionClick.emit();
  }
  onClick(): void {
    this.actionClick.emit();
  }
}
