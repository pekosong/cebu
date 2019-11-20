import {observable} from 'mobx';
import {createContext, createRef} from 'react';

class CounterStore {
  @observable count = 0;

  @observable refs = {};
}

export const CounterStoreContext = createContext(new CounterStore());
