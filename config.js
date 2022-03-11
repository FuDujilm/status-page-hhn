// 配置
window.Config = {

  // 站点名
  SiteName: 'H.H.N. Public Page',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm790887545-fe115d1a12a1e2a229194282',
    'm790887552-f52375fb304a3298f19a01fc',
    'm790889992-a38957e7782658d9179b4576',
    'm790890012-448e7ac162bcfc581834256e',

  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '回到主页',
      url: 'https://blog.oldcat.co/'
    },
    {
      text: '回到博客',
      url: 'https://oldcat.co'
    }
  ]
};
