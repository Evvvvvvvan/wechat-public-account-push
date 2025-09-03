/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

   USERS: [
    {
      // 想要发送的人的名字（来自你的原配置）
      name: '小阳',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oxffX15XOZ5_Fcv7fUg41XOXyix0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id
      useTemplateId: 'x3QJviU9qu2jUj3_V4DMXbzc6nc-ZTiy-o9jzt0jFu8',
      // 所在省份或城市（从你的全局配置沿用）
      province: '河南',
      // 所在城市或县区
      city: '商丘',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '01-28',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面
      openUrl: 'https://baidu.com',
      // 专属节日提醒（来自你的原配置）
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        { type: '*生日', name: '小阳', year: '2003', date: '01-28' },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        { type: '生日',  name: '小阳', year: '2003', date: '01-28' },
        { type: '节日',  name: '相识纪念日', year: '2022', date: '10-05' },
      ],
      // 专属纪念日/倒数日（来自你的原配置）
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-02' },
        // 结婚纪念日（你原来为空，这里保持不填）
      ],
      // 课程表相关配置（你未使用，置为空）
      courseSchedule: null,
    },
    {
      // 想要发送的人的名字（来自你的原配置）
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oxffX1_JavqbCnu4GqVzM0NgDZX0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id
      useTemplateId: 'x3QJviU9qu2jUj3_V4DMXbzc6nc-ZTiy-o9jzt0jFu8',
      // 所在省份或城市（从你的全局配置沿用）
      province: '北京',
      // 所在城市或县区
      city: '北京',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '07-06',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面
      openUrl: 'https://baidu.com',
      // 专属节日提醒（来自你的原配置）
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        { type: '*生日', name: '自己', year: '2003', date: '06-07' },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        { type: '生日',  name: '小阳', year: '2003', date: '01-28' },
        { type: '节日',  name: '相识纪念日', year: '2022', date: '10-05' },
      ],
      // 专属纪念日/倒数日（来自你的原配置）
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day1', date: '2023-05-02' },
        // 结婚纪念日（你原来为空，这里保持不填）
      ],
      // 课程表相关配置（你未使用，置为空）
      courseSchedule: null,
    },


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'HYQ3w2h2rFkv--YnRMXTVlPuGm8RPfiUIQpGgTH--SI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxffX16ggF6BkExndxGA06KwJGKw',
    }
  ],

}

module.exports = USER_CONFIG
