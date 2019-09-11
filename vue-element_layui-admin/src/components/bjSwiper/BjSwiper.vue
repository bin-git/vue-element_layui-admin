<!--  -->
<template>
  <div class="bg-img"
       :style="bj_active_index !== 0 ?{backgroundImage:'url('+require('../../assets/images/bg-img/bg-img-'+bj_active_index+'.jpg')+')'}:''">
    <button class="el-carousel__arrow el-carousel__arrow--left"
            @click="next_left"><i class="el-icon-arrow-left"></i></button>
    <button class="el-carousel__arrow el-carousel__arrow--right"
            @click="next_right"><i class="el-icon-arrow-right"></i></button>
    <div class="el-bj_img_list-wrapper">
      <div class="el-bj_img_lists">
        <img :class="bj_active_index === 0? 'active':''"
             src="../../assets/images/bg-img/thumbs/bg-trns.jpg"
             @click="changeImg(0)" />
        <img :class="bj_active_index === 1? 'active':''"
             src="../../assets/images/bg-img/thumbs/bg-img-1.jpg"
             @click="changeImg(1)" />
        <img :class="bj_active_index === 2? 'active':''"
             src="../../assets/images/bg-img/thumbs/bg-img-2.jpg"
             @click="changeImg(2)" />
        <img :class="bj_active_index === 3? 'active':''"
             src="../../assets/images/bg-img/thumbs/bg-img-3.jpg"
             @click="changeImg(3)" />
        <img :class="bj_active_index === 4? 'active':''"
             src="../../assets/images/bg-img/thumbs/bg-img-4.jpg"
             @click="changeImg(4)" />
        <img :class="bj_active_index === 5? 'active':''"
             src="../../assets/images/bg-img/thumbs/bg-img-5.jpg"
             @click="changeImg(5)" />
        <img :class="bj_active_index === 6? 'active':''"
             src="../../assets/images/bg-img/thumbs/bg-img-6.jpg"
             @click="changeImg(6)" />
        <img :class="bj_active_index === 7? 'active':''"
             src="../../assets/images/bg-img/thumbs/bg-img-7.jpg"
             @click="changeImg(7)" />
      </div>
      <div class="el-bj__img-down"><span class="el-icon-arrow-down"></span></div>
    </div>
  </div>
</template>

<script>
const __img_name = [
  "bg-img-1.jpg",
  "bg-img-2.jpg",
  "bg-img-3.jpg",
  "bg-img-4.jpg",
  "bg-img-5.jpg",
  "bg-img-6.jpg",
  "bg-img-7.jpg"
];
export default {
  name: "BjSwiper",
  data() {
    return {
      bj_active_index: 1,
      bj_img_list: __img_name
    };
  },
  methods: {
    next_left() {
      this.bj_active_index--;
      if (this.bj_active_index <= 0) {
        this.bj_active_index = __img_name.length;
        return;
      }
      this.bj_active_index = this.bj_active_index;
    },
    next_right() {
      this.bj_active_index++;
      if (this.bj_active_index > __img_name.length) {
        this.bj_active_index = 1;
        return;
      }
    },
    changeImg(index) {
      this.bj_active_index = index;
    }
  }
};
</script>
<style lang='scss' scoped>
.bg-img {
  > .el-bj_img_list-wrapper {
    position: absolute;
    top: -53px;
    left: 0;
    right: 0;
    text-align: center;
    transition: all 0.3s;
    &:hover {
      top: 0;
    }
    > .el-bj_img_lists {
      display: inline-block;
      padding: 5px;
      background-color: #fff;
      > img {
        vertical-align: top;
        width: 64px;
        cursor: pointer;
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
        &.active {
          opacity: 0.5;
        }
      }
    }
    > .el-bj__img-down {
      > span {
        display: inline-block;
        width: 50px;
        height: 30px;
        line-height: 30px;
        background: #fff;
        border-radius: 0 0 4px 4px;
        cursor: pointer;
        font-weight: 700;
        font-size: 20px;
        color: #333;
      }
    }
  }
  > .el-carousel__arrow--left {
    left: -36px;
  }
  > .el-carousel__arrow--right {
    right: -36px;
  }
  &:hover {
    > .el-carousel__arrow--left {
      left: 16px;
    }
    > .el-carousel__arrow--right {
      right: 16px;
    }
  }
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  overflow: hidden;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  transition: all 0.4s;
  > button {
    background-color: rgba(31, 45, 61, 0.8);
  }
}
</style>
