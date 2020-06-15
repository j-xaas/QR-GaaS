import { Component, OnInit } from '@angular/core';
//Stepperを利用するために必要
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.scss']
})
export class QrFormComponent implements OnInit {

  constructor() { }

  ngOnInit() { // 内部を追記
/*     this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }); */
  }

  saveMail() {
    let mail_element;
    mail_element = document.getElementById('mail_input');
    let mail = mail_element.value;
    console.log(mail); // 変数がちゃんと格納されているか確認
  }

  saveMoreinfo() { // Generateボタン押下時の処理　QRCodeAPIへ情報を送る？？
    event.preventDefault(); // 押下によるリロードを無効化?不要？
    // 変数宣言
    let moreinfo_element;
    // 変数取得
    moreinfo_element = document.getElementById('more_info_input');
    const moreinfo = moreinfo_element.value;

    let mail_element;
    mail_element = document.getElementById('mail_input');
    let mail = mail_element.value;
    console.log(mail); // 変数がちゃんと格納されているか確認


    // QR APIに送るURLを生成
    const Url_Para = mail + moreinfo;
    const url = 'https://j-xaas.github.io/qr-gaas?' + Url_Para;
    return(url);

  }

}
