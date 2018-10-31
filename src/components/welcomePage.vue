<template>
  <div class="box">
    <div>
      <div class='envelope animated ' v-bind:class="isShow ? 'fadeOutRight' : 'bounceInLeft' ">
        <div class="triangle-down"></div>
        <img class="heart" src='../assets/heart.png' @click="isOpen"/>
        <div class="triangle-up"></div>
        <div class="text">你收到一封信，点击查收！</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    isOpen () {
      this.isShow = true
      setTimeout(() => {
        this.$router.push({name: 'letter'})
      }, 1000)

    }
  }
}
</script>

<style scoped>
  .envelope{
    width: 500px;
    height: 300px;
    border: 3px solid pink;
    position: absolute;
    left: 30%;
    transform: translate(-50%, 0);
    top: 30%;
    border-radius: 10px;
    box-shadow: 4px 4px 2px #888888;
    background-color: white;
    font-weight: 900;
  }
  .triangle-down{
    width: 0;
    height: 0;
    border-left: 252px solid transparent;
    border-right: 250px solid transparent;
    border-top: 160px solid pink;
    border-radius: 15px;
    position: absolute;
    left: -5px;
    top: -1px;
  }
  .triangle-up{
    width: 0;
    height: 0;
    border-left: 250px solid transparent;
    border-right: 254px solid transparent;
    border-bottom: 150px solid pink;
    border-radius: 15px;
    position: absolute;
    bottom: -1px;
    left: -4px;
  }
  @keyframes pound {
    to { transform: scale(1.4); }
  }
  .heart{
    width: 40px;
    height: 40px;
    z-index: 999;
    position: absolute;
    left: 225px;
    top: 130px;
    cursor: pointer;
    animation: pound .25s infinite alternate;
  }
  .text{
    position: absolute;
    top: -100px;
    left: 100px;
    color: blue;
    font-size: 24px;
  }
</style>
