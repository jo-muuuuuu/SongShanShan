import React, { useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";

import "./index.css";

const Index = () => {
  return (
    <View className="wrapper">
      {/* <Text className="title"></Text> */}

      <View className="box-container">
        <View className="box">
          <Text className="box-title">桌位预定</Text>
          <Image className="box-icon" src="/assets/appointment.svg" />
        </View>

        <View className="box">
          <Text className="box-title">堂食预点</Text>
          <Image className="box-icon" src="/assets/order.svg" />
        </View>

        <View className="box">
          <Text className="box-title">会员商店</Text>

          <Image className="box-icon" src="/assets/shop.svg" />
        </View>
      </View>
    </View>
  );
};

export default Index;
