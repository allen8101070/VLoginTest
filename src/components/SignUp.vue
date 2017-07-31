<template>
  <div class="sign-up">
    <h3>註冊</h3>
    <p>創建一個帳戶(輸入虛構信箱也可以)</p>
    <p class="errP" v-if="errP">格式不正確或已有此帳號密碼，請重新輸入...</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signUp">註冊</button>
    <span>或者你想要<router-link to="/login">登入</router-link>.</span>
  </div>
</template>

<script>
  import firebase from 'firebase'//引入firebase

  export default {
    name: 'signUp',
    data: function() {
      return {
        email: '',
        password: '',
        errP: false //預設false不顯示v-if文字
      }
    },
    methods: {
      signUp: function() {
        var thisError = this;//先保存'this'
        //firebase定義好的方法 括號內是要傳過去的email和password 然後.... 
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            // 路由到hello
            this.$router.replace('hello')
            
            
            //也可以路由到登入頁 讓使用者登入後再進入hello
            // this.$router.replace('login')
          },
          (err) => {
            thisError.errP = true;//讓v-if顯示文字
          }
        );
      }
    }
  }
</script>

<style scoped>
  .signUp {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
  .errP {
    font-size: 14px;
    color: red;
    margin-top: 0px;
  }
</style>
