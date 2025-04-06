export default {
  pages: [
    "pages/index/index",
    "pages/membership/index",
    "pages/physicalStore/index",
    "pages/mine/index",
  ],

  tabBar: {
    fontSize: 24,
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/physicalStore/index",
        text: "门店",
      },
      {
        pagePath: "pages/membership/index",
        text: "会员",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
      },
    ],
  },

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "宋山山火锅",
    navigationBarTextStyle: "black",
  },
};
