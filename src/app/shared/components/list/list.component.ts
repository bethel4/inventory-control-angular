import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-navigations';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: any;
  @Input() request: any;
  @Input() numofrequest: any;
  @Input() columns: Column[];
  @Input() caption: string;
  @Input() requestnumid: string;
  @Input() requestnum: string;
  @Input() actions: any;
  @Input() checkbox: boolean;
  @Input() hasAction: boolean;
  @Input() loading: boolean;
  @Input() checkedData: any[];
  @Input() columnFilterOptions = [];


  @Output() actionClick = new EventEmitter<any>();
  @Output() selectedData = new EventEmitter<any[]>();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(item: any, type: string): void{
    this.actionClick.emit({item, type});
  }

  onSelect(): void{
    this.selectedData.emit(this.checkedData);
  }
}
