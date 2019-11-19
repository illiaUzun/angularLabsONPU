import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';
import { Observable } from 'rxjs';

import { WeatherApiData, WeatherApiDataJSON } from 'src/models/weather.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherService {
  weatherForecast: WeatherApiData[] = [];

  constructor(private httpClient: HttpClient) {}

  private convertToCelsiusFromKelvin(kelvinTemp: number): number {
    return Number((kelvinTemp - 273.15).toFixed(1));
  }

  getWeatherForecastFromApi(city: string): Observable<WeatherApiDataJSON> {
    return this.httpClient.get<WeatherApiDataJSON>(
      `${environment.weatherApiUrl}?q=${city},ua&appid=${environment.weatherApiKey}`
    );
  }

  setWeatherForecast(weatherForecast: WeatherApiDataJSON): WeatherApiData[] {
    weatherForecast.list.forEach(jsonWeather =>
      this.weatherForecast.push(
        new WeatherApiData(
          moment(jsonWeather.dt_txt).format('MMM Do YY'),
          this.convertToCelsiusFromKelvin(jsonWeather.main.temp_min),
          this.convertToCelsiusFromKelvin(jsonWeather.main.temp_max),
          jsonWeather.main.pressure,
          jsonWeather.clouds.all,
          jsonWeather.weather.pop().main
        )
      )
    );

    return this.weatherForecast;
  }
}
