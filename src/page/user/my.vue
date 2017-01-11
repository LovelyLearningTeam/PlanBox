<template>
	<section id="my_page" class="page">
		<div class="xf_mytop">
			<img src="../../images/ico_mytx.png" alt="">
			<p>高圆圆</p>
		</div>
		<div class="xf_myinner">
			<ul>
				<li><router-link :to="{ path: '/user/mydata'}" replace>个人资料</router-link></li>
			</ul>
			<ul>
				<li><router-link :to="{ path: '/user/history'}" replace >我的步伐</router-link></li>
				<li><router-link :to="{ path: '/user/chart'}" replace >趋势图</router-link></li>
			</ul>
		</div>
		<div class="xf_tybutton logout"><a href="JavaScript:;" @click='logout'>更换账号</a></div>
		<footer>
			<router-link :to="{ path: '/user'}" replace>目标</router-link>
			<router-link :to="{ path: '/user/my'}"  replace class="cur">我的</router-link>
		</footer>
	</section>
</template>

<script>
export default {
	methods: {
		logout: function($index) {
			localStorage.removeItem('key_user');
			this.$router.replace({ path: '/' });
		}
	}
}
</script>