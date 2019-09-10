// miniprogram/pages/leqi/homework/homework.js
Page({

  /**
   * Page initial data
   */
  data: {
    start_time: new Date(),
    end_time: new Date()  
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  bindStartTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      start_time: e.detail.value
    })
  },

  bindEndTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      end_time: e.detail.value
    })
  },

  confirm: function(e){
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    var prevPage = pages[pages.length - 2];
    prevPage.addPoints(2);
    wx.navigateBack({
      delta: 1,
    })
  }
})