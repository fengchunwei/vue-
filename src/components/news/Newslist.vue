<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key='item.id'>
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <div class="bodyTitle">{{item.title}}</div>
            <p class="mui-ellipsis">
              <span>{{item.add_time}}</span>
              <span>点击了{{item.click}}次</span>
            </p>
          </div>
        </a>
      </li>
      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="menu2" />
          <div class="mui-media-body">
            <div class="bodyTitle">没事</div>
            <p class="mui-ellipsis">
              <span>2020-4-28</span>
              <span>点击30次</span>
            </p>
          </div>
        </a>
      </li>-->
      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="menu3" />
          <div class="mui-media-body">
            <div class="bodyTitle">养生</div>
            <p class="mui-ellipsis">
              <span>2020-4-28</span>
              <span>点击10次</span>
            </p>
          </div>
        </a>
      </li>-->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
    //   menu1: "../../images/menu1.png",
    //   menu2: "../../images/menu2.png",
    //   menu3: "../../images/menu1.png",


      newsList:[]
    };
  },
  created() {
    this.getnewsList();
  },
  methods: {
    getnewsList() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getnewslist")
        .then(result => {
          console.log(result);
          this.newsList = result.body.message;
          console.log(this.newsList);
        })
        .catch();
    }
  }
};
</script>
<style >
.bodyTitle {
  font-size: 14px;
}
.mui-ellipsis {
  display: flex;
}
.mui-ellipsis span:nth-of-type(1) {
  font-size: 12px;
  color: #226aff;
  flex: 8;
}
.mui-ellipsis span:nth-of-type(2) {
  font-size: 12px;
  color: #226aff;
  flex: 2;
}
</style>