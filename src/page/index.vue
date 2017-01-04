<template>
  <!-- 登录 -->
  <section id="login_page" class="page">
    <header><h3>登录</h3></header>
    <div class="xf_loginbox">
      <form action="ucenter" method="post">
        <div class="xf_logininner">
          <p><span>账户</span><input id="name" name="name" type="text" placeholder="请输入用户名"></p>
          <p><span>密码</span><input id="password" name="password" type="password" placeholder="密码"></p>
        </div>
        <div class="xf_tybutton"><router-link to="/user">登录</router-link></div>
      </form>
      <div class="xf_loginqt">
        <!-- <a href="pages/xiugmm.html">忘记密码？</a> -->
        <a href="JavaScript:;"></a>
        <router-link to="/register">没有帐号 ? 现在注册</router-link>
      </div>
    </div>
  </section>
  <!-- 登录 end -->
</template>

<style>
  @import "../style/xf.css";
  @import "../style/lxj.css";
  @import "../style/hyr.css";
</style>

<script>
export default {
  data() {
    return {
      lists:[]
    }
  },
  created () {
    // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
    this.get_data()
  },
  methods: {
    get_data: function(params) {
      // var v = this
      // if (!params) params = {}
      // // 我们这里用全局绑定的 $api 方法来获取数据，方便吧~
      // v.$api.get('topics', params, function(r) {
      //   v.lists = r.data
      // })
    }
  },
}
</script>
