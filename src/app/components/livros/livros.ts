import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-livros',
  imports: [RouterLink],
  templateUrl: './livros.html',
  styleUrl: './livros.css',
})
export class Livros implements OnInit {

  http = inject(HttpClient);



  livros = signal<any[]>([]);

  ngOnInit(): void {
    this.listar();
  }

  router = inject(Router);

  abrirDetalhes(id: string) {
    this.router.navigate(['/listar-por-id', id]);
  }

  listar() {
    this.http.get<any[]>('http://localhost:8000/api/Livro')
      .subscribe({
        next: (livros) => {
          console.log('LIVROS RECEBIDOS:', livros);
          console.log('QUANTIDADE:', livros.length);
          this.livros.set(livros);
          console.log('ARRAY DA TELA:', this.livros);
        },
        error: (erro) => {
          console.error('ERRO:', erro);
        }
      });
  }

  excluir(id: string) {
    this.http.delete<{ mensagem: string }>(`http://localhost:8000/api/Livro/${id}`)
      .subscribe({
        next: (res) => {
          alert(res.mensagem);

          this.livros.update(lista => lista.filter(livro => livro.id !== id));
        },
        error: (e) => {
          console.error('Erro ao excluir livro', e);
          alert(e.error?.mensagem || 'Erro ao excluir livro.');
        }
      });
  }

  statusLivro: Record<number, string> = {
    1: 'Disponível',
    2: 'Indisponível'
  };

}
