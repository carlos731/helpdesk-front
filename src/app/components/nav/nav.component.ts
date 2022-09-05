import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, 
    private authService: AuthService, 
    private toast: ToastrService) { }//Router permite que navegue entre os components

  ngOnInit(): void {
    this.router.navigate(['tecnico'])//inicia o caminho da tela home: /home 
    //this.router.navigate(['home'])
  }

  logout(){
    this.router.navigate(['login'])
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso', 'logout', {timeOut: 7000})
  }

}
