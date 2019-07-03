"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.title = '健康管理・ダイエット';
        this.heroes = HEROES;
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
};
AppComponent = __decorate([
    core_1.Component({
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
], AppComponent);
exports.AppComponent = AppComponent;
const HEROES = [
    { id: 11, name: '体脂肪率' },
    { id: 12, name: '基礎代謝' },
    { id: 13, name: 'BMI' },
    { id: 14, name: '体内年齢' },
    { id: 15, name: '体水分率' },
    { id: 16, name: '筋肉量' },
    { id: 17, name: '今日のカロリー' },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY3JpcHRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBd0M7QUFleEMsSUFBYSxZQUFZLEdBQXpCO0lBYkE7UUFlSSxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLFdBQU0sR0FBRyxNQUFNLENBQUM7SUFNcEIsQ0FBQztJQUhHLFFBQVEsQ0FBQyxJQUFVO1FBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztDQUNKLENBQUE7QUFUWSxZQUFZO0lBYnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUU7Ozs7Ozs7OztDQVNiO0tBQ0EsQ0FBQztHQUNXLFlBQVksQ0FTeEI7QUFUWSxvQ0FBWTtBQVl6QixNQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUN4QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUN4QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUN2QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUN4QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUN4QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUN2QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtDQUM5QixDQUFDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIZXJvfSBmcm9tIFwiLi9oZXJvL2hlcm9cIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48aDE+e3t0aXRsZX19PC9oMT5cclxuPGgyPumgheebrjwvaDI+XHJcbjx1bCBjbGFzcz1cImhlcm9lc1wiPlxyXG4gIDxsaSAqbmdGb3I9XCJsZXQgaGVybyBvZiBoZXJvZXNcIiBbY2xhc3Muc2VsZWN0ZWRdPVwiaGVybyA9PT0gc2VsZWN0ZWRIZXJvXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGhlcm8pXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3toZXJvLmlkfX08L3NwYW4+IHt7aGVyby5uYW1lfX1cclxuICA8L2xpPlxyXG48L3VsPlxyXG48bXktaGVyby1kZXRhaWwgW2hlcm9dPVwic2VsZWN0ZWRIZXJvXCI+PC9teS1oZXJvLWRldGFpbD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICB0aXRsZSA9ICflgaXlurfnrqHnkIbjg7vjg4DjgqTjgqjjg4Pjg4gnO1xyXG4gICAgaGVyb2VzID0gSEVST0VTO1xyXG4gICAgc2VsZWN0ZWRIZXJvOiBIZXJvO1xyXG5cclxuICAgIG9uU2VsZWN0KGhlcm86IEhlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSGVybyA9IGhlcm87XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBIRVJPRVM6IEhlcm9bXSA9IFtcclxuICAgIHsgaWQ6IDExLCBuYW1lOiAn5L2T6ISC6IKq546HJyB9LFxyXG4gICAgeyBpZDogMTIsIG5hbWU6ICfln7rnpI7ku6PorJ0nIH0sXHJcbiAgICB7IGlkOiAxMywgbmFtZTogJ0JNSScgfSxcclxuICAgIHsgaWQ6IDE0LCBuYW1lOiAn5L2T5YaF5bm06b2iJyB9LFxyXG4gICAgeyBpZDogMTUsIG5hbWU6ICfkvZPmsLTliIbnjocnIH0sXHJcbiAgICB7IGlkOiAxNiwgbmFtZTogJ+eti+iCiemHjycgfSxcclxuICAgIHsgaWQ6IDE3LCBuYW1lOiAn5LuK5pel44Gu44Kr44Ot44Oq44O8JyB9LFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
