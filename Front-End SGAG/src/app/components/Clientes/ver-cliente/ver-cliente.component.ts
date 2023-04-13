import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clientes } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/service/cliente.service';
import { TokenService } from 'src/app/service/token.service';
import * as $ from "jquery";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {
filterClientes='';
clientes:Clientes[]=[];
isAdmin:boolean=false;
isMan:boolean=false;
isIns:boolean=false;

  constructor(private clienteService:ClienteService,private toastr: ToastrService,private token:TokenService,private router:Router) { }

  ngOnInit(): void {
    $('#loading').css('display', 'block');
    this.listaClientes();
    this.isAdmin = this.token.isAdmin();
  }

  listaClientes():void{
    this.clienteService.list().subscribe(
      data=>{
        this.clientes=data;
        $('#loading').css('display', 'none');
      },
      err=>{
        console.log(err);
        $('#loading').css('display', 'none');
      }
    );
  }

  onDelete(id:number){
    Swal.fire({
      title: '¿Estas Seguro?',
      text: 'No podras desaser la acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
        if(result.value){
          this.clienteService.delete(id).subscribe(
            data=>{
              this.toastr.success('Cliente Eliminado', 'OK', {
                timeOut: 3000});
                this.listaClientes();
            },
            err=>{
              this.toastr.error(err.error.mensaje, 'Fail', {
                timeOut: 3000}); 
            }
           );
        }else if(result.dismiss===Swal.DismissReason.cancel){
          Swal.fire(
            'Cancelado',
            'Cliente no eliminado',
            'error'
          )
        }
      })
  }

}
