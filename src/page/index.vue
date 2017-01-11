<template>
	<!-- 登录 -->
	<section id="login_page" class="page">
		<loading v-show="showLoading"></loading>
		<header><h3>登录</h3></header>
		<div class="xf_loginbox">
			<form action="ucenter" method="post">
				<div class="xf_logininner">
					<p><span>账户</span><input v-model="account" type="text" placeholder="请输入用户名"></p>
					<p><span>密码</span><input v-model="psd" type="password" placeholder="密码"></p>
				</div>
				<div class="xf_tybutton"><a href="JavaScript:;" @click='post'>登录</a></div>
			</form>
			<div class="xf_loginqt">
				<!-- <a href="pages/xiugmm.html">忘记密码？</a> -->
				<a href="JavaScript:;"></a>
				<router-link :to="{ path: '/register'}" replace>没有帐号 ? 现在注册</router-link>
			</div>
		</div>
	</section>
	<!-- 登录 end -->
</template>

<script>
import loading from './loading.vue'

export default {
	data() {
    	return {
    		showLoading : false,
	    	account : '',
	    	psd : ''
	    };
	},
 	components: { loading },
	created() {
	    // 用户状态cookie
	    var key_user = localStorage.getItem('key_user');
	    key_user?this.$router.replace({ path: '/user' }):" ";
	},
	methods: {
		post: function($index) {
			this.showLoading = true; //控制loading显示
	   		this.$http.post('http://www.cloudera.club:8088/health/user/login',{account:this.account,pwd:this.psd}).then((response) => {
		    	response = response.body;
		    	if(response.flag==1){
	   				localStorage.setItem("key_user", 1); //登录成功cookie
		        	this.$router.replace({ path: '/user' });
		      	}else{
		    		alert(response.message)
		    	}
				this.showLoading = false; //控制loading隐藏
	   		});
		}
	}
}
</script>
