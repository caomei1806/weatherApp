import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/Weather';

@Injectable({
	providedIn: 'root'
})
export class WeatherServiceService {

	apiUrl: string = 'https://api.openweathermap.org/data/2.5/forecast?units=metric';
	apiKey: string = '&appid=cd21f66627b522d20bf060e2e76c154d';

	constructor(private http: HttpClient) { }

	getWeatherByCity(city: string): Observable<Weather> {
		return this.http.get<Weather>(`${this.apiUrl}&q=${city}${this.apiKey}`);
	}

	getWeatherByLocalization(lat: number, lon: number): Observable<Weather> {
		return this.http.get<Weather>(`${this.apiUrl}&lat=${lat}&lon=${lon}${this.apiKey}`);
	}
}
