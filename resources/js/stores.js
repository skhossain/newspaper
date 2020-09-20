//vuex Store

import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
state: {
	categories:"",
},
getters:{
  categories: state =>{
            return state.categories;
        }
},
mutations: {
  categories (state, payload) {
        state.categories = payload
      },
	addnew_category_item(state,payload){
        state.categories.splice(0,0,payload);
      },
	
	remove_category_item(state,payload){
        state.categories.splice(payload, 1);
      },
}

});

export default store;
