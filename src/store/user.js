import {observable, action} from 'mobx';
import {createContext} from 'react';
import {getUser} from './node_modules/app/src/api/user';
import {USER} from '../model/user';

class UserStore {
  @observable isLogin = false;
  @observable isAdmin = false;
  @observable user = USER;
  @observable email = 'b@naver.com';

  @action setUser = email => {
    return getUser(email).onSnapshot(
      doc => {
        this.isLogin = true;
        this.user = doc.data();
      },
      error => {
        console.log(error);
      },
    );
  };
  @action logout = () => {
    this.isLogin = false;
    this.user = USER;
  };
}

export const UserStoreContext = createContext(new UserStore());
