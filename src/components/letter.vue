<template>
    <div>
      <div class="App animated" v-bind:class="isShow ? 'bounceInUp' : 'bounceOutUp'" >
        <div class="date">
          <p>我们已经走过了:
            <span class="date-text">{{date.d}}</span>天
            <span class="date-text">{{date.hour}}</span>小时
            <span class="date-text">{{date.minute}}</span>分
            <span class="date-text">{{date.second}}</span>秒
          </p>
        </div>
        <div id="autotype" >
          <h1 style="font-weight:900">亲爱的影~</h1>
          <p>在信的开始，请允许我先为你放一首歌!</p>
          <p>今天是我们在一起两周年的纪念日，从2016年11月22日走来，我们经历了很多。这其中，有欢笑也有争吵，也曾经差点错过彼此，但是你我都没有选择离开。</p>
          <p>感谢你当时的选择,也庆幸我的坚持。寒冷的季节不再寒冷,燥热的夏日也能平静。春天赏花,秋风观景。</p>
          <p>纵使我错漏百出,时而精分，时而躁动。你却总是我心中的牵挂,身体的软肋。你，是我的定心丸。</p>
          <p>在一起的日子里，我们走过多个城市，看过几份风情。但是最美的景色只有你在身边。你就是心中最美的景。</p>
          <p>理解与包容,我们携手前行。挫折和挑战，我们并肩作战。爱你,是我奋战的动力核心。</p>
          <p>最后,未来的日子,与你相伴</p>
          <div style="text-align: right">
            <p>爱你的小黑</p>
            <p>2018年11月22日</p>
          </div>
        </div>
        <audio id="audio" ref="audio" :src="musicU" >
          O! 你的浏览器不支持播放音乐哦！
        </audio>
      </div>
      <div class="container" v-show="imgsShow">
        <ul ref="ul">
          <li v-for="(item, index) in imgList" :key="index" @click="handleClick(index)"  :style="transformY(index)">
            <img :src="item">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        date: {},
        // 时间计速器
        setTime: '',
        // 音乐播放计数器
        setTimePlay: '',
        musicU: '/static/gbqq.mp3',
        // musicUrl: 'http://fs.w.kugou.com/201810311027/c012e96e71ba3c2d8a628247f48a5830/G063/M03/06/11/34YBAFdskzmAUMlOADSMOxgm3l4714.mp3',
        imgList: [
          '/static/images/photo1.jpg',
          '/static/images/photo2.jpeg',
          '/static/images/photo3.jpeg',
          '/static/images/photo4.jpg',
          '/static/images/photo5.jpeg',
          '/static/images/photo6.jpeg',
          '/static/images/photo7.jpeg',
          '/static/images/photo8.jpeg',
          '/static/images/photo9.jpeg'
        ],
        deg: 0,
        distance: 300,
        i: 1,
        isShow: true,
        imgsShow: false
      }
    },
    methods: {
      print () {
        const This = this
        $.fn.autotype = function() {
          let _this=$(this)
          let str=_this.html()
          // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
          str=str.replace(/(\s){2,}/g,"$1")
          let index = 0
          $(this).html('')
          let timer = function fn() {
            let args = arguments
            let current = str.slice(index, index+1)
            // html标签完整输出,如：<p>
            if (current === '<'){
              index = str.indexOf('>', index) + 1
            }
            else{
              index++
            }
            //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
            if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
              _this.html(str.substring(0, index) + (index & 1 ? '_' : ''))
            }else{
              _this.html(str.substring(0, index))
              // setTimeout(() => {
                This.change()
                clearTimeout(timer)
              // }, 2000)
            }
            setTimeout(fn,200)
          };
          // 延迟1s开始
          setTimeout(timer,1000)
        };
        $("#autotype").autotype()
      },
      time (year,month,day) {
        let dateNow = new Date()
        let dateJNR = new Date(year,month-1,day)
        let d = parseInt((dateNow - dateJNR)/(24*3600*1000))
        let hour = parseInt(((dateNow - dateJNR)/(3600*1000))%24)
        let minute = parseInt((dateNow - dateJNR)/(1000*60)%60)
        let second = parseInt( (dateNow - dateJNR) / 1000 % 60)
        this.date = {
          d:d,
          hour:hour,
          minute:minute,
          second:second
        }
      },
      music () {
        this.$nextTick(() => {
          const audio = this.$refs.audio
          this.setTimePlay = setTimeout( ()=> audio.play(), 6500)
        })
      },
      handleClick () {
        const ul = this.$refs.ul
        ul.style.transform = `rotateY(${this.deg * this.i}deg)`
        this.i++
      },
      transformY(index){
        return `transform: rotateY(${this.deg * index}deg) translateZ(${this.distance}px)`
      },
      change(){
        setTimeout(() => {
          this.isShow = false
          setTimeout(() => {
            this.imgsShow = true
          }, 2000)
        }, 2000)
      }
    },
    mounted(){
      this.print()
      this.setTime = setInterval(()=>{
          this.time(2016,11,22)
      },1000)
      this.music()
    },
    created(){
      this.deg = 360/this.imgList.length
      this.distance = 35*this.imgList.length
    },
    beforeDestroy(){
      // 页面注销，停止计数
      clearInterval(this.setTime)
      // 页面回退或者跳转，停止计数，不播放音乐
      clearTimeout(this.setTimePlay)
    }
  }
</script>

<style scoped>
  .App {
    position: fixed;
    left: 50%;
    top: 2%;
    width:800px;
    height: 650px;
    margin-left: -400px;
    margin-right: -325px;
    font-family: 	Microsoft YaHei;
    border: 5px solid #f9adff;
    border-radius: 15px;
    padding: .5rem 2rem;
    background: white;
    font-weight: 900;
    color: #ff314d;
    letter-spacing: 0.5px;
    line-height: 19px;
  }
  .date{
    position: absolute;
    right: 25px;
    color: blue;
  }
  .date-text{
    font-size: 24px;
    color:deeppink;
  }

  /deep/
  .container{
    position: fixed;
    top: 100px;
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
  }

  ul{
    width: 200px;
    height: 340px;
    position: relative;
    padding: 0;
    list-style: none;
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
  /deep/
  li{
    transform: translateZ(300px);
    border: 6px solid pink;
    border-radius: 15px;
  }

  @-webkit-keyframes showImg {
    from {
      /*opacity: 0;*/
      transform: translateY(-100%) translateX(-50%) rotateX(0deg);
    }
    to {
      /*opacity: 1;*/
      transform: translateY(0) translateX(-50%) rotateX(-5deg);
    }
  }
</style>
