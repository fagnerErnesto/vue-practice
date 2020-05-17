<template>
  <div class="status" >
      <span class="percentual">{{percent}}%</span>
      <div class="bar" :style="width"></div>
  </div>
</template>

<script>
export default {
    name: 'StatusBar',
    props: {
        percent: {type: Number, required: true}
    },
    data() {
        return {debug:null}
    },
    computed: {
        width() {
            return {width: this.percent + '%'}
        }
    }
}
</script>

<style>
    .status {
        width: 98%;
        height: 20px;
        border-left: 1px solid cornsilk;
        border-bottom: 1px solid cornsilk;
        align-items: center;
        display: flex;
        flex-direction: column;
        border-radius: 10px ;
        position: relative;
    }
    .bar {
        background-color: seagreen;
        height: 100%;
        position: absolute;
        align-self: flex-start;
        border-radius: 10px ;
    }
    .percentual {
        align-items: center;
        z-index: 999;
    }
</style>