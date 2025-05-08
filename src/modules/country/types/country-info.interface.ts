import { IDetailedCountry } from './detailed-country.interface';

export interface ICountryInfo extends IDetailedCountry {
  iso3: string;
  iso2: string;
  flag: string;
  populationCounts: {
    year: number;
    value: number;
  }[];
}
