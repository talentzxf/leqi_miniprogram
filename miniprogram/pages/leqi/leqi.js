// miniprogram/pages/leqi.js
Page({

  /**
   * Page initial data
   */
  data: {
    leqi_points:0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },
  logHomeWork: function(id){
    console.log("Log home work:"+id.target.id)
    wx.navigateTo({
      url: './' + id.target.id + '/' + id.target.id,
    })
  },
  addPoints: function(points){
    var newPoint = this.data.leqi_points+points;
    this.setData({
      leqi_points: newPoint
    })
  }
})