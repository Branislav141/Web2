import { Component, OnInit } from '@angular/core';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { AvioService } from 'src/app/services/avio-service/avio-service';
import { Let } from 'src/app/entities/Let';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviokompanija',
  templateUrl: './aviokompanija.component.html',
  styleUrls: ['./aviokompanija.component.css'],
})
export class AviokompanijaComponent implements OnInit {
  allFlights: Array<Let>;
  filteredFlights: Array<Let>;

  constructor(private avioService: AvioService, private router: Router) {
    this.allFlights = this.avioService.loadFlights();
  }

  hidden = true;

  letUJednomPravcu() {
    this.hidden = !this.hidden;
  }
  ngOnInit(): void {}

  filterFlights(): void {
    let filterParams = new Array<AbstractFilterParam>();
    if (
      this.getFilterFieldValue('polazakFilter') &&
      this.getFilterFieldValue('destinacijaFilter') &&
      this.getFilterFieldValue('datumPolaskaFilter')
    ) {
      filterParams.push(this.addPolazakFilterParam());
      filterParams.push(this.addDestinacijaFilterParam());
      filterParams.push(this.addDatumPolaskaFilterParam());
    }

    this.filteredFlights = this.avioService.filterFlights(
      this.allFlights,
      filterParams
    );
  }

  addPolazakFilterParam(): ReturnType<any> {
    return new StringFilterParam(
      'polazakFilter',
      this.getFilterFieldValue('polazakFilter')
    );
  }

  addDestinacijaFilterParam(): ReturnType<any> {
    return new StringFilterParam(
      'destinacijaFilter',
      this.getFilterFieldValue('destinacijaFilter')
    );
  }

  addDatumPolaskaFilterParam(): ReturnType<any> {
    return new StringFilterParam(
      'datumPolaskaFilter',
      this.getFilterFieldValue('datumPolaskaFilter')
    );
  }

  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement>document.getElementById(filterFieldId)).value;
  }
}
