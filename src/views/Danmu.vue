<template>
  <div>
    <h2>欢迎来到弹幕页面</h2>
    {{ host }}
    <input type="text">
    <button @click="send">发送弹幕</button>
  </div>
</template>

<script>

var websocket = null

export default {
  name: "Danmu",
  data() {
    return {
      host: '',
    }
  },
  methods: {
    send() {

    }
  },
  beforeCreate() {
    this.host = window.location.host
    if ('WebSocket' in window) {
      websocket = new WebSocket("ws://" + 'localhost:8080' + "/ws")
    } else {
      alert("Not Support WebSocket!");
    }
    //连接发生错误的回调方法
    websocket.onerror = function(){
      alert("连接服务器失败!");
    };
    //连接成功建立的回调方法
    websocket.onopen = function(event){
      console.log("连接成功")
    }
    //接收到消息的回调方法
    // 收到服务器发送的消息
    websocket.onmessage = function(){
      console.log("收到消息"+event.data);
    }
    //连接关闭的回调方法
    websocket.onclose = function(){
      console.log("连接关闭")
    }
  }
}


</script>

<style scoped>

</style>
