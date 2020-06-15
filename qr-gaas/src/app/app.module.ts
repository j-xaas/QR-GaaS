import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//①Angular MaterialのMatToolbar/Mat-buton/mat-form等をインポート。必要なものがあれば随時追加
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatStepperModule,
  MatMenuModule
 } from '@angular/material';
// Mat-Iconを追加
import { MatIconModule } from '@angular/material/icon';
//Flex-Layoutを追加 参考：https://dev.classmethod.jp/client-side/angular-flex-layout/#fxLayout%E5%AD%90%E8%A6%81%E7%B4%A0%E3%81%AE%E4%B8%A6%E3%81%B6%E5%90%91%E3%81%8D
import { FlexLayoutModule } from '@angular/flex-layout';

//子コンポーネントのimport。 ng g component実行時に自動で書き込まれる
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DiscoveryComponent } from './discovery/discovery.component';
import { PetsComponent } from './pets/pets.component';
import { QrFormComponent } from './qr-form/qr-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HeaderComponent,
    DiscoveryComponent,
    PetsComponent,
    QrFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, //インポートしたモジュールを追加
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatExpansionModule,
    MatMenuModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
