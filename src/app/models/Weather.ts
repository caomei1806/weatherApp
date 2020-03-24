export class Weather {
	list: [
		{
			dt: Date;
			main: {
				temp: number;
				feels_like: number;
				temp_min: number;
				temp_max: number;
				pressure: number;
				humidity: number;
			},
			weather: [
				{
					id: number;
					main: string;
					description: string;
				}
			],
			clouds: {
				all: number;
			},
			wind: {
				speed: number;
				deg: number;
			},
			sys: {
				pod: string;
			}
		}
	];
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		},
		country: string;
		timezone: number;
		sunrise: Date;
		sunset: Date;
	}
}

