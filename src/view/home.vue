<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">管理平台</div>

          <Submenu name="1">
            <template slot="title">
              <Icon style="margin-left:580px" type="ios-navigate"></Icon>
              <span>管理员</span>
            </template>
            <MenuItem style="margin-left:580px" name="1-1" to="/userlist">信息安全</MenuItem>
            <MenuItem style="margin-left:580px" name="1-2" to="/login">退出</MenuItem>
          </Submenu>

          <div class="layout-nav">
            <MenuItem name="2">
              <Icon type="ios-analytics"></Icon>2019/10/15 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;17：25
            </MenuItem>
            <MenuItem name="3"></MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>福州
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <!--calc(100vh - 60px)表示充满容器后再往上减60px
      active-name="1-2"：表示默认选中第几个子项-->
      <Layout style="height:calc(100vh - 64px)">
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu
            ref="leftmenu"
            @on-open-change="isCollapsed=false"
            active-name="1-1"
            theme="dark"
            width="auto"
            :open-names="opennames"
            :class="menuitemClasses"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>网页管理</span>
              </template>
              <MenuItem name="1-1" to="/weblist">预览信息</MenuItem>
            </Submenu>

            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>订单管理</span>
              </template>
              <MenuItem name="2-1">订单列表</MenuItem>
              <MenuItem name="2-2" to="/ordertrace">订单追踪</MenuItem>
            </Submenu>

            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>商品管理</span>
              </template>
              <MenuItem name="3-1" to="/orderlist">电子产品</MenuItem>
              <MenuItem name="3-2">生活产品</MenuItem>
              <MenuItem name="3-3">饮食食品</MenuItem>
            </Submenu>

            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>用户管理</span>
              </template>
              <MenuItem name="4-1" to="/userlist">用户列表</MenuItem>
              <MenuItem name="4-2" to="/user_comment">用户评论</MenuItem>
            </Submenu>
          </Menu>
        </Sider>

        <Layout :style="{padding: '0 24px 24px'}">
          <router-view></router-view>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opennames: ["1"],
      isCollapsed: false
    };
  },
  watch: {
    isCollapsed(val) {
      if (val) {
        this.opennames = [];
        this.$nextTick(() => {
          this.$refs.leftmenu.updateOpened();
        });
      }
    }
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  color: #fff;
  height: 30px;
  line-height: 30px;
  font-size: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
