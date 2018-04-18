import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  cellWasClicked:Boolean = false;
  cellIsEmpty:Boolean;
  @Input() playerTurn:number; // 0 for player1, 1 for player2/computer

  constructor() { }

  ngOnInit() {
  }

  cellClicked() {
    this.cellWasClicked = true;
  }
}
