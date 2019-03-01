import { Component } from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private iab: InAppBrowser){
  }

  openLink() {
    const browser = this.iab.create('https://ionicframework.com');
    browser.show();
  }
}
