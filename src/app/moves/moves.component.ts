import { Component, OnInit } from '@angular/core';
import { CollapseStatus } from '../collapse-status';
import { makeGroupedArray } from '../group-moves';
import { Move } from '../move';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.less']
})
export class MovesComponent implements OnInit {
  selectedMove: Move;

  groupedMoves: any[] = makeGroupedArray();

  status: CollapseStatus = {
    'Top Rock': false,
    'Footwork': false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCollapse(style) {
    this.status[style] = !this.status[style];
  }

  onSelect(move: Move) {
    this.selectedMove = move;
    console.log(this.selectedMove)
  }
}
