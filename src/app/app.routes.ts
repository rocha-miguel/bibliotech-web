import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cadastrar } from './components/cadastrar/cadastrar';
import { Livros } from './components/livros/livros';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'cadastrar', component: Cadastrar},
    {path: 'livros', component: Livros},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];
