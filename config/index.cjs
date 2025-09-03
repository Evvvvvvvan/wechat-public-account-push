const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  USERS: [
    {
      name: '小阳',
      id: 'oxffX15XOZ5_Fcv7fUg41XOXyix0',
      useTemplateId: 'x3QJviU9qu2jUj3_V4DMXbzc6nc-ZTiy-o9jzt0jFu8',
      province: '河南',
      city: '商丘',
      horoscopeDate: '01-28',
      horoscopeDateType: '今日',
      openUrl: 'https://baidu.com',
      festivals: [
        { type: '*生日', name: '小阳', year: '2003', date: '01-28' },
        { type: '生日',  name: '小阳', year: '2003', date: '01-28' },
        { type: '节日',  name: '相识纪念日', year: '2022', date: '10-05' },
      ],
      customizedDateList: [
        { keyword: 'love_day', date: '2023-05-02' },
      ],
      courseSchedule: null,
    },
    {
      name: '自己',
      id: 'oxffX1_JavqbCnu4GqVzM0NgDZX0',
      useTemplateId: 'y0AwWJPsSErWpCNiZ3-SNxlGXniBjbLLDjdY8TUabKo',
      province: '北京',
      city: '北京',
      horoscopeDate: '07-06',
      horoscopeDateType: '今日',
      openUrl: 'https://baidu.com',
      festivals: [
        { type: '*生日', name: '自己', year: '2003', date: '06-07' },
        { type: '生日',  name: '小阳', year: '2003', date: '01-28' },
        { type: '节日',  name: '相识纪念日', year: '2022', date: '10-05' },
      ],
      customizedDateList: [
        { keyword: 'love_day1', date: '2023-05-02' },
      ],
      courseSchedule: null,
    },
  ],

  // 【推送完成提醒】模板id
  CALLBACK_TEMPLATE_ID: 'HYQ3w2h2rFkv--YnRMXTVlPuGm8RPfiUIQpGgTH--SI',

  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'oxffX16ggF6BkExndxGA06KwJGKw',
    }
  ],

}

module.exports = USER_CONFIG
