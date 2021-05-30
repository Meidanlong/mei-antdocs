// sidebar参考文档 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
module.exports = {
  // sprica
  "/sprica/": require("../../sprica/sidebar"),

  // call
  "/call/": require("../../call/sidebar"),

  // blog
  "/blog/": require("../../blog/sidebar"),

  // note-language
  "/note/language/java/base/": require("../../note/language/java/base/sidebar"),
  "/note/language/python/": require("../../note/language/python/sidebar"),
  // note-wx
  "/note/applet/wechat/": require("../../note/applet/wechat/sidebar"),
  "/note/applet/wxgame/": require("../../note/applet/wxgame/sidebar"),
  "/note/applet/cocos/": require("../../note/applet/cocos/sidebar"),

  // problem
  "/problem/": require("../../problem/sidebar"),
};