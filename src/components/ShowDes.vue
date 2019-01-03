<template>
    <div id="showdes">

        <div class="header">
            <div class="columns col-gapless">
                <div class="column col-6">
                    <div class="level-left" v-on:click="back2catalogue()">
                        <a class="link is-info">返回目录</a>
                    </div>
                </div>
                <div class="column col-6 text-right">
                    <div class="level-right  link is-info  " v-on:click="next()">
                        <a class="link is-info" v-bind:href="subed.items[subed.current_item].link" target="_blank">阅读原文</a>
                    </div>
                </div>
            </div>
        </div>


        <div class="sub_title">
        <h1>{{ subed.items[subed.current_item].title}}</h1>
        </div>

        <div class="des" v-html="subed.items[subed.current_item].description"></div>

        <div class="bottom">
            <div class="columns col-gapless">
                <div class="column col-6">
                    <div class="level-left" v-on:click="previous()">
                        <a class="link is-info">{{ pre }}</a>
                    </div>
                </div>
                <div class="column col-6 text-right">
                    <div class="level-right  link is-info" v-on:click="next()">
                        <a class="link is-info">{{ nex }}</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import sub from './../data/sub'


export default {
    data(){
        return{
        subed:sub,
        pre:"上一篇",
        nex:"下一篇"
        }
    },
    created(){
        console.log(" Show Des create----------");
            if(this.subed.current_item ==0)
                this.pre = "没有上一篇了";
            else
                this.pre = "上一篇";

            if(this.subed.current_item == this.subed.count)
                this.nex = "没有下一篇";
            else
                this.nex = "下一篇";   
        console.log("************************");
    },
    methods:{
        previous:function(){
            console.log("previous function");
            if(this.subed.current_item>0)
                this.subed.current_item = this.subed.current_item-1;
            if(this.subed.current_item ==0)
            {   
                this.pre = "没有上一篇了";
            } 
            else
            {
                this.pre = "上一篇";
            }

            if(this.subed.current_item == this.subed.count)
            {
                this.nex = "没有下一篇";
            }
            else
            {
                this.nex = "下一篇";    
            }             
            // console.log("The current item is:");
            // console.log(this.subed.current_item);
        },
        next:function(){
            // console.log("next function");
            if(this.subed.current_item<this.subed.count)
                this.subed.current_item = this.subed.current_item+1;
            // console.log("next function");
            if(this.subed.current_item == this.subed.count)
              {
                    this.nex = "没有下一篇";
                    // console.log('1');
              }
            else
            {
                this.nex = "下一篇";    
                // console.log('2');
            }

            if(this.subed.current_item ==0)
            {   
                this.pre = "没有上一篇了";
            } 
            else
             {
                this.pre = "上一篇";
             }            
            // console.log("The current item is:");
            // console.log(this.subed.current_item);        
            // console.log(this.subed.count); 
        },
        back2catalogue:function(){
            this.$router.push({path:'/SubShow'
                            });
        }
    }
}
</script>


<style scoped>

.des{
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 20px;
}

.des >>> h6{
    font-size: 16px; 
     font-weight: bold;
}

.des >>> h4{
     font-size: 18px; 
     font-weight: bold;
}

.des >>> h3{
     font-size: 18px; 
     font-weight: bold;
}

.des >>> img{
    display: block;
}

.des >>> p{
    /* font-size: 28px; */
    text-indent: 2em;
    padding-bottom: 10px;
}
.sub_title{
    text-align: center;
    font-size: 28px;
    padding-bottom: 20px;
}

.header{
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgb(229, 240, 240);
}
.bottom{
    /* height:50px; */
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgb(229, 240, 240);
}
</style>
