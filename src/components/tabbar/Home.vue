<template>
  <div class="hhhh">
    <mt-swipe :auto="4000" id="myContainer">
      <mt-swipe-item v-for="item in lunbotolist" :key="item.id">
        <img :src="item.img_url" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- liugongge  -->
    <div class="mui-contern">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="home/newslist">
            <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
            <img :src="img1" />
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img :src="img2" />
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/goodslist">
            <img :src="img3" />
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img :src="img4" />
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img :src="img5" />
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img :src="img6" />
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbotolist: [],
      img1: "../images/menu1.png",
      img2: "../images/menu2.png",
      img3: "../images/menu3.png",
      img4: "../images/menu4.png",
      img5: "../images/menu5.png",
      img6: "../images/menu6.png"
    };
  },
  created() {
    this.getloop();
  },
  methods: {
    getloop() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop")
        .then(result => {
          console.log(result);
          this.lunbotolist = result.body.message;
          console.log(this.lunbotolist);
        })
        .catch();
    }
  }
};
</script>


<style scoped>

.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  height: 100%;
  width: 100%;
}
.mui-table-view img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

</style>