"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let HeroDetailComponent = class HeroDetailComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-detail',
        template: `
<div *ngIf="hero">
    <h2>{{hero.name}} 詳細</h2>
    <div>
        <label>id: </label>{{hero.id}}
    </div>
    <div>
        <label>name: </label>{{hero.name}}
    </div>
</div>
`
    })
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY3JpcHRzL2hlcm8vaGVyby1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQStDO0FBaUIvQyxJQUFhLG1CQUFtQixHQUFoQztDQUVDLENBQUE7QUFEVztJQUFSLFlBQUssRUFBRTs7aURBQVk7QUFEVixtQkFBbUI7SUFkL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0NBVWI7S0FDQSxDQUFDO0dBQ1csbUJBQW1CLENBRS9CO0FBRlksa0RBQW1CIiwiZmlsZSI6Imhlcm8vaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0hlcm99IGZyb20gXCIuL2hlcm9cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1oZXJvLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48ZGl2ICpuZ0lmPVwiaGVyb1wiPlxyXG4gICAgPGgyPnt7aGVyby5uYW1lfX0g6Kmz57SwPC9oMj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsPmlkOiA8L2xhYmVsPnt7aGVyby5pZH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsPm5hbWU6IDwvbGFiZWw+e3toZXJvLm5hbWV9fVxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvRGV0YWlsQ29tcG9uZW50IHtcclxuICAgQElucHV0KCkgaGVybzogSGVybztcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
