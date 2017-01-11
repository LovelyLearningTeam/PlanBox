<template>
	<div>
		<transition enter-active-class="animated pop in" leave-active-class="animated pop out">
	        <router-view></router-view>
	    </transition>
	</div>
</template>