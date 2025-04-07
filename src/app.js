// import { Component } from "react";

// import "./app.css";

// class App extends Component {
//   componentDidMount() {}

//   componentDidShow() {}

//   componentDidHide() {}

//   // this.props.children 是将要会渲染的页面
//   render() {
//     return this.props.children;
//   }
// }

// export default App;

import { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import "./app.css";
import CustomTabBar from "./custom-tab-bar";
import "./custom-tab-bar/index.config"; // 👈 强制告诉 Taro 这是组件

function App({ children }) {
  const [showTabBar, setShowTabBar] = useState(true);

  useEffect(() => {
    // 可根据路由判断是否显示 tabbar
  }, []);

  return (
    <View>
      {children}
      {showTabBar && <CustomTabBar />}
    </View>
  );
}

export default App;
