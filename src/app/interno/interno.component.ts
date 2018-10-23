import { Component, OnInit } from '@angular/core';
import { Token } from '../model/token.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interno',
  templateUrl: './interno.component.html',
  styleUrls: ['./interno.component.css']
})
export class InternoComponent implements OnInit {

  public token: Token;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('token'));
  }

  public sair(): void {
    if (confirm('Deseja sair?')) {
      this.router.navigate(['/externo/login']);
    }
  }

}
