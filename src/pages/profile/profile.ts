import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { UserModel } from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  isLoggedIn: boolean = false;
  user: UserModel = new UserModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private platform: Platform,
    private fb: Facebook
  ) {
    this.platform
      .ready()
      .then(() => this.handleIsLoggedIn())
      .catch(error => console.error('Error', error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout() {
    this.fb
      .logout()
      .then(() => {
        const root = this.app.getRootNav();
        this.isLoggedIn = false;
        root.popToRoot();
      })
      .catch(error => console.error('Response error', error));
  }

  private handleIsLoggedIn(): void {
    this.fb
      .getLoginStatus()
      .then(response => {
        this.isLoggedIn = response.status === 'connected';
        if (this.isLoggedIn) {
          this.getUserDetail(response.authResponse.userID);
        }
      })
      .catch(error => console.error('Response error', error));
  }

  private getUserDetail(userId: string): void {
    this.fb
      .api(`/${userId}/?fields=id,email,name,picture,gender`, ['public_profile'])
      .then(response => this.user = response)
      .catch(error => console.error('Response error', error));
  }

}
