import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avio-filtered',
  templateUrl: './avio-filtered.component.html',
  styleUrls: ['./avio-filtered.component.css'],
})
export class AvioFilteredComponent implements OnInit {
  @Input() filteredFlights;
  constructor() {}

  ngOnInit(): void {}
}
