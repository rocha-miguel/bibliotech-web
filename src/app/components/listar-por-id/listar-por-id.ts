import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-por-id',
  imports: [RouterLink],
  templateUrl: './listar-por-id.html',
  styleUrl: './listar-por-id.css',
})
export class ListarPorId implements OnInit {

  http = inject(HttpClient);
  route = inject(ActivatedRoute);

  livro = signal<any | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.listarPorId(id);
    }
  }

  listarPorId(id: string) {
    this.http.get<any>(`http://localhost:8000/api/Livro/${id}`)
      .subscribe({
        next: (res) => {
          this.livro.set(res);
        },
        error: (e) => {
          console.error('Erro ao buscar livro', e);
        }
      });
  }

  generos: Record<number, string> = {
  1: 'Ficção',
  2: 'Fantasia',
  3: 'Romance',
  4: 'Terror',
  5: 'HQ',
  6: 'Autoajuda',
  7: 'Religião',
  8: 'Sociologia',
  9: 'Filosofia',
  10: 'Suspense'
};

tiposLivro: Record<number, string> = {
  1: 'Capa Mole',
  2: 'Capa Dura',
  3: 'Ebook'
};

statusLivro: Record<number, string> = {
  1: 'Disponível',
  2: 'Indisponível'
};
}