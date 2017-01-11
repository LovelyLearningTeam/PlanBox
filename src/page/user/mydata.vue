<template>
	<section id="" class="page">
		<header><router-link :to="{ path: '/user/my'}" replace class="top_fh"></router-link><h3>个人资料</h3><router-link :to="{ path: '/user/my'}" replace class="top_rfont">完成</router-link></header>
		<div class="my_data">
			<ul>
				<li><router-link :to="{ path: '/user/my'}" replace ><span>头像</span><img src="../../images/ico_mytx.png" alt=""></router-link></li>
			</ul>
			<ul>
				<li><router-link :to="{ path: '/user/my'}" replace ><span>名字</span><i>晓峰</i></router-link></li>
				<li><router-link :to="{ path: '/user/my'}" replace ><span>性别</span><i>男</i></router-link></li>
				<li><router-link :to="{ path: '/user/my'}" replace ><span>签名</span><i>感觉自己萌萌啊</i></router-link></li>
			</ul>
		</div>
	</section>
</template>