<template>
  <div style="margin-top: 20px;">
    <a-card title="柱状图表" :bordered="false" :hoverable="true">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip/>
      <v-axis/>
      <v-line position="year*value"/>
      <v-point position="year*value" shape="circle"/>
    </v-chart>
    </a-card>
  </div>
</template>
<script>
  //曲线图表
  const data = [
    {year: '1991', value: 3},
    {year: '1992', value: 4},
    {year: '1993', value: 3.5},
    {year: '1994', value: 5},
    {year: '1995', value: 4.9},
    {year: '1996', value: 6},
    {year: '1997', value: 7},
    {year: '1998', value: 9},
    {year: '1999', value: 13},
  ];

  const scale = [{
    dataKey: 'value',
    min: 0,
  }, {
    dataKey: 'year',
    min: 0,
    max: 1,
  }];

  export default {
    data() {
      return {
        data,
        scale,
        height: 400,
      };
    }
  }
</script>
