// pages/ask/special.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    speeds: ["猎豹型", "闪电型", "乌龟型","蜗牛型"],
    speedIndex: 0,
    physicals: ["超人", "耐用", "一般", "极差"],
    physicalIndex: 0,
    skills: ["牛逼", "大拿", "一般", "垃圾"],
    skillIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindSpeedChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      speedIndex: e.detail.value
    })
  },
  bindPhysicalChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      physicalIndex: e.detail.value
    })
  },
  bindSkillChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      skillIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    wx.navigateTo({
      url: 'score'
    })

  }
})