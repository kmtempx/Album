(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pic/pic"],{"21c1":function(t,i,n){"use strict";var e=n("82f9"),o=n.n(e);o.a},"2e92":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n("d7be"),o={name:"pic",data:function(){return{isSmall:!1,info:{},isLogin:!1}},methods:{showOther:function(i){var n=i.currentTarget.dataset.index,o=this.info.imgList[n],a=this.classId,s=this;wx.showActionSheet({itemList:["设为封面","删除"],success:function(i){0==i.tapIndex?(t.showLoading({title:"设置中",mask:!0}),e.sget({url:"album/setIndexPic",data:{id:a,img:o}}).then(function(i){1024==i.data.code?(t.showToast({title:"设置成功"}),t.setStorageSync("isF5Index",!0),t.setStorageSync("isF5List",!0)):t.showToast({title:i.data.msg,icon:"none"}),t.hideLoading()}).catch(function(t){console.log(t)})):t.showModal({title:"提示",content:"是否删除该图片",success:function(i){i.confirm?(t.showLoading({title:"删除中",mask:!0}),e.sget({url:"album/cutImg",data:{id:a,img:o}}).then(function(i){1024==i.data.code?(t.showToast({title:"删除成功"}),s.info.imgList.splice(n,1)):t.showToast({title:i.data.msg,icon:"none"}),t.hideLoading()}).catch(function(t){console.log(t)})):i.cancel&&console.log("用户点击取消")}})},fail:function(t){console.log(t.errMsg)}})},updataPic:function(){var i=this;t.chooseImage({count:20,sizeType:["original","compressed"],sourceType:["album"],success:function(n){t.showLoading({title:"上传中",mask:!0});var e=n.tempFilePaths;console.log(e);for(var o=0;o<e.length;o++)t.uploadFile({url:getApp().globalData.url+"album/updataPic",filePath:e[o],name:"file",formData:{session:t.getStorageSync("session"),id:i.classId},success:function(n){t.hideLoading();var e=JSON.parse(n.data);1024==e.code&&(null==i.info.imgList&&(i.info.imgList=[]),i.info.imgList.push(e.img))}})}})},changeMode:function(){this.isSmall=!this.isSmall},showImg:function(t){var i=t.currentTarget.dataset.index;wx.previewImage({current:this.info.imgList[i],urls:this.info.imgList})},getAlbum:function(t){var i=this;e.get({url:"album/getAlbumList",data:{id:t}}).then(function(t){t.data.imgList=t.data.imgList&&t.data.imgList.split(","),i.info=t.data}).catch(function(t){console.log(t)})}},mounted:function(){""!=t.getStorageSync("session")&&void 0!=t.getStorageSync("session")&&t.getStorageSync("session").length>10?(this.isLogin=!0,this.isSmall=!0):(this.isLogin=!1,this.isSmall=!1)},onLoad:function(t){this.getAlbum(t.id),this.classId=t.id},onShareAppMessage:function(t){var i=this;return"button"===t.from&&console.log(t.target),{title:i.info.title,path:"/pages/pic/pic?id="+i.classId}}};i.default=o}).call(this,n("a821")["default"])},"3a3e":function(t,i,n){"use strict";n.r(i);var e=n("2e92"),o=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=o.a},"82f9":function(t,i,n){},"85cc":function(t,i,n){"use strict";(function(t){n("23cd"),n("921b");e(n("66fd"));var i=e(n("ae59"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("a821")["createPage"])},ae59:function(t,i,n){"use strict";n.r(i);var e=n("bb7c"),o=n("3a3e");for(var a in o)"default"!==a&&function(t){n.d(i,t,function(){return o[t]})}(a);n("21c1");var s,c=n("f0c5"),u=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);i["default"]=u.exports},bb7c:function(t,i,n){"use strict";var e,o=function(){var t=this,i=t.$createElement;t._self._c},a=[];n.d(i,"b",function(){return o}),n.d(i,"c",function(){return a}),n.d(i,"a",function(){return e})}},[["85cc","common/runtime","common/vendor"]]]);