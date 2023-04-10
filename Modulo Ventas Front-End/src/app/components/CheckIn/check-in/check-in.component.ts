import { Component, OnInit } from '@angular/core';
import { CheckInService} from '../../../service/check-in.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/service/auth.service';
import { CreateUser } from 'src/app/models/create-user';
import { CheckIn } from 'src/app/models/check-in';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  title = 'qr-reader';
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];

  checkin = {
    idEmpleado: 0,
    fecha: "",
    hora: "",
    tipo: "",
    estado: ""
  }

  empleado!:CreateUser;
  reviewCheckIn: any;
  succes:boolean=false;

  constructor(private checkInService: CheckInService, private empledadoService:AuthService,private toast:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }



  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  selectCamera(cameraLabel: string) {
    this.cameras.forEach(camera => {
      if (camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        console.log(camera.label);
        this.scannerEnabled = true;
      }
    })
  }

  createCheckIn(checkin:CheckIn) {
    console.log("Haciendo Checkin ...");
    this.checkInService.create(checkin).subscribe(res => {
        console.log(res);
        this.openModal();
      },
        err => {
          console.log(err);
        });
  }

  scanSuccessHandler(event: string) {
    this.results.unshift(event);

    const dataEmpleado = JSON.parse(event);

    //this.checkin.IdEmpleado = dataEmpleado.IdEmpleado;
    
if(!this.succes){
  this.checkin.idEmpleado = dataEmpleado.id;
  this.checkin.fecha = (new Date().getDate().toString() + "-" +
    new Date().getMonth().toString() + "-" +
    new Date().getFullYear().toString());
  this.checkin.hora = (new Date().getHours().toString() + ":" + new Date().getMinutes().toString());

  this.checkInService.reviewCheckIn(this.checkin.idEmpleado, this.checkin.fecha).subscribe(res => {
    this.reviewCheckIn = res;
    console.log(this.reviewCheckIn.length);
  
    this.empledadoService.detail(this.checkin.idEmpleado)
    .subscribe(res => {
      this.empleado = res;
      console.log(this.empleado.turno);
      if (this.empleado.turno == "Matutino" || this.empleado.turno == "Vespertino") {
        console.log("El turno es Mat o Vesp");
        if (this.reviewCheckIn.length == 0) {
          this.checkin.tipo = "Entrada";
          this.createCheckIn(this.checkin);
          //this.openModal();
        } else if (this.reviewCheckIn.length == 1) {
          this.checkin.tipo = "Salida";
          this.createCheckIn(this.checkin);
          //this.openModal();
        }
      } 
    }, err => this.toast.error(err.error.mensaje,'Error',{timeOut:3000})
    );
  },
  err => this.toast.error(err.error.mensaje,'Error',{timeOut:3000})
  );

  console.log(this.checkin);

  this.createCheckIn(this.checkin);
  this.succes=true;
}


}

  openModal(): void {
    this.scannerEnabled = false;
    Swal.fire({
      title: 'Registro exitoso',
      html: '<p>'+this.checkin.idEmpleado.toString()+'</p>',
      icon: 'success',
      // showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1a1a1a',
      customClass: {
        confirmButton: 'button-modal',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Acción cuando se hace clic en el botón de confirmación
        this.scannerEnabled = true;
        window.location.reload();
      }
    });

  }

}

