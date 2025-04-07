import { View, Text } from "@tarojs/components";
import Taro, { useDidShow, switchTab } from "@tarojs/taro";
import { useState, useEffect } from "react";
import "./index.css"; // 使用 SCSS 更好管理样式

const tabs = [
  { pagePath: "/pages/index/index", text: "首页" },
  { pagePath: "/pages/physicalStore/index", text: "门店" },
  { pagePath: "/pages/membership/index", text: "会员" },
  { pagePath: "/pages/mine/index", text: "我的" },
];

export default function CustomTabBar() {
  const [current, setCurrent] = useState(0);

  // 每次页面展示时更新当前选中项
  // useDidShow(() => {
  //   const currentPage = Taro.getCurrentPages().slice(-1)[0];
  //   const route = "/" + currentPage.route;
  //   const index = tabs.findIndex((tab) => tab.pagePath === route);
  //   if (index !== -1) {
  //     setCurrent(index);
  //   }
  // });

  useDidShow(() => {
    const pages = Taro.getCurrentPages();
    if (pages.length > 0) {
      const currentPage = pages[pages.length - 1];
      const route = "/" + currentPage.route;
      const index = tabs.findIndex((tab) => tab.pagePath === route);
      if (index !== -1) {
        setCurrent(index);
      }
    }
  });

  const handleSwitchTab = (index) => {
    if (index === current) return; // 避免重复跳转
    switchTab({ url: tabs[index].pagePath });
  };

  return (
    <View className="custom-tab-bar">
      <Text className="tab-text">自定义 Tab Bar</Text>
      {/* {tabs.map((tab, index) => (
        <View
          key={index}
          className={`tab-item ${index === current ? "active" : ""}`}
          onClick={() => handleSwitchTab(index)}
        >
          <Text className="tab-text">{tab.text}</Text>
        </View>
      ))} */}
    </View>
  );
}
