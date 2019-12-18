<template>
  <List item-layout="vertical">
    <ListItem v-for="item in data" :key="item.title">
      <ListItemMeta :avatar="item.avatar" :title="item.title" />
      <h3>{{ item.content }}</h3>
     <img style="width:30%;height:50%;" :src="item.image"/>
        

    </ListItem>
  </List>
  
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: "薛之谦的小迷妹",
          avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571158791499&di=46882c66b0b0dafe23f49a5bb7089583&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F13%2F20180513230323_yedwq.jpg",
          content:
            "好评，下次还会继续购买",
            image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571159241498&di=d7f76f10c93db68b8d16924cd89096bb&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F223%2Fw630h393%2F20190918%2F2795-ietnfsq3317900.jpg",
            
        },
          {
          title: "淘气宝宝",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          content:
            "请问我买这个会影响我开法拉利吗？",
            image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571163252956&di=2abe4fb63e025b1c55b1b09e8d82920f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8fc2fa79dc3600dbed08d0e9f450b1150e8f42cf7fc7-zodwZp_fw658"
        },
        {
          title: "小小黑",
          avatar:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2140845329,1961182936&fm=26&gp=0.jpg",
          content:
            "差评，买回来几天就坏了",
            image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571163157541&di=6526d64c47472a8f8e17ef5f50f0ef1a&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201211%2F22%2F20121122123259_kFVYY.jpeg",
        },
        {
          title: "淘气宝宝",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          content:
            "请问我买这个会影响我开法拉利吗？",
            image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571163252956&di=2abe4fb63e025b1c55b1b09e8d82920f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8fc2fa79dc3600dbed08d0e9f450b1150e8f42cf7fc7-zodwZp_fw658"
        }
      ]
    };
  }
};
</script>
 
 
 
 
