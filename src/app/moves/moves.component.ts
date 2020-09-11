import { Component, OnInit } from '@angular/core';
import { CollapseStatus } from '../collapse-status';
import { makeGroupedArray } from '../group-moves';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.less']
})
export class MovesComponent implements OnInit {

  groupedMovesArr: any[] = makeGroupedArray();

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
}