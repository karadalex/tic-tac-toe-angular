import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  cells:number[][];
  @Input() playerTurn:number; // 0 for player1, 1 for player2/computer
  playerMoves:number[][];
  @Output() winnerEvent = new EventEmitter<string>();

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
      // 0:player1 --> X
      this.playerMoves[rowIndex][cellIndex] = 1;
    } else {
      // 1:player2/computer --> O
      this.playerMoves[rowIndex][cellIndex] = -1;
    }
    console.log(this.playerMoves);
  }

  checkWinner() {
    let rowSum = 0;
    let columnSum = 0;
    let diag1Sum = 0;
    let diag2Sum = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rowSum += this.playerMoves[i][j];
        columnSum += this.playerMoves[j][i];
      }
      diag1Sum += this.playerMoves[i][i];
      diag2Sum += this.playerMoves[i][2-i];
      if (rowSum == 3 || columnSum == 3) {
        return 0; // player1 wins
      }
      if (rowSum == -3 || columnSum == -3) {
        return 1; // player2 wins
      }
    }
    if (diag1Sum == 3 || diag2Sum == 3) {
      return 0; // player1 wins
    }
    if (diag1Sum == -3 || diag2Sum == -3) {
      return 1; // player2 wins
    }
  }
}
