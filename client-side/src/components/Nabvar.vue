<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link :to="{name:'Home'}">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              List Product
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </router-link>
        <router-link :to="{name:'Carts'}">
          <li class="nav-item">
            <a class="nav-link" href="#">Cart</a>
          </li>
        </router-link>
        <router-link :to="{name:'Histories'}">
          <li class="nav-item">
            <a class="nav-link link" href="#">History</a>
          </li>
        </router-link>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            v-if="!$store.state.isLoggin"
          >LOGIN</a>

          <!-- <div v-if="$store.state.isLoggin" class="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown"> -->
          <div
            v-if="!$store.state.isLoggin"
            class="dropdown-menu dropdown-menu-left"
            aria-labelledby="navbarDropdown"
          >
            <form @submit.prevent="userLogin">
              <h1>LOGIN</h1>
              <div class="form-group">
                <label for="1email">Email address</label>
                <input
                  type="1email"
                  class="form-control"
                  id="1email"
                  aria-describedby="1emailHelp"
                  placeholder="Enter 1email"
                  v-model="email"
                />
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="1password">Password</label>
                <input
                  type="1password"
                  class="form-control"
                  id="1password"
                  placeholder="1Password"
                  v-model="password"
                />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <!-- </div> -->
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            v-if="!$store.state.isLoggin"
          >Register</a>
          <div
            v-if="!$store.state.isLoggin"
            class="dropdown-menu dropdown-menu-left"
            aria-labelledby="navbarDropdown"
          >
            <form>
              <h1>Register</h1>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  v-model="registerEmail"
                />
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  v-model="registerPassword"
                />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button @click.prevent="userRegister" type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </li>
        <li>
          <button
            class="btn btn-outline-info my-2 my-sm-0"
            type="submit"
            v-if="$store.state.isLoggin"
            @click.prevent="checkout"
          >Checkout All</button>
        </li>
      </ul>

      <button
        v-if="$store.state.isLoggin"
        @click.prevent="processLogout"
        class="btn btn-outline-success my-2 my-sm-0"
        type="submit"
      >Logout</button>
      <!-- <form class="form-inline my-2 my-lg-0">
      </form>-->
    </div>
  </nav>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      email: null,
      password: null,
      registerEmail: null,
      registerPassword: null
    };
  },
  methods: {
    userLogin() {
      this.$store.dispatch("postLogin", {
        email: this.email,
        password: this.password
      });
      (this.email = null), (this.password = null);
    },
    userRegister() {
      this.$store.dispatch("postRegister", {
        registerEmail: this.registerEmail,
        registerPassword: this.registerPassword
      });
      (this.registerEmail = null), (this.registerPassword = null);
    },
    processLogout() {
      localStorage.clear();
      this.$store.commit("SET_LOGIN", false);
      this.$router.push({name:'Home'});
    },
    checkout() {
      this.$store.dispatch("payments");
    }
  },
  created() {
    //   console.log(localStorage.access_token);
   
  }
};
</script>

<style scoped>
.dropdown-menu {
  width: 400px;
  padding: 53px;
}
</style>