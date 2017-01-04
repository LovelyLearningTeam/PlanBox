<template>
	<section id="my_page" class="page">
		<div class="xf_mytop">
			<img src="../../images/ico_mytx.png" alt="">
			<p>高圆圆</p>
		</div>
		<div class="xf_myinner">
			<ul>
				<li><router-link to="/user/mydata">个人资料</router-link></li>
			</ul>
			<ul>
				<li><router-link to="/user/history">计划历史</router-link></li>
				<li><router-link to="/user/chart">趋势图</router-link></li>
			</ul>
		</div>
		<footer>
			<router-link to="/user">计划</router-link>
			<router-link to="/user/my" class="cur">我的</router-link>
		</footer>
	</section>
</template>