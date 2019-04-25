<template>
  <div style="padding-top: 16px;">
    <y-row class="demoRow" gutter="10">
      <y-col span="8">
        <div class="demoCol">8</div>
      </y-col>
      <y-col span="8" offset="8">
        <div class="demoCol">8</div>
      </y-col>
    </y-row>
    <y-row class="demoRow" gutter="10">
      <y-col span="6" offset="6">
        <div class="demoCol">6</div>
      </y-col>
      <y-col span="6" offset="6">
        <div class="demoCol">6</div>
      </y-col>
    </y-row>
    <y-row class="demoRow" gutter="10">
      <y-col span="4">
        <div class="demoCol">4</div>
      </y-col>
      <y-col span="4" offset="4">
        <div class="demoCol">4</div>
      </y-col>
      <y-col span="4" offset="8">
        <div class="demoCol">4</div>
      </y-col>
    </y-row>
    <y-row class="demoRow" gutter="10">
      <y-col span="2">
        <div class="demoCol">2</div>
      </y-col>
      <y-col span="2" offset="2">
        <div class="demoCol">2</div>
      </y-col>
      <y-col span="2">
        <div class="demoCol">2</div>
      </y-col>
      <y-col span="2" offset="2">
        <div class="demoCol">2</div>
      </y-col>
      <y-col span="2">
        <div class="demoCol">2</div>
      </y-col>
      <y-col span="2" offset="2">
        <div class="demoCol">2</div>
      </y-col>
      <y-col span="2">
        <div class="demoCol">2</div>
      </y-col>
      <y-col span="2" offset="2">
        <div class="demoCol">2</div>
      </y-col>
    </y-row>
  </div>
</template>

<script>
  import YRow from '../../../src/components/grid/Row'
  import YCol from '../../../src/components/grid/Col'

  export default {
    components: {
      YRow,
      YCol
    }
  }
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>