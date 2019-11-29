import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
//import { ComponentのExport} form './<component-name>/~.component';

const routes: Routes = [ //ここに設定したpathがURLのSuffixに入るイメージ
  //{ path: 'top', component: <componentのexport>　Routeを設定}
  { path: '',  redirectTo: '/top', pathMatch: 'full' }, //デフォルトルートを設定
  { path: 'top', component: TopComponent } //Topページを設定
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //こっちにComponentのimportはいらない
  exports: [RouterModule]
})
export class AppRoutingModule { }
