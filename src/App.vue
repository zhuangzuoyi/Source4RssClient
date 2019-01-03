<template>
  <div id="app">
      <div class="docs-container off-canvas off-canvas-sidebar-show">

        <div class="docs-navbar">
          <a class="off-canvas-toggle btn btn-link btn-action" href="#sidebar">
            <i class="icon icon-menu"></i>
          </a>
        </div>

        <div class="docs-sidebar off-canvas-sidebar" id="sidebar">

          <div class="docs-brand">
          <!-- <a class="docs-logo" href="../index.html"> -->
            <img :src="rss_img" alt="RSS">
          <!-- </a> -->
        </div>

          <div class="docs-nav">
            <div class="accordion-container">
              <div class="accordion">
                    <div class="item c-hand" v-on:click="select(item)"  v-for="item in rss.sub" :key=item.title>
                      <div class="">
                              {{ item.title }} 
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>

        <a class="off-canvas-overlay" href="#close"></a>
        
        <div class="off-canvas-content">
          <div class="docs-content" id="content">
            <div class="container" id="off-canvas">
              <h3 class="s-title"></h3>
              <router-view></router-view>
            </div>
          </div>
        </div>


      </div>
  </div>
</template>



<script>
import axios from 'axios'
import xml2js  from 'xml2js'
import RSS from './data/source'
// import SubShow from './components/SubShow'
import sub from './data/sub'

export default {
  name: 'App',
  // components: {
  //   SubShow
  // },
  data(){
    return{
      rss:RSS,
      rss_img:require('./assets/rss.jpg'),
      subed:{
        title:"test",
        items:[]
      }
    }
  },
  created(){
    console.log("APP Create");
      axios.get(this.rss.url+this.rss.sub[0].link)
      .then((response) => {
          var xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true});
          xmlParser.parseString(response.data, this.xml_cb);//function (err, result) 
      })
      .catch(function (error){
            if (error.response) 
            {
                console.log("get is sended");
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                console.log("Error's data:" + error.response.data);
                console.log("Error's status:" + error.response.status);
                console.log("Error's headers:" + error.response.headers);
             } else {
                // Something happened in setting up the request that triggered an Error
                console.log("get not send");
                console.log('Error', error.message);
            }
           console.log(error);
      })


  },
methods:{
  select: function (item){
      console.log("select");
      axios.get(this.rss.url+item.link)
      .then((response) => {
          var xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true});
          xmlParser.parseString(response.data, this.xml_cb);//function (err, result) 
      })
      .catch(function (error){
            if (error.response) 
            {
                console.log("get is sended");
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                console.log("Error's data:" + error.response.data);
                console.log("Error's status:" + error.response.status);
                console.log("Error's headers:" + error.response.headers);
             } else {
                // Something happened in setting up the request that triggered an Error
                console.log("get not send");
                console.log('Error', error.message);
            }
           console.log(error);
      })
  },
  xml_cb:function(err, result)
  {
    console.log("xml parser cb");
    sub.items=[];     
    sub.title = result.rss.channel.title;
    this.subed.title = result.rss.channel.title;
    var id=0;
    for(var item in result.rss.channel.item)
    {
      //  console.log(item);
       var sub_item  = new Object();
       sub_item.title = result.rss.channel.item[item].title;
       sub_item.link = result.rss.channel.item[item].link;
       sub_item.description = result.rss.channel.item[item].description;
       sub_item.id = id;
       id = id+1;
       sub.items.push(sub_item);
    }
    sub.count = id-1;
    this.$router.push({path:'/SubShow'});
  },

}

}
</script>



<style scoped>
.item{
  padding-top:10px;
  padding-left: 10px;
  /* margin-bottom: 5px; */

  border-bottom: 1px solid beige;
}

.item:hover{
  background-color: antiquewhite;
}
</style>
