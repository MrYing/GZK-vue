/**
 * Created by l on 2017/10/9.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import state from './state';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
})
