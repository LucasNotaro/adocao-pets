import { Cachorro } from './../models/cachorro.model';
import { Component } from '@angular/core';
import { CardCachorroComponent } from '../card-cachorro/card-cachorro.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-cachorros-lista',
  standalone: true,
  imports: [CardCachorroComponent, CommonModule, NgFor],
  templateUrl: './cachorros-lista.component.html',
  styleUrl: './cachorros-lista.component.scss'
})

export class CachorrosListaComponent {
  cachorros = [
    {
      id: 1,
      nome: 'Buddy',
      imagemUrl: 'https://pequenopet.com.br/wp-content/uploads/2018/06/Cachorro-Vira-Lata-Sem-Raca-Definida-SRD-1.jpg',
      raca: 'Labrador',
      idade: '3 anos',
      porte: 'Grande',
      pelagem: 'Curta, amarela',
      temperamento: 'Amigável, brincalhão',
      saude: 'Vacinado, castrado',
      localizacao: 'São Paulo, SP',

    },
    {
      id: 2,
      nome: 'Luna',
      imagemUrl: 'https://pequenopet.com.br/wp-content/uploads/2018/06/Cachorro-Vira-Lata-Sem-Raca-Definida-SRD-1.jpg',
      raca: 'Poodle',
      idade: '2 anos',
      porte: 'Pequeno',
      pelagem: 'Encaracolada, branca',
      temperamento: 'Calma, sociável',
      saude: 'Vacinada, castrada',
      localizacao: 'Rio de Janeiro, RJ'
    },
    {
      id: 3,
      nome: 'Thor',
      imagemUrl: 'https://pequenopet.com.br/wp-content/uploads/2018/06/Cachorro-Vira-Lata-Sem-Raca-Definida-SRD-1.jpg',
      raca: 'Pastor Alemão',
      idade: '4 anos',
      porte: 'Grande',
      pelagem: 'Longa, marrom e preta',
      temperamento: 'Protetor, leal',
      saude: 'Vacinado, castrado',
      localizacao: 'Curitiba, PR'
    }
  ];
}
