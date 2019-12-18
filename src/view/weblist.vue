<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      <BreadcrumbItem>首页</BreadcrumbItem>
    </Breadcrumb>
    <!--使用row在水平方向创建一行
    将一组col插入在row中
    在每个col中，键入自己的内容
    通过设置col的span参数，指定跨越的范围，其范围是1到24
    每个row中的col总和应该为24
    非 template/render 模式下，需使用 i-col-->
    <Row>
      <iCol span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img
              style="width:50%; height:50%"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571037896451&di=cf066500392a04c661339aa7a67d7284&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140307%2F13928177_195158772185_2.jpg"
            />
            <h3>栅格+卡片绘制效果</h3>
            <h3>点击量：600</h3>
          </div>
        </Card>
      </iCol>

      <iCol span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img
              style="width:50%; height:50%"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571037896451&di=cf066500392a04c661339aa7a67d7284&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140307%2F13928177_195158772185_2.jpg"
            />
            <h3>栅格+卡片绘制效果</h3>
            <h3>预览量：1230</h3>
          </div>
        </Card>
      </iCol>

      <iCol span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img
              style="width:50%; height:50%"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571037896451&di=cf066500392a04c661339aa7a67d7284&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140307%2F13928177_195158772185_2.jpg"
            />
            <h3>栅格+卡片绘制效果</h3>
            <h3>下载量：120</h3>
          </div>
        </Card>
      </iCol>

      <iCol span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img
              style="width:50%; height:50%"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571037896451&di=cf066500392a04c661339aa7a67d7284&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140307%2F13928177_195158772185_2.jpg"
            />
            <h3>栅格+卡片绘制效果</h3>
            <h3>资源量：10600</h3>
          </div>
        </Card>
      </iCol>
    </Row>
    <Row>
      <iCol span="12" >
        <Card style="width:620px">
          <div style="text-align:center">
            <div id="c1"></div>
          </div>
        </Card>
      </iCol>

      <iCol span="12">
        <Card style="width:620px">
          <div style="text-align:center">
            <div id="c3"></div>
          </div>
        </Card>
      </iCol>
    </Row>
    <Row>
    <iCol span="24">
      <Card style="width:1440px">
        <div style="text-align:center">
          <div id="c2"></div>
        </div>
      </Card>
    </iCol>
    </Row>
  </div>
</template>

<script>
import G2 from "@antv/g2";
export default {
  mounted() {
    this.init1();
    this.init2();
    this.init3();
  },
  methods: {
    init1() {
      const data = [
        { genre: "点击量", sold: 600 },
        { genre: "预览量", sold: 1230 },
        { genre: "下载量", sold: 120 },
        { genre: "资源量", sold: 10600 },
      
      ]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
      // Step 1: 创建 Chart 对象
      const chart = new G2.Chart({
        container: "c1", // 指定图表容器 ID
        width: 500, // 指定图表宽度
        height: 300 // 指定图表高度
      });
      // Step 2: 载入数据源
      chart.source(data);
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart
        .interval()
        .position("genre*sold")
        .color("genre");
      // Step 4: 渲染图表
      chart.render();
    },
    init2() {
      var data = [
       
        {
          country: "点击量",
          population: 600
        },
        {
          country: "预览量",
          population: 1230
        },
        {
          country: "下载量",
          population: 120
        },
        {
          country: "资源量",
          population: 10600
        }
      ];
      var chart = new G2.Chart({
        container: "c2",
        width: 500, // 指定图表宽度
        height: 300, // 指定图表高度
        forceFit: true,
      });
      chart.source(data);
      chart.axis("country", {
        label: {
          offset: 12
        }
      });
      chart.coord().transpose();
      chart.interval().position("country*population");
      chart.render();
    },
    init3() {
      var data = [
        {
          item: "点击量",
          count: 600,
          percent: 0.05
        },
        {
          item: "预览量",
          count: 1230,
          percent: 0.09
        },
        {
          item: "下载量",
          count: 120,
          percent: 0.03
        },
        {
          item: "资源量",
          count: 10600,
          percent: 0.83
        },
       
      ];
      var chart = new G2.Chart({
        container: "c3",
        width: 500, // 指定图表宽度
        height: 300, // 指定图表高度
        forceFit: true
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            val = val * 100 + "%";
            return val;
          }
        }
      });
      chart.coord("theta");
      chart.tooltip({
        showTitle: false
      });
      chart
        .intervalStack()
        .position("percent")
        .color("item")
        .label("percent", {
          offset: -40,
          // autoRotate: false,
          textStyle: {
            textAlign: "center",
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .45)"
          }
        })
        .tooltip("item*percent", function(item, percent) {
          percent = percent * 100 + "%";
          return {
            name: item,
            value: percent
          };
        })
        .style({
          lineWidth: 1,
          stroke: "#fff"
        });
      chart.render();
    }
  }
};
</script>
<style>
</style>