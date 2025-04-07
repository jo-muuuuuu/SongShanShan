export default {
  pages: [
    "pages/index/index",
    "pages/physicalStore/index",
    "pages/membership/index",
    "pages/mine/index",
  ],

  tabBar: {
    custom: true, // 启用自定义 Tab Bar
    color: "#000000",
    selectedColor: "#000000",
    backgroundColor: "#ffffff",
    list: [
      // 仍然需要定义 list，但实际渲染由 CustomTabBar 控制
      { pagePath: "pages/index/index", text: "首页" },
      { pagePath: "pages/physicalStore/index", text: "门店" },
      { pagePath: "pages/membership/index", text: "会员" },
      { pagePath: "pages/mine/index", text: "我的" },
    ],
  },

  // tabBar: {
  //   fontSize: 56,
  //   list: [
  //     {
  //       pagePath: "pages/index/index",
  //       text: "首页",
  //     },
  //     {
  //       pagePath: "pages/physicalStore/index",
  //       text: "门店",
  //     },
  //     {
  //       pagePath: "pages/membership/index",
  //       text: "会员",
  //     },
  //     {
  //       pagePath: "pages/mine/index",
  //       text: "我的",
  //     },
  //   ],
  // },

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "宋山山火锅",
    navigationBarTextStyle: "black",
  },
};
