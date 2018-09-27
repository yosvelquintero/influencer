import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  isLoggedIn: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    private fb: Facebook
  ) {
    this.platform
      .ready()
      .then(() => this.handleIsLoggedIn())
      .catch(error => console.error('Error', error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  signInWith(socialNetwork: string): void {
    const options = {
      facebook: () => this.signInWithFacebook(),
      instagram: () => this.signInWithInstagram()
    }

    return options[socialNetwork]();
  }

  signInWithFacebook() {
    this.fb
      .login(['public_profile', 'user_friends', 'email'])
      .then((response: FacebookLoginResponse) => {
        this.isLoggedIn  = response.status === 'connected';
        if (this.isLoggedIn) {
          this.navCtrl.push(TabsPage);
        }
      })
      .catch(error => console.error('Error logging into Facebook', error));
  }

  signInWithInstagram() {
    console.log('signIn with Instagram!');
  }

  private handleIsLoggedIn() {
    this.fb
      .getLoginStatus()
      .then(response => {
        this.isLoggedIn = response.status === 'connected';
        if (this.isLoggedIn) {
          this.navCtrl.push(TabsPage);
        }
      })
      .catch(error => console.error('Response error', error));
  }
}
