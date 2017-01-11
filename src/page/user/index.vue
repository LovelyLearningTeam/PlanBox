<template>
	<section id="" class="page">
		<header>
			<a href="JavaScript:;" class="top_bj" @click='tabClass'>{{ state }}</a>
			<h3>计划</h3>
			<router-link :to="{ path: '/user/addplan'}" replace class="top_add">+</router-link>
		</header>
		<div class="uers_plan" :class="{ 'remove' : classObject, '': !classObject}" >
			<!-- <div class="no_plan">你还没有计划~<br/>右上角添加来一个吧！</div> -->
			<ul>
				<li><div><a href="JavaScript:;" class='ico_ok'>完成</a><b>吃</b><em>早起</em><p>已坚持1天</p></div><i class='ico_remove'>删</i></li>
				<li><div><a href="JavaScript:;" class='ico_ok'>完成</a><b>吃</b><em>早起</em><p>已坚持1天</p></div><i class='ico_remove'>删</i></li>
				<li><div><a href="JavaScript:;" class='ico_ok'>完成</a><b>吃</b><em>早起</em><p>已坚持1天</p></div><i class='ico_remove'>删</i></li>
			</ul>
		</div>
		<footer>
			<router-link :to="{ path: '/user'}" replace class="cur">目标</router-link>
			<router-link :to="{ path: '/user/my'}" replace >我的</router-link>
		</footer>
	</section>
</template>


<script>
export default {
	data() {
		return {
        	state : "编辑",
        	classObject : false
    	}
	},
	methods: {
		tabClass: function($index) {
			this.classObject = !this.classObject;
			this.classObject?this.state='取消':this.state='编辑';
		}
	}
}
</script>