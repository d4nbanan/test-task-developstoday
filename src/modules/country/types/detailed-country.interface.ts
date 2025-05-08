export interface IDetailedCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: IDetailedCountry;
}
