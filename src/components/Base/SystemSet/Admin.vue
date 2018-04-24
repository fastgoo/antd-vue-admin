<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tab-pane key="1">
        <span slot="tab"><a-icon type="user"/>列表</span>
        <div style="padding-top: 20px;">
          &nbsp;&nbsp;昵称：
          <a-input placeholder="请输入管理员昵称" style="width:200px;display:inline-block"></a-input>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          创建时间：
          <a-range-picker @change="onChange" style="width: 220px;"/>
          <a-button type="primary" icon="search" style="margin-left: 20px;">查询</a-button>
        </div>
        <div style="padding-top: 25px;">
          <a-table :columns="columns"
                   :rowKey="record => record.registered"
                   :dataSource="tabData"
                   :pagination="pagination"
                   :loading="loading"
                   @change="handleTableChange"
          >
            <template slot="name" slot-scope="name">
              {{name.first}} {{name.last}}
            </template>
            <span slot="operate" slot-scope="text" class="table-operation">
              <a-tooltip placement="right" :mouseEnterDelay="1">
                <template slot="title">
                  <span>编辑</span>
                </template>
               <a-button type="primary" shape="circle" icon="edit"></a-button>
              </a-tooltip>
              <a-tooltip placement="right" :mouseEnterDelay="1">
                <template slot="title">
                  <span>设置</span>
                </template>
                <a-button type="dashed" shape="circle" icon="setting" style="margin-left: 10px;"></a-button>
              </a-tooltip>
              <a-popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                <a-button type="danger" shape="circle" icon="delete" style="margin-left: 10px;"></a-button>
              </a-popconfirm>
            </span>
          </a-table>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab"><a-icon type="user-add"/>新增</span>
        Tab 2
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
  export default {
    components: {},
    mounted() {
      this.fetch();
    },
    data() {
      let that = this;
      return {
        tabData: [],
        pagination: {},
        loading: false,
        columns: [{
          title: 'Name',
          dataIndex: 'name',
          sorter: true,
          width: '20%',
          scopedSlots: {customRender: 'name'},
        }, {
          title: 'Gender',
          dataIndex: 'gender',
          filters: [
            {text: 'Male', value: 'male'},
            {text: 'Female', value: 'female'},
          ],
          width: '20%',
        }, {
          title: 'Email',
          dataIndex: 'email',
        }, {
          title: '操作',
          key: 'operate',
          scopedSlots: {customRender: 'operate'}
        }],
      }
    },
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
      handleTableChange(pagination, filters, sorter) {
        console.log(pagination);
        const pager = {...this.pagination};
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },
      fetch(params = {}) {
        console.log('params:', params);
        this.loading = true
        let that = this;
        this.Get('https://randomuser.me/api', {results: 10, ...params,}, function () {
          const pagination = {...that.pagination};
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = 200;
          that.loading = false;
          that.tabData = data.data.results;
          that.pagination = pagination;
        });
      }
    }
  }
</script>
