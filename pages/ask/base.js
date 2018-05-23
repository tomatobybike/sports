// pages/ask/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips:false,
    waringMsg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  formSubmit: function (e) {
    var reg =/^[1-9]*$/
    var regdot = /^[0-9]+(.[0-9]{0,2})?$/
    var warn = "";//弹框时提示的内容  
    var flag = true;//判断信息输入是否完整  
    //判断的顺序依次是：姓名-手机号-地址-具体地址-预约日期-预约时间-开荒面积  
    if (!regdot.test(e.detail.value.long)) {
      warn = "请填写您的身高！";
    } else if (!regdot.test(e.detail.value.age)) {
      warn = "请填写您的年龄！";
    } else if (!regdot.test(e.detail.value.weight)) {
      warn = "请填写您的体重";
    } else if (!regdot.test(e.detail.value.yearsOfSport)) {
      warn = "请选择您的球龄"
    } else {
      flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转  
      var that = this;
      //？后面跟的是需要传递到下一个页面的参数  
      wx.navigateTo({
        url: 'special'
      })
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }  

    //如果信息填写不完整，弹出输入框  
    if (flag == true) {
      this.setData({
        showTopTips: true,
        waringMsg: warn
      }) 
    }else{
      this.setData({
        showTopTips: false,
        waringMsg: ''
      }) 
    }
  }

  
})