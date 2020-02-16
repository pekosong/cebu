import {observable, action} from 'mobx';
import {createContext} from 'react';
import {streamShop, downloadShopList} from 'app/src/api/shop';

class ShopStore {
  @observable shop = null;
  @observable shopList = [];
  @observable shopId = '';

  @action getShop = shopId => {
    return streamShop(shopId).onSnapshot(
      doc => {
        this.shop = doc.data();
      },
      error => {
        console.log(error);
      },
    );
  };
  @action getShopList = () => {
    return downloadShopList()
      .get()
      .then(querySnapshot => {
        const shops = [];
        querySnapshot.forEach(doc => {
          const shop = doc.data();
          if (shop['preview'] !== '') shops.push(doc.data());
        });
        this.shopList = shops;
      });
  };
}

export const ShopStoreContext = createContext(new ShopStore());
