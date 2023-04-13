import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/models/clase';
import { ClaseService } from 'src/app/service/clase.service';
import { TokenService } from 'src/app/service/token.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.component.html',
  styleUrls: ['./detalle-clase.component.css'],
})
export class DetalleClaseComponent implements OnInit {
  listClases: any;
  constructor(
    private claseService: ClaseService,
    private token: TokenService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    document.body.style.height = '100vh';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.obtenerClases(params.id);
    });
  }

  obtenerClases(id: any) {
    this.claseService.detail(id).subscribe(
      (data) => {
        console.log(data);
        this.listClases = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
