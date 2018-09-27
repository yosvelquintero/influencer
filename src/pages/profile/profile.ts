import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  isLoggedIn: boolean = false;
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private platform: Platform,
    private fb: Facebook
  ) {
    this.platform
      .ready()
      .then(() => {
        console.log('platform.ready()');
        this.handleIsLoggedIn();
      })
      .catch(error => console.error('Error', error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout() {
    this.fb
      .logout()
      .then(() => this.isLoggedIn = false)
      .catch(error => console.error('Error', error));
  }

  logoutRedirectToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  private handleIsLoggedIn() {
    this.fb
      .getLoginStatus()
      .then(response => {
        console.log(response.status);
        this.isLoggedIn = response.status === 'connect';
        if (this.isLoggedIn) {
          this.getUserDetail(response.authResponse.userID);
        }
      })
      .catch(error => console.error('Response error', error));
  }

  private getUserDetail(userId: string) {
    this.fb
      .api(`/${userId}/?fields=id,email,name,picture,gender`, ['public_profile'])
      .then(response => {
        console.log('getUserDetail:', response);
        this.user = response;
      })
      .catch(error => console.error('Response error', error));
  }

}
