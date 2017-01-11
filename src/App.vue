<template>
  <div>
  <!-- <router-view class="view" keep-alive transition transition-mode="out-in"></router-view> -->
  
   <transition enter-active-class="animated pop in" leave-active-class="animated pop out">
        <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  @import "./style/animate.css";
  @import "./style/xf.css";
  @import "./style/lxj.css";
  @import "./style/hyr.css";
</style>
<script>
export default {
  components: {}
}
</script>