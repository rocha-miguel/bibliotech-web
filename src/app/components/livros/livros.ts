import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-livros',
  imports: [RouterLink],
  templateUrl: './livros.html',
  styleUrl: './livros.css',
})
export class Livros implements OnInit{

  http = inject(HttpClient);

  

  livros = signal<any[]>([]);

  ngOnInit(): void {
    this.listar();
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

}
