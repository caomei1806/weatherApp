import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutComponent } from './views/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCityComponent } from './components/weather-city/weather-city.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		AboutComponent,
		NavbarComponent,
		WeatherCityComponent,
		SearchBarComponent

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
