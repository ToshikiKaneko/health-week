import {Component} from "@angular/core";
import {AccordionModule} from 'ngx-bootstrap';

@Component ({
  template: `
    <h1>{{title}}</h1>
    <h2>項目</h2>
    <accordion class="heroes">
      <accordion-group *ngFor="let hero of heroes" [class.selected]="hero" heading="{{hero.name}}" [isOpen]="false">
        <p>{{hero.id}}</p>
      </accordion-group>
    </accordion>
    <ul>
      <li><a routerLink="/" routerLinkActive="current"
        [routerLinkActiveOptions]="{ exact: true }">
        ホーム</a></li>
      <li><a routerLink="/contents" routerLinkActive="current">
        サブ画面</a></li>
      <li><a routerLink="/dummy" routerLinkActive="current">
        不正なページを表示</a></li>
    </ul>
    <hr />
  `,
  styles: [
    'h1 {font-size: 28px;padding-left: 15px;}',
    'h2 {font-size: 24px;padding-left: 15px;}',
    'ul {padding-left: 30px;}'
  ]
})

export class MainComponent {
  title = '健康管理・ダイエット';
  heroes = HEROES;
}

const HEROES = [
    { id: "12%", name: '体脂肪率' },
    { id: "1,785.36kcal", name: '基礎代謝' },
    { id: 26, name: 'BMI' },
    { id: 30, name: '体内年齢' },
    { id: "45.2kg", name: '体水分率' },
    { id: "57.6kg", name: '筋肉量' },
    { id: "1220kcal", name: '今日の摂取カロリー' },
];
