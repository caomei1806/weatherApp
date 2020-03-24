import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from 'src/app/models/Weather';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

	@Output() citySend = new EventEmitter();
	@Output() localizationSend = new EventEmitter();

	@Input() localizationCityName: string;

	cityName: string;

	constructor() { }

	ngOnInit(): void {
		this.getWeatherByLocalization();
	}

	redirectName() {
		this.citySend.emit(this.cityName);
	}

	getWeatherByLocalization(): void {
		this.localizationSend.emit();
	}



}
