<template>
    <div>
      <div class="App animated bounceInUp">
        <div class="date">
          <p>我们已经一起走过了:
            <span class="date-text">{{date.d}}</span>天
            <span class="date-text">{{date.hour}}</span>小时
            <span class="date-text">{{date.minute}}</span>分
            <span class="date-text">{{date.second}}</span>秒
          </p>
        </div>
        <div id="autotype" >
          <h1 style="font-weight:900">...！</h1>
          <p >在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
          <p>今天是我们两周年的纪念日，从2016年11月22日到现在，我们一起经历了许许多多的事情，
            有欢笑也有争吵，也曾因为一些事情闹过分手，但是我们都走过来了。</p>
          <p>最后....！</p>
          <div style="text-align: right">
            <p>爱你...</p>
            <p>2018年11月22日</p>
          </div>
        </div>
        <audio id="audio" ref="audio" :src="musicU">
          O! 你的浏览器不支持播放音乐哦！
        </audio>
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
        musicUrl: 'http://fs.w.kugou.com/201810311027/c012e96e71ba3c2d8a628247f48a5830/G063/M03/06/11/34YBAFdskzmAUMlOADSMOxgm3l4714.mp3'
      }
    },
    methods: {
      print () {
        $.fn.autotype = function() {
          let _this=$(this);
          let str=_this.html();
          // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
          str=str.replace(/(\s){2,}/g,"$1");
          let index = 0;
          $(this).html('');
          let timer = function fn() {
            let args = arguments;
            let current = str.slice(index, index+1);
            // html标签完整输出,如：<p>
            if (current == '<'){
              index = str.indexOf('>', index) + 1;
            }
            else{
              index++;
            }
            //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
            if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
              _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
            }else{
              _this.html(str.substring(0, index));
              clearTimeout(timer);
            };
            setTimeout(fn,200)
          };
          // 延迟1s开始
          setTimeout(timer,1000);
        };
        $("#autotype").autotype();
      },
      time (year,month,day) {
        let dateNow = new Date();
        let dateJNR = new Date(year,month-1,day);
        let d = parseInt((dateNow - dateJNR)/(24*3600*1000));
        let hour = parseInt(((dateNow - dateJNR)/(3600*1000))%24);
        let minute = parseInt((dateNow - dateJNR)/(1000*60)%60);
        let second = parseInt( (dateNow - dateJNR) / 1000 % 60);
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
          this.setTimePlay = setTimeout( ()=> audio.play(), 8500)
        })
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
</style>
