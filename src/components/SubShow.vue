<template>
    <div id="subshow">
        <!-- <h1>The SubShow components</h1> -->
        <div class="sub_source">
        <h1>{{ subed.title }} </h1>
        </div>

        <!-- <div id="sub_source">
        <h1>{{ title }}</h1>
        </div> -->
          <div class="item c-hand" v-on:click="sub_select(item)"  v-for="item in subed.items" :key="item.id">
            <div class="sub_list">
                    {{ item.title }} 
            </div>
          </div>
    </div>
</template>

<script>
import sub from './../data/sub'

export default {
    // props:{
    //     subed:Object,
    //     title:String
    // },
    data(){
        return{
        subed:sub
        }
    },
    created(){
        console.log(" sub show create----------");
        // this.title = sub.title;
        // this.items = [];
        // console.log("The items is:");
        // console.log(this.items);
        // console.log(sub.items);
        // this.items = sub.items;
        console.log("************************");
    },
    mounted(){
        console.log("SubShow mounted");
    },
    updated(){
     console.log(" sub show update----------");
     sub.current_item = 0;
        console.log("************************");        
    },
    methods:{
        sub_select:function(item){
            // console.log(item.description);
            // console.log(sub.items[item.id]);
            sub.current_item = item.id;
            this.$router.push({path:'/ShowDes'});
        }
    }
}
</script>


<style scoped>

.sub_source{
    padding-left: 20px;
    font-size: 24px;
    padding-bottom: 10px;
}

.item{
    border-bottom: 1px solid black;
    margin-right: 10px;
    padding-top:10px;
    margin-left: 10px;
}

.item:hover{
    background-color: beige;
}
</style>

