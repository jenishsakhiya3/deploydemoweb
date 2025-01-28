import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService, ResponseModel } from 'src/app/httpService/http.service';
import { Demo } from 'src/app/interface/menu.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  itemList: Demo[] = [];
  pdfSrc: string | ArrayBuffer | null = null;

  constructor(private http: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDemo().subscribe({
      next: (data) => {
        this.itemList = data.data;
      },
      error: (err) => {
        console.error('API Error:', err);
      },
    });
  }

  downloadPdf() {
    
  }

  getDemo(): Observable<ResponseModel<Demo[]>> {
    return this.http.httpGet<Demo[]>('WeatherForecast/Get');
  }
}
