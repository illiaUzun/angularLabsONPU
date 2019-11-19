export interface WeatherApiDataJSON {
  list: [
    {
      dt_txt: string;
      main: { temp_min: number; temp_max: number; pressure: number };
      clouds: { all: number };
      weather: [{ main: string }];
    }
  ];
}

export class WeatherApiData {
  date: string;
  minTemperature: number;
  maxTemperature: number;
  pressure: number;
  clouds: number;
  weather: string;

  constructor(
    date: string,
    minTemperature: number,
    maxTemperature: number,
    pressure: number,
    clouds: number,
    weather: string
  ) {
    this.date = date;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
    this.pressure = pressure;
    this.clouds = clouds;
    this.weather = weather;
  }
}
