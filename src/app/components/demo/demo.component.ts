import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService, ResponseModel } from 'src/app/httpService/http.service';
import { Demo } from 'src/app/interface/menu.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit{

  constructor(private http: HttpService,private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getDemo().subscribe({
      next: (data) => {
        this.snackBar.open("Suceess", 'X', {
          duration: 5000,
          panelClass: 'success',
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        console.log(data.data);
      },
      error: (err) => {
        console.error('API Error:', err);
      },
    });
  }

  getDemo(): Observable<ResponseModel<Demo[]>> {
    return this.http.httpGet<Demo[]>('WeatherForecast/Get');
  }
}
