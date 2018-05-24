import { $wuxRater } from '../../components/wux'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:93
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $wuxRater.init('history', {
      value: 3,
      disabled: !0,
      margin: 10,
      activeColor: '#04BE02',
      fontSize: 40
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  toIndex: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }

})