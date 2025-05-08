import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '../http/http.service';
import { ICountry } from './types/country.interface';
import { IDetailedCountry } from './types/detailed-country.interface';
import { ICountryInfo } from './types/country-info.interface';
import { ICountryPopulation } from './types/country-population-data.interface';
import { IFlagInfo } from './types/flag-info.interface';
import { ICountryHoliday } from './types/country-holiday.interface';

@Injectable()
export class CountryService {
  constructor(private httpService: HttpService) {}

  public async getCountries(): Promise<ICountry[]> {
    return this.httpService.request(
      `https://date.nager.at/api/v3/AvailableCountries`,
      'GET',
    );
  }

  private async getCountryPopulation(
    countryCode: string,
  ): Promise<ICountryPopulation> {
    const { data } = await this.httpService.request<{
      data: ICountryPopulation[];
    }>(`https://countriesnow.space/api/v0.1/countries/population`, 'GET');

    const countryPopulation = data.find(
      (country) => country.code === countryCode,
    );
    if (!countryPopulation) {
      throw new NotFoundException(`The country population was not found`);
    }

    return countryPopulation;
  }

  private async getDetailedCountry(
    countryCode: string,
  ): Promise<IDetailedCountry> {
    return this.httpService.request<IDetailedCountry>(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`,
      'GET',
    );
  }

  private async getFlagUrl(iso2: string) {
    const { data } = await this.httpService.request<{ data: IFlagInfo[] }>(
      `https://countriesnow.space/api/v0.1/countries/flag/images`,
      'GET',
    );

    const countryFlag = data.find((country) => country.iso2 === iso2);
    if (!countryFlag) {
      throw new NotFoundException(`The country flag was not found`);
    }

    return countryFlag;
  }

  public async getCountry(countryCode: string): Promise<ICountryInfo> {
    const { flag, iso3, iso2 } = await this.getFlagUrl(countryCode);
    const detailedCountry = await this.getDetailedCountry(countryCode);
    const { populationCounts } = await this.getCountryPopulation(countryCode);

    return {
      iso3,
      iso2,
      ...detailedCountry,
      populationCounts,
      flag,
    };
  }

  public async getCountryHolidays(
    countryCode: string,
    year: number,
  ): Promise<ICountryHoliday[]> {
    return this.httpService.request(
      `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,
      'GET',
    );
  }
}
