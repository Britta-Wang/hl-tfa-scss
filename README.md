# hl-tfa-scss
# 技术文档

## 一. 开发环境
- 开发环境网站：https://hinterlandsaupartnerdemo.connectedcommunity.org/home  
  登录账号：找allen要
  如果不知道自己负责的模块在哪，可以询问allen。
- 客户的production站：https://community.teachforaustralia.org/home  
  登录账号：找allen要
  当确定自己的代码没问题后，可以把 `/public/css/main.min.css` 代码复制到客户站的CSS页面，并测试是否与开发站一致。
- 设计图链接：https://projects.invisionapp.com/d/main#/projects/prototypes/22264661?scrollOffset=642  
  登录账号：找allen要

## 二. 如何部署CSS
1. 在根目录下运行 docker-compose up (取消运行为docker-compose down), 在scss文件保存内容后会在publick下生成css文件，复制 `/public/css/main.min.css` 的内容。
2. 在开发环境的导航栏中点击 `/Site options/themes/`，选择 `Site Theme` -> `Edit`。
3. 在 `Override CSS` 中，删除所有的CSS，并粘贴自己的CSS。
> 注意：多人开发可能同时有人在覆盖CSS，可以右键检查/元素，找到前面的覆盖CSS的源代码，覆盖自己的CSS。如果不明白，可以看下开会的录制视频。

## 三. 开发注意点
1. 每个人再自己名字的文件夹下写代码，路径为 `/src/scss/project/tfa/xxx`。
2. 为自己负责的组件写上备注，例如负责 `header`、`footer` 组件。
```scss
/*********** header start *****************/
// code here
/*************** header end  *************/

/****************** footer start **********************/
// code here
/********************* footer end *******************/

3. 非全局模块，一定要选择组件最外层的class，避免代码影响其他组件
