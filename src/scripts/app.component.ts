import {Component} from "@angular/core";
import {AccordionConfig} from 'ngx-bootstrap';

@Component({
    selector: 'my-app',
    template: `
<router-outlet></router-outlet>
`
})

export class AppComponent {
    title = '健康管理・ダイエット';
}
