<template>
  <div>
    <v-tabs active-tab-key="1">
      <v-tab-pane tab-key="1" icon="user" tab="列表">
        <div style="padding-top: 20px;">
          &nbsp;&nbsp;
          昵称：
          <v-input placeholder="请输入管理员昵称" style="width:200px;display:inline-block"></v-input>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          创建时间：
          <v-date-picker range v-model="rangeDate3" format="yyyy/MM/dd"></v-date-picker>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-button type="primary" html-type="button" icon="search">查询</v-button>
        </div>
        <div style="padding-top: 25px;">
          <v-data-table :data='loadData' :columns='columns' tree-table>
            <template slot="td" slot-scope="props">
              <div v-if="props.column.field=='operate'">
                <v-tooltip content="编辑" :delay="1000">
                  <v-button type="primary" shape="circle" icon="edit" style="margin-right: 10px;"
                            size="small"></v-button>
                </v-tooltip>
                <v-tooltip content="设置" :delay="1000">
                  <v-button type="dashed" shape="circle" icon="setting" style="margin-right: 10px;"
                            size="small"></v-button>
                </v-tooltip>
                <v-tooltip content="删除" :delay="1000">
                  <v-popconfirm title="确定删除吗?" placement="right">
                    <v-button type="error" shape="circle" icon="delete" style="margin-right: 10px;"
                              size="small"></v-button>
                  </v-popconfirm>
                </v-tooltip>
              </div>
              <span v-else v-html="props.content"></span>
            </template>
          </v-data-table>
        </div>
      </v-tab-pane>
      <v-tab-pane tab-key="2" icon="user-add" tab="新增">
        <div style="padding-top: 50px;">
          <v-form direction="horizontal">
            <v-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol">
              <span class="ant-form-text" id="userName" name="userName">大眼萌 minion</span>
            </v-form-item>
            <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" required>
              <v-input type="password" placeholder="请输入密码" size="large"></v-input>
            </v-form-item>
            <v-form-item label="您的性别" :label-col="labelCol" :wrapper-col="wrapperCol">
              <v-radio-group value="female"
                             :data="[{value: 'male', text: '男的'},{value: 'female', text: '女的'}]"></v-radio-group>
            </v-form-item>
            <v-form-item label="备注" :label-col="labelCol" :wrapper-col="wrapperCol">
              <v-input type="textarea" placeholder="随便写"></v-input>
            </v-form-item>
            <v-form-item label="卖身华府" :label-col="labelCol" :wrapper-col="wrapperCol">
              <v-checkbox>同意</v-checkbox>
            </v-form-item>
            <v-form-item :wrapper-col="{span:16,offset:6}" style="margin-top:24px">
              <v-button type="primary" html-type="submit">确定</v-button>
            </v-form-item>
          </v-form>
        </div>
      </v-tab-pane>
    </v-tabs>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      let that = this;
      return {
        options: [{value: 'id', label: '管理员id'}, {value: 'nickname', label: '管理员昵称'}],
        rangeDate3: ['2015-12-06', '2016-12-06'],
        loadData(pramas) {
          return this.$http.get("https://fe-driver.github.io/vue-beauty/static/datatable.json", pramas).then(res => {
            return res.data;
          });
        },
        columns: [
          {title: "歌名", field: 'name'},
          {title: "时长", field: 'time'},
          {title: "歌手", field: 'singer'},
          {title: "专辑", field: 'album'},
          {title: "编辑", field: 'operate'},
        ],
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 14
        }
      }
    },
    methods: {
      change(time) {
        console.log('change:', time)
      }
    }
  }
</script>
