import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{
  productoForm: FormGroup;
  titulo = 'CREAR REFACCION'; 
  id : string | null;
  constructor (private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _productoService : ProductoService,
                private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      stock: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      stock: this.productoForm.get('stock')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if(this.id !== null) {
      //editamos producto
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        this.toastr.info('El producto fue actualizado con exito!', 'Producto Actualizado!');
        this.router.navigate(['/listar-productos']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    } else {
      //agregamos producto
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
      this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
      this.router.navigate(['/listar-productos']);
    }, error => {
      console.log(error);
      this.productoForm.reset();
    })
    }

     

   
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'EDITAR REFACCION';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          stock: data.stock,
          precio: data.precio,
        })
      })
    }
  }


}
