import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../grid/grid';
import { StarViewModel } from './star.view.model';
import { GridBuilder } from '../grid/grid-builder.service';

@Component({
  selector: 'app-star-grid',
  templateUrl: './star-grid.component.html',
  styleUrls: ['./star-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarGridComponent implements OnInit {
  grid: Grid<StarViewModel>;

  constructor(private gridBuilder: GridBuilder) {}

  ngOnInit() {
    this.initGrid();
    this.grid.setData(getMovies());
  }

  initGrid() {
    this.grid = this.gridBuilder
      .for<StarViewModel>()
      .column('name', 'Tytuł filmu')
      .column('creator', 'Reżyser')
      .column('year', 'Rok produkcji')
      .build();
  }
}

function getMovies() {
  return [
    { name: 'Prisoners', creator: 'Denis Villeneuve', year: 2013 },
    { name: 'The Dark Knight', creator: 'Christopher Nolan', year: 2008 },
    { name: 'Léon', creator: '	Luc Besson', year: 1994 }
  ];
}
