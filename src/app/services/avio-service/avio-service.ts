import { Let } from 'src/app/entities/Let';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AvioService {
  constructor() {}

  loadFlights() {
    console.log('Ucitavanje letova...');
    return this.mockedFlights();
  }

  filterFlights(allFlights: Let[], filterParams: AbstractFilterParam[]): Let[] {
    let filteredFlights = new Array<Let>();
    for (const l of allFlights) {
      let addFlight = true;
      for (const filterParam of filterParams) {
        if (this.checkPolazakFilter(l, filterParam)) {
          addFlight = false;
          console.log(
            l.polazak +
              ' ' +
              l.destinacija +
              ' ne zadovoljava vrednost polja polazakFilter'
          );
          break;
        }
        if (this.checkDestinacijaFilter(l, filterParam)) {
          addFlight = false;
          console.log(
            l.polazak +
              ' ' +
              l.destinacija +
              ' ne zadovoljava vrednost polja destinacijaFilter'
          );

          break;
        }

        if (this.checkDatumPolaskaFilter(l, filterParam)) {
          addFlight = false;
          console.log(
            l.polazak +
              ' ' +
              l.destinacija +
              ' ne zadovoljava vrednost polja destinacijaFilter'
          );

          break;
        }
      }

      if (addFlight) filteredFlights.push(l);
    }

    return filteredFlights;
  }

  checkPolazakFilter(Let: Let, filterParam: AbstractFilterParam): boolean {
    return (
      filterParam instanceof StringFilterParam &&
      filterParam.getFilterParamName() === 'polazakFilter' &&
      !Let.polazak
        .toLowerCase()
        .includes(filterParam.getFilterParamValue().toLowerCase())
    );
  }

  checkDestinacijaFilter(Let: Let, filterParam: AbstractFilterParam): boolean {
    return (
      filterParam instanceof StringFilterParam &&
      filterParam.getFilterParamName() === 'destinacijaFilter' &&
      !Let.destinacija
        .toLowerCase()
        .includes(filterParam.getFilterParamValue().toLowerCase())
    );
  }

  checkDatumPolaskaFilter(Let: Let, filterParam: AbstractFilterParam): boolean {
    return (
      filterParam instanceof StringFilterParam &&
      filterParam.getFilterParamName() === 'destinacijaFilter' &&
      !Let.destinacija
        .toLowerCase()
        .includes(filterParam.getFilterParamValue().toLowerCase())
    );
  }

  mockedFlights(): Array<Let> {
    let allFlights = new Array<Let>();

    const c1 = new Let(
      'Beograd',
      'Bec',
      200,
      '5/1/2020 8:30:52 AM',
      '5/1/2020 11:30:52 AM'
    );
    const c7 = new Let(
      'Beograd',
      'Bec',
      200,
      '5/1/2020 7:31:52 AM',
      '5/1/2020 10:31:52 AM'
    );
    const c2 = new Let(
      'Bec',
      'Beograd',
      200,
      '6/1/2020 6:30:52 AM',
      '6/1/2020 11:28:52 AM'
    );
    const c3 = new Let(
      'Prag',
      'Bern',
      300,
      '15/5/2020 8:30:52 AM',
      '15/5/2020 11:30:52 AM'
    );
    const c4 = new Let(
      'Bern',
      'Prag',
      300,
      '15/6/2020 8:30:52 AM',
      '15/6/2020 11:30:52 AM'
    );
    const c5 = new Let(
      'Istanbul',
      'Atina',
      400,
      '16/7/2020 8:30:52 AM',
      '16/7/2020 11:30:52 AM'
    );
    const c6 = new Let(
      'Atina',
      'Istanbul',
      400,
      '3/2/2020 8:30:52 AM',
      '3/2/2020 11:30:52 AM'
    );

    allFlights.push(c1);
    allFlights.push(c2);
    allFlights.push(c3);
    allFlights.push(c4);
    allFlights.push(c5);
    allFlights.push(c6);
    allFlights.push(c7);

    return allFlights;
  }
}
