import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  cellWasClicked:Boolean = false;
  @Input() playerTurn:number; // 0 for player1, 1 for player2/computer
  @Input() cell:number;
  player:number;

  constructor() { }

  ngOnInit() {
  }

  cellClicked() {
    this.cellWasClicked = true;
    this.player = this.playerTurn;
  }
}
