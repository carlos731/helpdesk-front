import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }//Router permite que navegue entre os components

  ngOnInit(): void {
    this.router.navigate(['home'])//Adicionar /home 
  }

}
