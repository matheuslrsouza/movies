import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmeService } from '../../service/filme.service';
import { Filme } from '../../model/filme.model';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

  public filme: Filme;
  public idFilme: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: FilmeService) { }

  ngOnInit() {
    this.filme = new Filme();
    this.route.params.subscribe(params => {
      this.idFilme = params['imdbId'];
      this.getFilme();
    });
  }

  private getFilme(): void {
    this.service.getFilmePorId(this.idFilme).subscribe(filme => {
      this.filme = filme;
    });
  }

  public abrirUrl(url: string): void {
    window.open(url, '_open');
  }

}
