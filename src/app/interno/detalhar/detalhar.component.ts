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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: FilmeService) { }

  ngOnInit() {
    this.filme = new Filme();
    this.route.params.subscribe(params => {
      const id = params['imdbId'];
      this.getFilme(id);
    });
  }

  private getFilme(id: string): void {
    this.service.getFilmePorId(id).subscribe(filme => {
      this.filme = filme;
    });
  }

}
