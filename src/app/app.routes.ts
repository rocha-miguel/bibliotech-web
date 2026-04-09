import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cadastrar } from './components/cadastrar/cadastrar';
import { Livros } from './components/livros/livros';
import { Atualizar } from './components/atualizar/atualizar';
import { ListarPorId } from './components/listar-por-id/listar-por-id';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'cadastrar', component: Cadastrar},
    {path: 'livros', component: Livros},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'listar-por-id/:id', component: ListarPorId},
    {path: 'atualizar/:id', component: Atualizar}
];
