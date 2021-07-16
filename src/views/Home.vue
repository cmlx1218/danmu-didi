<template>
  <div>
    <button @click="btnDanmu">点击开始弹幕</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      message:'zzz'
    }
  },
  methods:{
    btnDanmu() {
      this.$router.push('/danmu')
    }
  }
}
</script>

<style scoped>

</style>
