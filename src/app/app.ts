import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadBarComponent } from './head-bar/head-bar';
import { SearchBarComponent } from './search-bar/search-bar';
import { Auto } from './auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeadBarComponent, SearchBarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  autoList: Auto[] = [
    {
      marque: 'BMW',
      modele: 'BMW X5',
      prix: 150000,
      puissance: 340,
      photo: '/Photos/bmw-x5.avif',
      disponibilite: 5
    },
    {
      marque: 'BMW',
      modele: 'BMW Serie 3',
      prix: 95000,
      puissance: 255,
      photo: '/Photos/bmw-serie3.jpg',
      disponibilite: 8
    },
    {
      marque: 'BMW',
      modele: 'BMW M4',
      prix: 180000,
      puissance: 510,
      photo: '/Photos/bmw-m4.jpg',
      disponibilite: 3
    },
    {
      marque: 'Mercedes',
      modele: 'Mercedes Classe C',
      prix: 105000,
      puissance: 258,
      photo: '/Photos/mercedes-c.jpg',
      disponibilite: 6
    },
    {
      marque: 'Mercedes',
      modele: 'Mercedes GLE',
      prix: 165000,
      puissance: 367,
      photo: '/Photos/mercedes-gle.jpeg',
      disponibilite: 4
    },
    {
      marque: 'Audi',
      modele: 'Audi A4',
      prix: 98000,
      puissance: 249,
      photo: '/Photos/audi-a4.jpg',
      disponibilite: 7
    },
    {
      marque: 'Audi',
      modele: 'Audi Q7',
      prix: 155000,
      puissance: 335,
      photo: '/Photos/audi-q7.jpg',
      disponibilite: 5
    }
  ];

  selectedAuto: Auto | null = null;

  updateAuto(auto: Auto): void {
    this.selectedAuto = auto;
  }

  closeDetails(): void {
    this.selectedAuto = null;
  }
}