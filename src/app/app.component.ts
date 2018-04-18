import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  secondPlayerOptions = ["Player 2", "Computer"];
  selectedPLayer = "Player 2";
  playerTurn = 0;

  changePlayerTurn() {
    if (this.playerTurn) {
      this.playerTurn = 0;
    } else {
      this.playerTurn = 1;
    }
  }
}
