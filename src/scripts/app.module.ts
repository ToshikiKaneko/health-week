import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { MY_ROUTES }   from './app.routing'; // ルーティングファイル
import {AccordionModule} from 'ngx-bootstrap'; // ブートストラップモジュール

// 各コンポーネントファイルのインポート
import {AppComponent} from "./app.component";
import { MainComponent }  from './main.component';
import { ContentsComponent }  from './contents.component';
import { ErrorComponent } from './error.component';

@NgModule({
    imports: [
        BrowserModule,
        MY_ROUTES, // 追加. routing の情報を登録する
        AccordionModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        MainComponent,
        ContentsComponent,
        ErrorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
