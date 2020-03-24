import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/Weather';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
	selector: 'app-weather-city',
	templateUrl: './weather-city.component.html',
	styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {

	@Input() weather: Weather;
	iconsUrl: Array<string> = [''];
	dayOfWeek: Array<string> = [''];

	constructor(private service: WeatherServiceService) { }

	ngOnInit(): void {
		for (let i: number = 0; i < 5; i++) {
			this.getWeatherIcon(i);
		}
		for (let i: number = 2; i < 5; i++) {
			this.getDay(i);
		}
	}

	ngOnChanges(): void {
		for (let i: number = 0; i < 5; i++) {
			this.getWeatherIcon(i);
		}

	}
	getDay(plusDays: number): void {
		const dayNames: Array<string> = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday'
		]
		let dayExpected = new Date().getDay() + plusDays;
		const options = { weekday: 'long' };
		if (dayExpected > 7) {
			dayExpected = dayExpected - 7;
		}
		this.dayOfWeek[plusDays - 2] = dayNames[dayExpected - 1];
	}
	getWeatherIcon(iconIndex: number) {
		const mainWeather = this.weather.list[iconIndex * 8].weather[0].main;
		const link = "../../../assets/img/weather-icons/"
		if (mainWeather == "Clouds") {
			const descriptionState = this.weather.list[iconIndex].weather[0].description;
			if (descriptionState == "few clouds") {
				this.iconsUrl[iconIndex] = `${link}cloud.svg`;
			} else if (descriptionState == "scattered clouds" || descriptionState == "broken clouds") {
				this.iconsUrl[iconIndex] = `${link}045-cloudy-8.svg`;
			} else {
				this.iconsUrl[iconIndex] = `${link}025-cloudy-day.svg`;
			}

		} else if (mainWeather == "Clear") {
			this.iconsUrl[iconIndex] = `${link}040-sun-6.svg`;
		} else if (mainWeather == "Thunderstorm") {
			this.iconsUrl[iconIndex] = `${link}lightning.svg`;
		} else if (mainWeather == "Drizzle" || mainWeather == "Mist") {
			this.iconsUrl[iconIndex] = `${link}052-rain-15.svg`;
		} else if (mainWeather == "Rain") {
			const descriptionState = this.weather.list[iconIndex].weather[0].description;
			if (descriptionState == "shower rain" || descriptionState == "heavy intensity shower rain" || descriptionState == "ragged shower rain") {
				this.iconsUrl[iconIndex] = `${link}056-rain-13.svg`;
			} else if (descriptionState == "light rain" || descriptionState == "moderate rain") {
				this.iconsUrl[iconIndex] = `${link}107-rain-1.svg`;
			} else {
				this.iconsUrl[iconIndex] = `${link}043-rain-16`;
			}
		} else if (mainWeather == "Snow") {
			const descriptionState = this.weather.list[iconIndex].weather[0].description;
			if (descriptionState == "light snow" || descriptionState == "Snow") {
				this.iconsUrl[iconIndex] = `${link}snowy.svg`;
			} else if (descriptionState == "Snow" || descriptionState == "Heavy snow") {
				this.iconsUrl[iconIndex] = `${link}092-snowflake.svg`;
			} else if (descriptionState == "Light shower snow" || descriptionState == "Shower snow" || descriptionState == "Heavy shower snow") {
				this.iconsUrl[iconIndex] = `${link}093-snow.svg`;
			} else {
				this.iconsUrl[iconIndex] = `${link}055-cloudy-7.svg`;
			}
		} else if (mainWeather == "Tornado") {
			this.iconsUrl[iconIndex] = `${link}tornado.svg`;
		} else if (mainWeather == "Smoke" || mainWeather == "Ash") {
			this.iconsUrl[iconIndex] = `${link}warning.svg`;
		} else if (mainWeather == "Squall") {
			this.iconsUrl[iconIndex] = `${link}windy-day.svg`;
		} else if (mainWeather == "Haze" || mainWeather == "Fog") {
			this.iconsUrl[iconIndex] = `${link}foggy.svg`;
		} else if (mainWeather == "Sand" || mainWeather == "Dust") {
			this.iconsUrl[iconIndex] = `${link}sandstorm.svg`;
		} else {
			this.iconsUrl[iconIndex] = `${link}temperature-4.svg`;
		}
	}
}
