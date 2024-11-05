import { Component, Input } from '@angular/core';
import { Cachorro } from '../models/cachorro.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-cachorro',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './card-cachorro.component.html',
  styleUrl: './card-cachorro.component.scss'
})
export class CardCachorroComponent {
  @Input() nome: string = '';
  @Input() imagemUrl: string = '';
  @Input() raca: string = '';
  @Input() idade: string = '';
  @Input() porte: string = '';
  @Input() pelagem: string = '';
  @Input() temperamento: string = '';
  @Input() saude: string = '';
  @Input() localizacao: string = '';
}
