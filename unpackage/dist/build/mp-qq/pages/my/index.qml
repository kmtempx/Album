<view class="content"><view class="header"><view class="headerImg"><image src="{{'http://q2.qlogo.cn/headimg_dl?dst_uin='+info.qq+'&spec=4'}}" alt class="_img"></image></view><view class="_p">{{info.name}}</view><block wx:if="{{isLogin}}"><view style="color:#DD524D;" class="_p">欢迎你管理员</view></block><text>{{''+info.info+''}}</text></view><view class="function"><view class="functionLi" data-info="{{info.wx}}" data-event-opts="{{[['tap',[['copy',['$event']]]]]}}" bindtap="__e"><view class="Limit"><view class="_p">我的微信</view></view></view><button class="findMe" open-type="contact"><view class="Limit"><view class="_p">联系我们</view></view></button><block wx:if="{{!isLogin}}"><view data-event-opts="{{[['tap',[['adminLogin',['$event']]]]]}}" class="functionLi" bindtap="__e"><view class="Limit"><view class="_p">管理员登录</view></view></view></block><block wx:if="{{isLogin}}"><view data-event-opts="{{[['tap',[['endLogin',['$event']]]]]}}" class="functionLi" bindtap="__e"><view class="Limit"><view class="_p">退出登录</view></view></view></block></view></view>