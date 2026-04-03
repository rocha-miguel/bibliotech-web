import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cadastrar } from './components/cadastrar/cadastrar';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'cadastrar', component: Cadastrar}
];
