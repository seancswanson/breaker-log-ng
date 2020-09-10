import { Component, OnInit } from '@angular/core';
import { Move } from '../move';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.less']
})
export class MovesComponent implements OnInit {
  move: Move = {
    id: 1,
    style: 'Top Rock',
    name: 'Front Step'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
