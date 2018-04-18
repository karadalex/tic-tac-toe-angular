import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  cells:number[][];
  @Input() playerTurn:number; // 0 for player1, 1 for player2/computer

  constructor() { 
    this.cells = [[1,2,3],[4,5,6],[7,8,9]];
  }

  ngOnInit() {
  }
}
