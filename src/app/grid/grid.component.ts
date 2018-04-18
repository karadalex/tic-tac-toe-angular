import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  cells:number[][];
  @Input() playerTurn:number; // 0 for player1, 1 for player2/computer
  playerMoves:number[][];

  constructor() { 
    this.cells = [[1,2,3],[4,5,6],[7,8,9]];
    this.playerMoves = [[0,0,0],[0,0,0],[0,0,0]];
  }

  ngOnInit() {
  }

  playerPlayed(row, cell) {
    let rowIndex = this.cells.indexOf(row);
    let cellIndex = this.cells[rowIndex].indexOf(cell);
    if (this.playerTurn) {
      this.playerMoves[rowIndex][cellIndex] = 1;
    } else {
      this.playerMoves[rowIndex][cellIndex] = -1;
    }
    console.log(this.playerMoves);
    // this.checkWinner();
  }
}
