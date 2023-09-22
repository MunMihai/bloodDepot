import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private _currentUser: UserModel | null = null;
  public set currentUser(currentUser: UserModel) {
    this._currentUser = currentUser;
  }

  public get currentUser(): UserModel | null {
    return this._currentUser;
  }
}