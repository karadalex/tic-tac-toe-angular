import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  cells:number[][];
  message:string;

  constructor() { 
    this.cells = [[1,2,3],[4,5,6],[7,8,9]];
  }

  ngOnInit() {
  }

  cellClicked(cell:number) {
    this.message = `Cell ${cell} was clicked`;
  }

}
