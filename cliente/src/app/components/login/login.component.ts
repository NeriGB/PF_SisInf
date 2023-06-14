import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioForm: FormGroup;
  id : string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private aRouter: ActivatedRoute,
              private _usuarioService: UsuarioService,
              private http: HttpClient) {
    this.usuarioForm = this.fb.group({
      usuario: ['',Validators.required],
      contraseña: ['',Validators.required], 
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
  }
 
  ingresar() {
     const usuario = this.usuarioForm.get('usuario')?.value;
     const contraseña = this.usuarioForm.get('contraseña')?.value;

     this.http.post('/api/login', { usuario, contraseña }).subscribe(
      (response: any) => {
        // La solicitud se realizó con éxito, puedes procesar la respuesta del servidor aquí
        // Por ejemplo, verificar si el inicio de sesión fue exitoso o no
        if (response.success) {
          // Redirigir al usuario a la página de inicio o a otra página deseada
          this.router.navigate(['/listar-productos']);
        } else {
          // Mostrar mensaje de error al usuario
        }
      },
      (error) => {
        // Ocurrió un error al realizar la solicitud, puedes manejarlo aquí
      }
    );

     }
  }

