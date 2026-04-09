import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './atualizar.html',
  styleUrl: './atualizar.css'
})
export class Atualizar implements OnInit {

  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);

  idLivro: string = '';
  livro = signal<any | null>(null);

  form = new FormGroup({
    nome: new FormControl(''),
    editora: new FormControl(''),
    autor: new FormControl(''),
    quantidade: new FormControl(0),
    quantidadePaginas: new FormControl(0),
    anoEdicao: new FormControl(0),
    tipoLivro: new FormControl(1),
    generoLivro: new FormControl(1),
    dataHoraCadastro: new FormControl('')
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.idLivro = id;
      this.buscarLivro(id);
    }
  }

  buscarLivro(id: string) {
    this.http.get<any>(`http://localhost:8000/api/Livro/${id}`)
      .subscribe({
        next: (res) => {
          this.livro.set(res);

          this.form.patchValue({
            nome: res.nome,
            editora: res.editora,
            autor: res.autor,
            quantidade: res.quantidade,
            quantidadePaginas: res.quantidadePaginas,
            anoEdicao: res.anoEdicao,
            tipoLivro: res.tipoLivro,
            generoLivro: res.generoLivro,
            dataHoraCadastro: res.dataHoraCadastro
          });
        },
        error: (e) => {
          console.error('Erro ao buscar livro', e);
        }
      });
  }

  salvar() {
    const request = {
      nome: this.form.value.nome,
      editora: this.form.value.editora,
      autor: this.form.value.autor,
      quantidade: Number(this.form.value.quantidade),
      quantidadePaginas: Number(this.form.value.quantidadePaginas),
      anoEdicao: Number(this.form.value.anoEdicao),
      tipoLivro: Number(this.form.value.tipoLivro),
      generoLivro: Number(this.form.value.generoLivro)
    };

    this.http.put(`http://localhost:8000/api/Livro/${this.idLivro}`, request, {
      responseType: 'text'
    })
      .subscribe({
        next: (res) => {
          alert(res);
          this.router.navigate(['/livros']);
        },
        error: (e) => {
          console.error('Erro ao atualizar livro', e);
          alert(e.error || 'Erro ao atualizar livro.');
        }
      });
  }

  statusLivro: Record<number, string> = {
    1: 'Disponível',
    2: 'Indisponível'
  };
}