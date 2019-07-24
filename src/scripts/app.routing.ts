import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { MainComponent }  from './main.component';
import { ContentsComponent } from "./contents.component";
import { ErrorComponent } from './error.component';

// ［1］ルートを定義
const myRoutes = [
  { path: 'contents', component: ContentsComponent },
  { path: '', component: MainComponent },
  { path: '**', component: ErrorComponent }
];

// ［2］ルーティング情報付きのRouterModuleモジュールを生成
export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
