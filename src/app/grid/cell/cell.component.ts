import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  message:string;

  constructor() { }

  ngOnInit() {
  }

  cellClicked() :Boolean {
    this.message = `Cell was clicked`;
    return true;
  }
}
