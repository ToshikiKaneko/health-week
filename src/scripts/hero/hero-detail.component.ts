import {Component, Input} from "@angular/core";
import {Hero} from "./hero";

@Component({
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
export class HeroDetailComponent {
   @Input() hero: Hero;
}
