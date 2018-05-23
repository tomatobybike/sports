// pages/ask/ask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [
      { name: '足球', value: '0', checked: true },
      { name: '篮球', value: '1' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  choseSports: function (e) {
    var dataset = e.currentTarget.dataset;
    var index = dataset.index;
    console.log(index==='0')
    if (index === '0'){
      this.setData({
        radioItems: [
          { name: '足球', value: '0', checked: true },
          { name: '篮球', value: '1' }
        ]
      })
    }else{
      this.setData({
        radioItems: [
          { name: '足球', value: '0'},
          { name: '篮球', value: '1', checked: true  }
        ]
      })
    }
  },
  next: function(){
    wx.navigateTo({
      url: 'base'
    })
  }
})