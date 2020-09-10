import { Component, OnInit } from '@angular/core';
import { Move } from '../move';
import { OrganizedMoves } from '../organized-moves';
import { CollapseStatus } from '../collapse-status';
import { MOVES } from '../mock-moves';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.less']
})
export class MovesComponent implements OnInit {
  moves = MOVES;
  organizedMoves: OrganizedMoves = {
    'Top Rock': [],
    'Footwork': []
  };

  organizedMovesArr: [];

  status: CollapseStatus = {
    'Top Rock': false,
    'Footwork': false
  };

  constructor() {
    // console.log(Object.values(this.organizedMoves))
    MOVES.map((move, i) => {
      move.id = i + 1;
      this.organizedMoves[move.style].push(move);
    });
  }

  ngOnInit(): void {
  }

  toggleCollapse(style) {
    this.status[style] = !this.status[style];
  }


}
