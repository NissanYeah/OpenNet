<template>
  <div>
    Account: <input type="text" v-model="login.loginName">
    <br>
    password: <input type="password" v-model="login.password">
    <br>
    <button @click="handleClick">Login In</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import router from '@/router';

@Component({
  components: {
  },
})
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
          router.push('/userList');
        }
      })
  }

}
</script>
