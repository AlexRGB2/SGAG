import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CheckInService } from 'src/app/service/check-in.service';
import Chart from 'chart.js/auto';
import { CheckIn } from 'src/app/models/check-in';

@Component({
  selector: 'app-empleado-check-in',
  templateUrl: './empleado-check-in.component.html',
  styleUrls: ['./empleado-check-in.component.css']
})
export class EmpleadoCheckInComponent implements OnInit {
  p: any;
  emp: any;
  pla: any = [];
  checks: any = [];
  r: any = [];
  diasVen: string[] = ["12-2-2023","13-2-2023","18-2-2023"];
  @ViewChild('myChart', { static: true }) myChart!: ElementRef;
  chart!: Chart;

  private calendar!: HTMLElement;
  private prevBtn!: HTMLElement;
  private nextBtn!: HTMLElement;
  private monthTitle!: HTMLElement;
  private grid!: HTMLElement;

  private date = new Date();
  private year = this.date.getFullYear();
  private month = this.date.getMonth();
  private today = this.date.getDate();

  private asistencias: string[] = [];
  private faltas: string[] = [];
  private retardos: string[] = [];


  constructor(private capyfit: AuthService, private route: ActivatedRoute, private checkin: CheckInService) {
    const params = this.route.snapshot.params;
    this.p = params;
    this.capyfit.detail(params['id']).subscribe(
      res => {
        console.log("Empleado:");
        console.log(res);
        this.emp = res;
        console.log(this.emp);
      },
      err => console.log(err)
    );
  }

  cargarRet(){
    this.checkin.listCheckInForIdEmpleado(this.p['id']).subscribe(
      resp=>{
        console.log("____________________");
        console.log("Check");
        this.pla = resp;
        console.log("XXXXXXXXXXXXXXDXDXDXDXD");
        console.log(this.pla);
        this.pla.forEach((element: CheckIn) => {
          if(element.tipo==='Entrada'){
            let [hours1, minutes1] = element.hora.split(":");
            let totalMinutes1 = parseInt(hours1) * 60 + parseInt(minutes1);
            let ho = "";
            console.log("Turno: "+this.emp.turno);
            if(this.emp.turno==='Matutino'){
              ho = "08:05";
            } else {
              ho = "18:05";
            }
            let [hours2, minutes2] = ho.split(":");
            let totalMinutes2 = parseInt(hours2) * 60 + parseInt(minutes2);
            if(totalMinutes1>totalMinutes2){
              element.estado = "Retardo";
            }else {
              element.estado = "Asistencia";
            }
            console.log("New: ");
            this.r = element;
            console.log(this.r);
          }
          this.updateCalendar();
        });
      },
      err => console.error(err)
    );
    this.updateCalendar();
  }

  ngOnInit(): void {
    this.calendar = document.querySelector('.calendar')!;
    this.prevBtn = this.calendar.querySelector('.prev-month-btn')!;
    this.nextBtn = this.calendar.querySelector('.next-month-btn')!;
    this.monthTitle = this.calendar.querySelector('.calendar-month')!;
    this.grid = this.calendar.querySelector('.calendar-grid')!;

    this.asistencias = [];
    this.faltas = [];
    this.retardos = [];

    console.log("C H E: "+this.pla);

    //this.checarHora();

    this.checkin.listCheckInForIdEmpleado(this.p['id']).subscribe(resp => {
      this.checks = resp;
      for (let i = 0; i < this.checks.length; i++) {
        let [day, month, year] = this.checks[i].fecha.split("-");
        let newMonth = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        newMonth.setMonth(newMonth.getMonth() + 1);
        let newMonthStr = (newMonth.getMonth() + 1).toString().padStart(2, '0');
        let newDate = newMonth.getDate().toString().padStart(2, '0');
        this.checks[i].fecha = `${newDate}-${newMonthStr}-${newMonth.getFullYear()}`;
      }
      console.log(this.checks);
    }, err => console.error(err));    

    this.updateCalendar();

    this.prevBtn.addEventListener('click', () => {
      if (this.month === 0) {
        this.year--;
        this.month = 11;
      } else {
        this.month--;
      }
      this.updateCalendar();
    });

    this.nextBtn.addEventListener('click', () => {
      if (this.month === 11) {
        this.year++;
        this.month = 0;
      } else {
        this.month++;
      }
      this.updateCalendar();
    });

    this.xd();
  }

  private updateCalendar(): void {
    if(this.r.estado==='Retardo'){
      if(!this.retardos.includes(this.r.fecha)){
        this.retardos.push(this.r.fecha);
      }
      console.log(this.retardos);
    }

    if(this.r.estado==='Asistencia'){
      console.log("Hello");
      if(!this.asistencias.includes(this.r.fecha)){
      this.asistencias.push(this.r.fecha);
      }
      console.log(this.asistencias);
      //console.log(this.retardos);
    }
    
    //this.checarHora();
    console.log("F U C");

    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.year, this.month, 1).getDay();

    this.monthTitle.textContent = new Date(this.year, this.month).toLocaleString('default', { month: 'long', year: 'numeric' });

    // Clear the grid
    this.grid.innerHTML = '';

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      const cell = document.createElement('div');
      cell.classList.add('calendar-day');
      cell.classList.add('non-day');
      this.grid.appendChild(cell);
    }

    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const cell = document.createElement('div');
      cell.classList.add('calendar-day');
      if (i === this.today && this.year === this.date.getFullYear() && this.month === this.date.getMonth()) {
        cell.classList.add('today');
      }
      let fechaCa = i + "-" + this.month + "-" + this.year;
      if (this.asistencias.includes(fechaCa)) {
         cell.classList.add('green');
      }
      if (this.faltas.includes(fechaCa)) {
         cell.classList.add('red');
      }
      if (this.retardos.includes(fechaCa)) {
         cell.classList.add('yellow');
         console.log(fechaCa);
      }
      
      cell.textContent = i.toString();
      this.grid.appendChild(cell);
    }

    const calendarDays = document.querySelectorAll('.calendar-day');

    calendarDays.forEach((day: Element) => {
      day.addEventListener('click', () => {
        let fecha: string = "";
        if(day.textContent){
          fecha = day.textContent + "-" + this.month + "-" + this.year;
          console.log("Fecha Seleccionada: " + fecha);
        }else {
          console.log("Fecha no válida");
        }
      });
    });
  }

  xd(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../assets/css/calendar.css';
    document.head.appendChild(link);
  }

  a(){
    alert();
  }

  loadChart(){
    this.updateCalendar();

    const ctx = this.myChart.nativeElement.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Asistencias', 'Retardos '],//, 'Faltas'
        datasets: [{
          label: '',
          data: [this.asistencias.length, this.retardos.length],
          backgroundColor: [
            'rgba(8, 144, 0, 0.2)',
            'rgba(243, 156, 18, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(8, 144, 0, 1)',
            'rgba(243, 156, 18, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Registro del Checkin'
          }
        }
      }
    });
  }

}
