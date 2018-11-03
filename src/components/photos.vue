<template>
    <div class="container" >
      <ul ref="ul">
        <li v-for="(item, index) in imgList" :key="index" @click="handleClick(index)"  :style="transformY(index)">
          <img :src="item">
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        'http://b276.photo.store.qq.com/psb?/V12U1yim4bWQf8/iG*S6GGX6s.aBMxccWb6XUKa17nolNiSf5vtSVJvEJs!/b/dBQBAAAAAAAA&bo=0AIABdACAAURCT4!&rf=viewer_4',
        'http://b276.photo.store.qq.com/psb?/V12U1yim4bWQf8/iG*S6GGX6s.aBMxccWb6XUKa17nolNiSf5vtSVJvEJs!/b/dBQBAAAAAAAA&bo=0AIABdACAAURCT4!&rf=viewer_4',
        'http://b287.photo.store.qq.com/psb?/V12U1yim4bWQf8/DJ3qOmasmyqS1D.BtqD3jzyLZzSF8gT917GLRIJedDc!/b/dB8BAAAAAAAA&bo=0AIABdACAAURGS4!&rf=viewer_4',
        'http://b287.photo.store.qq.com/psb?/V12U1yim4bWQf8/DJ3qOmasmyqS1D.BtqD3jzyLZzSF8gT917GLRIJedDc!/b/dB8BAAAAAAAA&bo=0AIABdACAAURGS4!&rf=viewer_4',
        'http://b287.photo.store.qq.com/psb?/V12U1yim4bWQf8/DJ3qOmasmyqS1D.BtqD3jzyLZzSF8gT917GLRIJedDc!/b/dB8BAAAAAAAA&bo=0AIABdACAAURGS4!&rf=viewer_4',
        'http://b66.photo.store.qq.com/psb?/V12U1yim4bWQf8/arHZwoCM9qkpQo*zWT.aQ2Ck81D4XaCNozFxXrp45gg!/b/dEIAAAAAAAAA&bo=0AIABdACAAURGS4!&rf=viewer_4',
        'http://b272.photo.store.qq.com/psb?/V12U1yim4bWQf8/9luXOKZpypvUV38UJ*sGW2Vqeri5UTydiKf8ScIyLgU!/b/dBABAAAAAAAA&bo=0AIABdACAAURGS4!&rf=viewer_4',
        'http://b286.photo.store.qq.com/psb?/V12U1yim4bWQf8/ww9oKggIQwbLPbOlrqgmkRk1pquf9wjbhYlQtRkP8p4!/b/dB4BAAAAAAAA&bo=AAWrBqALgA8ROYI!&rf=viewer_4',
        'http://b257.photo.store.qq.com/psb?/V12U1yim4bWQf8/fNcr019oXoffIcWME.6lI8bUCpkAMVvs*W.JmwezGvA!/b/dAEBAAAAAAAA&bo=AAWrBqALgA8RGaI!&rf=viewer_4'
      ],
      deg: 0,
      distance: 300,
      i: 1,
      yes: true
    }
  },
  methods: {
    handleClick () {
      const ul = this.$refs.ul
      ul.style.transform = `rotateY(${this.deg * this.i}deg)`
      this.i++
    },
    transformY(index){
      return `transform: rotateY(${this.deg * index}deg) translateZ(${this.distance}px)`
    }
  },
  created(){
    this.deg = 360/this.imgList.length
    this.distance = 35*this.imgList.length
  },
  mounted(){
    // this.yes = false
  }
}
</script>

<style scoped>
  .container{
    /*width: 300px;*/
    /*height: 550px;*/
    position: fixed;
    top: 30px;
    left: 50%;
    transform-style: preserve-3d;
    transform: translateX(-50%) rotateX(-5deg);
    transition: all 5s ease;

    -webkit-animation-name: showImg;
    -moz-animation-name: showImg;
    -o-animation-name: showImg;
    animation-name: showImg;

    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -o-animation-duration: 2s;
    animation-duration: 2s;

    /* perspective: 1000px; */
  }
  ul{
    width: 200px;
    height: 340px;
    position: relative;
    padding: 0;
    list-style: none;
    /*transform: rotateX(-5deg);*/
    transform-style: preserve-3d;
    transition: all 2s ease;
  }
  li{
    position: absolute;
    transition: rotateY 2s ease;
  }
  li img{
    width: 200px;
    height: 340px;
    border-radius: 10px;
  }
  li{
    transform: translateZ(300px);
    border: 6px solid pink;
    border-radius: 15px;
  }
  @-webkit-keyframes showImg {
    from{
      /*opacity: 0;*/
      transform: translateY(-100%) translateX(-50%) rotateX(0deg);
    }
    to{
      /*opacity: 1;*/
      transform: translateY(0) translateX(-50%) rotateX(-5deg);
    }
  }
  /*@keyframes showImg {*/
    /*from{*/
      /*opacity: 0;*/
      /*!*transform: rotateX(-5deg) translateX(-50%);*!*/
    /*}*/
    /*to{*/
      /*opacity: 1;*/
      /*transform: rotateX(-5deg) translateX(-50%);*/
    /*}*/
  /*}*/
</style>
