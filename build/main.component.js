"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let MainComponent = class MainComponent {
    constructor() {
        this.title = '健康管理・ダイエット';
        this.heroes = HEROES;
    }
};
MainComponent = __decorate([
    core_1.Component({
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
], MainComponent);
exports.MainComponent = MainComponent;
const HEROES = [
    { id: "12%", name: '体脂肪率' },
    { id: "1,785.36kcal", name: '基礎代謝' },
    { id: 26, name: 'BMI' },
    { id: 30, name: '体内年齢' },
    { id: "45.2kg", name: '体水分率' },
    { id: "57.6kg", name: '筋肉量' },
    { id: "1220kcal", name: '今日の摂取カロリー' },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY3JpcHRzL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQXdDO0FBOEJ4QyxJQUFhLGFBQWEsR0FBMUI7SUEzQkE7UUE0QkUsVUFBSyxHQUFHLFlBQVksQ0FBQztRQUNyQixXQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FBQSxDQUFBO0FBSFksYUFBYTtJQTNCekIsZ0JBQVMsQ0FBRTtRQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO1FBQ0QsTUFBTSxFQUFFO1lBQ04sMENBQTBDO1lBQzFDLDBDQUEwQztZQUMxQywwQkFBMEI7U0FDM0I7S0FDRixDQUFDO0dBRVcsYUFBYSxDQUd6QjtBQUhZLHNDQUFhO0FBSzFCLE1BQU0sTUFBTSxHQUFHO0lBQ1gsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDM0IsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDcEMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDdkIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDeEIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDOUIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDN0IsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Q0FDeEMsQ0FBQyIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FjY29yZGlvbk1vZHVsZX0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT57e3RpdGxlfX08L2gxPlxyXG4gICAgPGgyPumgheebrjwvaDI+XHJcbiAgICA8YWNjb3JkaW9uIGNsYXNzPVwiaGVyb2VzXCI+XHJcbiAgICAgIDxhY2NvcmRpb24tZ3JvdXAgKm5nRm9yPVwibGV0IGhlcm8gb2YgaGVyb2VzXCIgW2NsYXNzLnNlbGVjdGVkXT1cImhlcm9cIiBoZWFkaW5nPVwie3toZXJvLm5hbWV9fVwiIFtpc09wZW5dPVwiZmFsc2VcIj5cclxuICAgICAgICA8cD57e2hlcm8uaWR9fTwvcD5cclxuICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICA8L2FjY29yZGlvbj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvXCIgcm91dGVyTGlua0FjdGl2ZT1cImN1cnJlbnRcIlxyXG4gICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7IGV4YWN0OiB0cnVlIH1cIj5cclxuICAgICAgICDjg5vjg7zjg6A8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvY29udGVudHNcIiByb3V0ZXJMaW5rQWN0aXZlPVwiY3VycmVudFwiPlxyXG4gICAgICAgIOOCteODlueUu+mdojwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgcm91dGVyTGluaz1cIi9kdW1teVwiIHJvdXRlckxpbmtBY3RpdmU9XCJjdXJyZW50XCI+XHJcbiAgICAgICAg5LiN5q2j44Gq44Oa44O844K444KS6KGo56S6PC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGhyIC8+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgICdoMSB7Zm9udC1zaXplOiAyOHB4O3BhZGRpbmctbGVmdDogMTVweDt9JyxcclxuICAgICdoMiB7Zm9udC1zaXplOiAyNHB4O3BhZGRpbmctbGVmdDogMTVweDt9JyxcclxuICAgICd1bCB7cGFkZGluZy1sZWZ0OiAzMHB4O30nXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xyXG4gIHRpdGxlID0gJ+WBpeW6t+euoeeQhuODu+ODgOOCpOOCqOODg+ODiCc7XHJcbiAgaGVyb2VzID0gSEVST0VTO1xyXG59XHJcblxyXG5jb25zdCBIRVJPRVMgPSBbXHJcbiAgICB7IGlkOiBcIjEyJVwiLCBuYW1lOiAn5L2T6ISC6IKq546HJyB9LFxyXG4gICAgeyBpZDogXCIxLDc4NS4zNmtjYWxcIiwgbmFtZTogJ+WfuuekjuS7o+isnScgfSxcclxuICAgIHsgaWQ6IDI2LCBuYW1lOiAnQk1JJyB9LFxyXG4gICAgeyBpZDogMzAsIG5hbWU6ICfkvZPlhoXlubTpvaInIH0sXHJcbiAgICB7IGlkOiBcIjQ1LjJrZ1wiLCBuYW1lOiAn5L2T5rC05YiG546HJyB9LFxyXG4gICAgeyBpZDogXCI1Ny42a2dcIiwgbmFtZTogJ+eti+iCiemHjycgfSxcclxuICAgIHsgaWQ6IFwiMTIyMGtjYWxcIiwgbmFtZTogJ+S7iuaXpeOBruaRguWPluOCq+ODreODquODvCcgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
