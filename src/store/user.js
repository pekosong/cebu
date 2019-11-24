import {observable, action} from 'mobx';
import {createContext} from 'react';
import {streamUser} from 'app/src/api/user';

class UserStore {
  @observable user = null;
  @observable email = 'b@naver.com';

  @action getUser = () => {
    return streamUser(this.email).onSnapshot(
      doc => {
        this.user = doc.data();
      },
      error => {
        console.log(error);
      },
    );
  };
}

export const UserStoreContext = createContext(new UserStore());
