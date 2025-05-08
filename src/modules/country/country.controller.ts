import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  public getCountries() {
    return this.countryService.getCountries();
  }

  @Get('/:countryCode')
  public getCountry(@Param('countryCode') countryCode: string) {
    return this.countryService.getCountry(countryCode);
  }
}
