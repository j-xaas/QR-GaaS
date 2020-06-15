import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';//top画面
import { DiscoveryComponent } from './discovery/discovery.component'; //発見者画面
//import { PetsComponent } from './pets/pets.component';//ペット入力フォーム
import { QrFormComponent } from './qr-form/qr-form.component';
//import { ComponentのExport} form './<component-name>/~.component';

const routes: Routes = [ //ここに設定したpathがURLのSuffixに入るイメージ
  //{ path: 'top', component: <componentのexport>　Routeを設定}
  { path: '',  redirectTo: '/top', pathMatch: 'full' }, //デフォルトルートを設定
  { path: 'top', component: TopComponent }, //Topページへのパス
  { path: 'qr-form', component: QrFormComponent },//QRForm画面
  { path: 'discovery', component: DiscoveryComponent } //発見者画面へのパス
//  { path: 'pets', component: PetsComponent }//ペットのフォーム画面へのパス
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //こっちにComponentのimportはいらない
  exports: [RouterModule]
})
export class AppRoutingModule { }
