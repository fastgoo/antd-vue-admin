<template>
  <div>
    <a-row :gutter="48">
      <a-col :span="12">
        <chart-column></chart-column>
      </a-col>
      <a-col :span="12">
        <chart-column-list></chart-column-list>
      </a-col>
    </a-row>
    <a-row :gutter="48">
      <a-col :span="12">
        <chart-column-stacked></chart-column-stacked>
      </a-col>
      <a-col :span="12">
        <chart-strip></chart-strip>
      </a-col>
    </a-row>
    <a-row :gutter="48">
      <a-col :span="12">
        <chart-dashboard></chart-dashboard>
      </a-col>
      <a-col :span="12">
        <chart-area></chart-area>
      </a-col>
    </a-row>
    <a-row :gutter="48">
      <a-col :span="12">
        <chart-pie></chart-pie>
      </a-col>
      <a-col :span="12">
        <chart-ring></chart-ring>
      </a-col>
    </a-row>
    <a-row :gutter="48">
      <a-col :span="12">
        <chart-radar></chart-radar>
      </a-col>
      <a-col :span="12">
        <chart-curve></chart-curve>
      </a-col>
    </a-row>


  </div>
</template>
<script>
  import ChartColumn from '../Stats/ChartColumn';
  import ChartCurve from '../Stats/ChartCurve';
  import ChartPie from '../Stats/ChartPie';
  import ChartDashboard from '../Stats/ChartDashboard';
  import ChartArea from '../Stats/ChartArea';
  import ChartRing from '../Stats/ChartRing';
  import ChartRadar from '../Stats/ChartRadar';
  import ChartColumnList from '../Stats/ChartColumnList';
  import ChartColumnStacked from '../Stats/ChartColumnStacked';
  import ChartStrip from '../Stats/ChartStrip';

  export default {
    components: {
      ChartColumn,
      ChartCurve,
      ChartPie,
      ChartDashboard,
      ChartArea,
      ChartRing,
      ChartRadar,
      ChartColumnList,
      ChartColumnStacked,
      ChartStrip
    },
    data() {
      return {
        serverData: [{'mzkId': 112, 'strftime': "2017-01-11", 'value': 9275501},  // 测试数据，根据自己需求自己设置数据
          {'mzkId': 112, 'strftime': "2017-01-12", 'value': 9281904},
          {'mzkId': 112, 'strftime': "2017-01-13", 'value': 9290777},
          {'mzkId': 112, 'strftime': "2017-01-14", 'value': 9297913},
          {'mzkId': 112, 'strftime': "2017-01-15", 'value': 9306918},
          {'mzkId': 112, 'strftime': "2017-01-16", 'value': 9315641}],
      }
    },
    methods: {}
  }
</script>
