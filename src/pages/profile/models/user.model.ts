import { PictureModel } from './picture.model';

export class UserModel {
  public id: number;
  public email: string;
  public name: string;
  public picture: PictureModel;

  constructor() {
    this.id = null;
    this.email = '';
    this.name = '';
    this.picture = new PictureModel();
  }
}
