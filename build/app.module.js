"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_1 = require("./app.routing"); // ルーティングファイル
const ngx_bootstrap_1 = require("ngx-bootstrap"); // ブートストラップモジュール
// 各コンポーネントファイルのインポート
const app_component_1 = require("./app.component");
const main_component_1 = require("./main.component");
const contents_component_1 = require("./contents.component");
const error_component_1 = require("./error.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.MY_ROUTES,
            ngx_bootstrap_1.AccordionModule.forRoot(),
        ],
        declarations: [
            app_component_1.AppComponent,
            main_component_1.MainComponent,
            contents_component_1.ContentsComponent,
            error_component_1.ErrorComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY3JpcHRzL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBdUM7QUFDdkMsZ0VBQXdEO0FBRXhELCtDQUE0QyxDQUFDLGFBQWE7QUFDMUQsaURBQThDLENBQUMsZ0JBQWdCO0FBRS9ELHFCQUFxQjtBQUNyQixtREFBNkM7QUFDN0MscURBQWtEO0FBQ2xELDZEQUEwRDtBQUMxRCx1REFBbUQ7QUFnQm5ELElBQWEsU0FBUyxHQUF0QjtDQUF5QixDQUFBO0FBQVosU0FBUztJQWRyQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxnQ0FBYTtZQUNiLHVCQUFTO1lBQ1QsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7U0FDNUI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLDhCQUFhO1lBQ2Isc0NBQWlCO1lBQ2pCLGdDQUFjO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuXHJcbmltcG9ydCB7IE1ZX1JPVVRFUyB9ICAgZnJvbSAnLi9hcHAucm91dGluZyc7IC8vIOODq+ODvOODhuOCo+ODs+OCsOODleOCoeOCpOODq1xyXG5pbXBvcnQge0FjY29yZGlvbk1vZHVsZX0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7IC8vIOODluODvOODiOOCueODiOODqeODg+ODl+ODouOCuOODpeODvOODq1xyXG5cclxuLy8g5ZCE44Kz44Oz44Od44O844ON44Oz44OI44OV44Kh44Kk44Or44Gu44Kk44Oz44Od44O844OIXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSAgZnJvbSAnLi9tYWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRlbnRzQ29tcG9uZW50IH0gIGZyb20gJy4vY29udGVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgTVlfUk9VVEVTLCAvLyDov73liqAuIHJvdXRpbmcg44Gu5oOF5aCx44KS55m76Yyy44GZ44KLXHJcbiAgICAgICAgQWNjb3JkaW9uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTWFpbkNvbXBvbmVudCxcclxuICAgICAgICBDb250ZW50c0NvbXBvbmVudCxcclxuICAgICAgICBFcnJvckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
