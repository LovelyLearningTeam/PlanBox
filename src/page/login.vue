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
				<div class="xf_tybutton"><a href="JavaScript:;">登录</a></div>
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