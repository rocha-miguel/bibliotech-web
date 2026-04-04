import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css',
})
export class Cadastrar {

  http = inject(HttpClient);

  formulario = new FormGroup({
    nome: new FormControl(''),
    editora: new FormControl(''),
    autor: new FormControl(''),
    quantidade: new FormControl(0),
    quantidadePaginas: new FormControl(0),
    anoEdicao: new FormControl(0),
    tipoLivro: new FormControl(0),
    generoLivro: new FormControl(0)
  });

  cadastrar() {

    const form = this.formulario.value;

    const data = {
      nome: form.nome ?? '',
      editora: form.editora ?? '',
      autor: form.autor ?? '',
      quantidade: Number(form.quantidade ?? 0),
      quantidadePaginas: Number(form.quantidadePaginas ?? 0),
      anoEdicao: Number(form.anoEdicao ?? 0),
      tipoLivro: Number(form.tipoLivro ?? 0),
      generoLivro: Number(form.generoLivro ?? 0)
    };

    this.http.post('http://localhost:8000/api/livro', data, { responseType: 'text' })
      .subscribe((resposta) => {
      alert(resposta);
      this.formulario.reset();

      });

  }
}