import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  signInWith(socialNetwork: string): void {
    const options = {
      facebook: () => this.signInWithFacebook(),
      instagram: () => this.signInWithInstagram()
    }

    // TODO:
    // Should be implemented authentication
    this.navCtrl.push(TabsPage);

    return options[socialNetwork]();
  }

  signInWithFacebook() {
    console.log('signIn with Facebook!');
  }

  signInWithInstagram() {
    console.log('signIn with Instagram!');
  }

}
