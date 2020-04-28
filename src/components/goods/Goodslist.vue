<template>
  <div class="goodsListContainer">
    <div class="goodsBox">
      <div class="goodsTitle">
        <img :src="menu1" />
        <p>劳力士</p>
      </div>
      <div class="goodsBody">
        <div class="goodsBodyTop">
          <span>￥999</span>
          <del>￥1999</del>
        </div>
        <div class="goodsBodyBottom">
          <span>热卖中</span>
          <span>剩余xx件</span>
        </div>
      </div>
    </div>

    <div class="goodsBox">
      <div class="goodsTitle">
        <img :src="menu1" />
        <p>劳力士</p>
      </div>
      <div class="goodsBody">
        <div class="goodsBodyTop">
          <span>￥999</span>
          <del>￥1999</del>
        </div>
        <div class="goodsBodyBottom">
          <span>热卖中</span>
          <span>剩余xx件</span>
        </div>
      </div>
    </div>

    <div class="goodsBox">
      <div class="goodsTitle">
        <img :src="menu1" />
        <p>劳力士</p>
      </div>
      <div class="goodsBody">
        <div class="goodsBodyTop">
          <span>￥999</span>
          <del>￥1999</del>
        </div>
        <div class="goodsBodyBottom">
          <span>热卖中</span>
          <span>剩余xx件</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      menu1: "../../images/menu1.png"
    };
  }
};
</script>
<style scoped>

.goodsBox {
    float: left;
  width: 48%;
  margin: 2px;
  padding: 4px;
  border: 1px solid #c4c4c4;
  /* height: 210px; */
}
.goodsBox .goodsTitle{
    width: 100%;
}
.goodsBox img {
    width: 100%;

}
.goodsBody {
    padding: 4px;
    background: #ccc;
}
.goodsBody .goodsBodyTop{
    margin-bottom: 20px;
}
</style>