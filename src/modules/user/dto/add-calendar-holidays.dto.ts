import { IsArray, IsInt, IsString, Length, Min } from 'class-validator';

export class AddCalendarHolidaysDto {
  @IsString()
  @Length(2, 2)
  countryCode: string;

  @IsInt()
  @Min(1975)
  year: number;

  @IsString({ each: true })
  @IsArray()
  @Length(1, 255, { each: true })
  holidays: string[];
}
