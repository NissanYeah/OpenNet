<template>
  <div>
    <h1>Sign In</h1>
    <div>
      Account:
        <input type="text" v-model="login.loginName">
    </div>
    <div>
      Password:
        <input type="password" v-model="login.password">
    </div>
    <div>
       <button @click="handleClick"> Sign In </button>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import router from '@/router';

@Component
export default class Login extends Vue {

  private login = {
    loginName: '',
    password: '',
  };

  handleClick() {
    const { login: { loginName, password } } = this; 

    const loginData = {
      accountId: loginName,
      pswd: password
    };

    axios.post('http://opn.mobiusloop.cc/api/user/login', loginData)
      .then((response) => {
        const { data: { token } } = response
        if(token){
          sessionStorage.token = "Bearer "+ token;
          router.push('/UsersList');
        }
      })
  }

}
</script>
