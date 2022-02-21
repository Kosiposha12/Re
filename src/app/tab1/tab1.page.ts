import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

const apps = import('./apps');

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    recipes: Recipe[] = [{
     id: 'r1',
     title: 'Шницель',
     imageUrl: 'https://forexdengi.com/filedata/fetch?id=28261030',
     ing: ['']
    },
    {
      id: 'r2',
      title: 'Спагетти',
      imageUrl: 'https://aidigo-shop.ru/upload/medialibrary/22e/22ecc4cfab3d6e9b616e3facf4c7ba29.jpeg',
      ing: ['']
     }
  ];
  constructor() {}

}
