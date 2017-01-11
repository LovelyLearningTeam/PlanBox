<template>
	<!-- 注册 -->
	<section id="register_page" class="page">
		<header><router-link :to="{ path: '/'}" replace class="top_fh"></router-link><h3>注册</h3></header>
		<div class="xf_zhucebox xf_logininner">
			<p><span>帐号</span><input v-model="account" type="text" placeholder="请输入您的手机号码" maxlength='11'></p>
			<!-- <p><span>验证码</span><input type="password" placeholder="请输入短信验证码"><a href="JavaScript:;">验证码</a></p> -->
			<p><span>密码</span><input v-model="psd" type="password"  placeholder="请设置密码"></p>
			<p><span>重复</span><input v-model="psd_again" type="password" placeholder="请再次输入密码"></p>
		</div>
		<!-- <div class="xf_tybutton"><router-link to="/">确定</router-link></div> -->
		<div class="xf_tybutton"><a href="JavaScript:;" @click='post'>确定</a></div>
	</section>
	<!-- 注册 end -->
</template>


<script>
export default {
	data() {
    	return {
        	account : '',
      		psd : '',
    		psd_again : ''
    	};
    },
    created() {
    },
	methods: {
		post: function($index) {
			if(this.psd==this.psd_again){
			this.$http.post('http://www.cloudera.club:8088/health/user/register',{account:this.account,pwd:this.psd}).then((response) => {
		    	response = response.body;
		    	console.log(response)
		    	if(response.flag==1){
		    		alert('注册成功！')
					this.$router.replace({ path: '/' });
		    	}else{
		    		alert(response.message)
		    	}
		     });
			}else{
				alert('密码不一致！');
			}
			// this.$router.push({ path: '/' });
		}
	}
}
</script>