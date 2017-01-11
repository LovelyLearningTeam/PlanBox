<template>
	<!-- 注册 -->
	<section id="register_page" class="page">
		<header><a href="javascript:history.go(-1);" class="xf_fh"></a><h3>注册</h3></header>
		<div class="xf_zhucebox xf_logininner">
			<p><span>帐号</span><input id="name"type="text" placeholder="请输入您的手机号码"></p>
			<!-- <p><span>验证码</span><input type="password" placeholder="请输入短信验证码"><a href="JavaScript:;">验证码</a></p> -->
			<p><span>密码</span><input id="password" type="password" placeholder="请设置密码"></p>
			<p><span>重复</span><input id="password_again" type="password" placeholder="请再次输入密码"></p>
		</div>
		<div class="xf_tybutton"><router-link to="/">确定</router-link></div>
	</section>
	<!-- 注册 end -->
</template>