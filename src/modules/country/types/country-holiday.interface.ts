export interface ICountryHoliday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  global: true;
  counties: string[];
  launchYear: 0;
  types: (
    | 'Public'
    | 'Bank'
    | 'School'
    | 'Authorities'
    | 'Optional'
    | 'Observance'
  )[];
}
