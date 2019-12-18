<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      <BreadcrumbItem>首页</BreadcrumbItem>
      <BreadcrumbItem>订单列表</BreadcrumbItem>
    </Breadcrumb>
    <Button type="primary" @click="modal1 = true">添加商品</Button>
    <Modal v-model="modal1" title="添加商品" @on-ok="ok">
      <Form :model="formItem" :label-width="80">
        <FormItem label="产品名">
          <Input v-model="formItem.input" placeholder="输入产品名..."></Input>
        </FormItem>
        <FormItem label="类型">
          <Select v-model="formItem.select">
            <Option value="huawei">华为</Option>
            <Option value="xiaomi">小米</Option>
            <Option value="iphone">苹果</Option>
          </Select>
        </FormItem>
        <FormItem label="生产日期">
          <Row>
            <iCol span="11">
              <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>
            </iCol>
          </Row>
        </FormItem>

        <FormItem label="价格">
          <Input v-model="formItem.input" placeholder="输入价格..."></Input>
        </FormItem>
      </Form>
    </Modal>

    <div>
      <Table border ref="selection" :columns="columns4" :data="data1"></Table>
      <Button @click="handleSelectAll(true)">全选</Button>
      <Button @click="handleSelectAll(false)">取消全选</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: ""
      },
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "商品名",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "价格",
          key: "price",
          filters: [
            {
              label: "高于5000",
              value: 1
            },
            {
              label: "少于5000",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.price > 5500;
            } else if (value === 2) {
              return row.price < 5500;
            }
          }
        },

        {
          title: "生产日期",
          key: "date"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          name: "华为30",
          price: 3118,

          date: "2016-10-03"
        },
        {
          name: "苹果X",
          price: 8660,

          date: "2016-10-01"
        },
        {
          name: "小米9",
          price: 4500,

          date: "2016-10-02"
        },
        {
          name: "魅蓝e3",
          price: 2126,

          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    show(index) {
      this.$Modal.info({
        title: "修改信息",
        content: `Name：${this.data1[index].name}<br>price：${this.data1[index].price}<br>date：${this.data1[index].date}`
      });
    },
    remove(index) {
      this.data1.splice(index, 1);
    },
    ok() {
      this.$Message.info("添加成功");
    }
  }
};
</script>
<style  scoped>
</style>