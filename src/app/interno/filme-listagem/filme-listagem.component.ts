import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from 'src/app/service/emitter.service';

@Component({
  selector: 'app-filme-listagem',
  templateUrl: './filme-listagem.component.html',
  styleUrls: ['./filme-listagem.component.css']
})
export class FilmeListagemComponent implements OnInit {

  constructor(private emitter: EventEmitterService) { }

  ngOnInit() {
    this.emitter.get('evento.atualizarLista')
                .subscribe(titulo => this.onAtualizarLista(titulo));
  }

  onAtualizarLista(titulo: string): void {
    console.log('recebendo evento');
    console.log(titulo);
  }

}
