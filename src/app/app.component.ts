import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model/weather';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weatherData?:WeatherData;
  cityName:string='Wellington';

  constructor(private weather:WeatherService){}
  
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(name:string){
    this.weather.getWeatherData(name).subscribe(
      data=>{
        this.weatherData=data;
      }
    )
  }
  updateWeatherData(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
}
