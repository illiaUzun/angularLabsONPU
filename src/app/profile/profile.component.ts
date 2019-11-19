import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherApiData, WeatherApiDataJSON } from 'src/models/weather.model';
import { WeatherService } from 'src/services/weather.service';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  btnLable = 'Logout';
  user: User;

  weatherForecast: WeatherApiData[];

  constructor(
    private router: Router,
    private userService: UserService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();

    this.weatherService
      .getWeatherForecastFromApi(this.user.city)
      .subscribe(
        (json: WeatherApiDataJSON) =>
          (this.weatherForecast = this.weatherService.setWeatherForecast(json))
      );
  }

  onLogoutClicked() {
    this.router.navigate(['']);
  }
}
