<template>
  <div class="login">
    <h3>登入</h3>
    <p class="errP" v-if="errP">登入失敗，請重新輸入帳號密碼...</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signIn">登入</button>
    <p>沒有帳戶?你也許想要<router-link to="/sign-up">註冊</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'//引入firebase

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: '',
        errP: false//預設false不顯示v-if文字
      }
    },
    methods: {
      signIn: function() {
        var thisError = this;//先保存'this'
        //firebase定義好的方法 括號內是要傳過去的email和password
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            //路由到hello
            this.$router.replace('hello')
          },
          (err) => {
            thisError.errP = true;//讓v-if顯示文字
          }
        );
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
  .errP {
    font-size: 14px;
    color: red;
    margin-top: 0px;
  }
</style>
