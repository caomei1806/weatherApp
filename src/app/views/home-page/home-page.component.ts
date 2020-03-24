import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherServiceService } from 'src/app/services/weather-service.service';
import { Weather } from 'src/app/models/Weather';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	city: string;
	weather: Weather;
	localizationCityName: string;

	constructor(private weatherService: WeatherServiceService) { }

	ngOnInit(): void {
	}

	setCity(city: string): void {
		this.city = city;
		this.getWeather();
	}

	getWeather(): void {
		this.weatherService.getWeatherByCity(this.city).subscribe(weather => {
			this.weather = weather;
		})
	}

	getWeatherByLocalization(): void {
		navigator.geolocation.getCurrentPosition(localization => {
			const lat = localization.coords.latitude;
			const lon = localization.coords.longitude;

			this.weatherService.getWeatherByLocalization(lat, lon).subscribe(weather => {
				this.weather = weather;
				this.localizationCityName = weather.city.name + ", " + weather.city.country;
			})
		})
	}
}
