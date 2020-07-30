import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);
const myUrl = `http://localhost:3000`

export default new Vuex.Store({

  state: {
    products: [],
    carts: [],
    histories: [],
    isLoggin: false
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
    },
    SET_LOGIN(state, status) {
      state.isLoggin = status
    }
  },
  actions: {
    async postLogin({ commit }, user) {
      try {
        const dataUser = await Axios({
          method: "POST",
          url: `${myUrl}/login`,
          data: {
            email: user.email,
            password: user.password
          }
        })
        commit('SET_LOGIN', true)
        localStorage.setItem('access_token', dataUser.data.token)
        this.$router.push('/home')
      } catch (error) {
        console.log(error.response);
      }
    },
    async postRegister({ }, user) {
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
        console.log(error, 'errrorr');
      }
    },
    async postCart({ }, cart) {
      try {
        console.log(cart);
        const dataProduct = await Axios({
          method: 'POST',
          url: `${myUrl}/carts`,
          headers: {
            access_token: localStorage.access_token,
          },
          data:{
            ProductId:cart,
            quantity:1
          }
        })
        console.log(dataProduct);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCart({ }, id) {
      try {
        const dataProduct = await Axios({
          method: 'DELETE',
          url: `${myUrl}/carts/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCart({ commit }) {
      try {
        const dataCarts = await Axios({
          method: 'GET',
          url: `${myUrl}/carts`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        commit("SET_CARTS", dataCarts.data)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchHistory({ commit }) {
      try {
        const dataHistories = await Axios({
          method: 'GET',
          url: `${myUrl}/histories`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        commit("SET_HISTORIES", dataHistories.data)
      } catch (error) {
        console.log(error);
      }
    },
    async payments({ commit }) {
      try {
        const dataPayments = await Axios({
          method: 'GET',
          url: `${myUrl}/carts/payments`,
          headers: {
            access_token: localStorage.access_token,
          },
        })
        // commit("SET_HISTORIES", dataPayments.data)
        console.log(dataPayments);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
});
