<template>
    <div class="box">
      <div class="left"><span>贵州省水利工程协会信息数据展示平台</span></div>
      <div class="date-time-display">
        <div class="date">{{ date }} {{ time }}</div>
        <!-- <div class="time">{{ time }}</div> -->
        <!-- <div class="lunar">{{ lunar }}</div> -->
      </div>
      <div class="right"></div>
    </div>
  </template>
  
  <script setup>
  
  // 获取农历日期的简单函数
  function getLunarDate(date) {
    const lunarMonths = [
      "正月", "二月", "三月", "四月", "五月", "六月",
      "七月", "八月", "九月", "十月", "冬月", "腊月"
    ];
    const lunarDays = [
      "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
      "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
      "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"
    ];
    const month = lunarMonths[date.getMonth() % 12];
    const day = lunarDays[date.getDate() % 30];
    return `${month} ${day}`;
  }
  
  const time = ref("");
  const date = ref("");
  const lunar = ref("");
  
  function updateTime() {
    const now = new Date();
    time.value = now.toLocaleTimeString("zh-CN", { hour12: false });
    // date.value = now.toLocaleDateString("zh-CN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    date.value = now.toLocaleDateString();
    lunar.value = getLunarDate(now);
  }
  
  onMounted(() => {
    updateTime();
    setInterval(updateTime, 1000); // 每秒更新
  });
  </script>
  
  <style scoped lang="scss">
  .box {
    position: relative;
    display:flex;
    height: 100%;
    .left{
      color:#ccc;
      width: 100%;
      font-size: 2.5em;
      justify-content: center;
      align-items: center;
      display:flex;
      line-height: 100%;
      height: 100%;
    }
    .date-time-display {
      position:absolute;
      color: #ffffff;
      font-family: Arial, sans-serif;
      text-align: center;
      line-height: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      display:flex;
      right: 0;
    }
  }
  
  
  .time {
    font-size: 1em;
  }
  
  .date, .lunar {
    font-size: 1em;
  }
  
  .date-time-display {
    background-color: #100C2A; /* 黯黑背景 */
    padding: 10px;
  }
  </style>
  