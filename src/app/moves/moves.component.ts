import { Component, OnInit } from '@angular/core';
import { Move } from '../move';
import { MOVES } from '../mock-moves';
@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.less']
})
export class MovesComponent implements OnInit {
  moves = MOVES;

  constructor() { }

  ngOnInit(): void {
  }

}
