import {Component} from "@angular/core";
import {Hero} from "./hero/hero";
@Component({
    selector: 'my-app',
    template: `
<h1>{{title}}</h1>
<h2>項目</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
<my-hero-detail [hero]="selectedHero"></my-hero-detail>
`
})
export class AppComponent {

    title = '健康管理・ダイエット';
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}


const HEROES: Hero[] = [
    { id: 11, name: '体脂肪率' },
    { id: 12, name: '基礎代謝' },
    { id: 13, name: 'BMI' },
    { id: 14, name: '体内年齢' },
    { id: 15, name: '体水分率' },
    { id: 16, name: '筋肉量' },
    { id: 17, name: '今日のカロリー' },
];
