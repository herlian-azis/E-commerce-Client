import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);
const myUrl = `http://localhost:3000`

export default new Vuex.Store({

  state: {
    products: [],
    carts: [],
    histories: []
  },
  mutations: {
    SET_PRODUCTS(state, product) {
      state.products = product
    },
    SET_HISTORIES(state, history) {
      state.histories = history
    },
    SET_CARTS(state, cart) {
      state.carts = cart
    }
  },
  actions: {
    async postLogin({ }, user) {
      try {
        const dataUser = await Axios({
          method: "POST",
          url: `${myUrl}/login`,
          data: {
            email: user.email,
            password: user.password
          }
        })
        localStorage.setItem('access_token', dataUser.data.token)
      } catch (error) {
        console.log(error.response);
      }
    },
    async  postRegister({ }, user) {
      try {
        const dataUser = await Axios({
          method: "POST",
          url: `${myUrl}/register`,
          data: {
            email: user.email,
            password: user.password
          }
        })
        localStorage.setItem('access_token', dataUser.data.token)
      } catch (error) {
        console.log(error.response);
      }
    },
    async fetchProduct({ commit }) {
      console.log("object");
      try {
        let dataProduct = await Axios({
          method: 'GET',
          url: `${myUrl}/products`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        console.log(dataProduct.data,'dasdsa');
        commit("SET_PRODUCTS", dataProduct.data)
      } catch (error) {
        console.log(error,'errrorr');
      }
    },
    async  postCart({ }, cart) {
      try {
        const dataProduct = await Axios({
          method: 'POST',
          url: `${url}/carts`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        console.log(dataProduct);
      } catch (error) {
        console.log(error);
      }
    },
    async  deleteCart({ }, id) {
      try {
        const dataProduct = await Axios({
          method: 'DELETE',
          url: `${url}/carts/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        console.log(dataProduct);
      } catch (error) {
        console.log(error);
      }
    },
    async  fetchCart({ commit }) {
      try {
        const dataCarts = await Axios({
          method: 'GET',
          url: `${url}/carts`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        commit("SET_CARTS", dataCarts.data)
      } catch (error) {
        console.log(error);
      }
    },
    async  fetchHistory({ commit }) {
      try {
        const dataHistories = await Axios({
          method: 'GET',
          url: `${url}/histories`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        commit("SET_HISTORIES", dataHistories.data)
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
});
