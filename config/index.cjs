const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  USERS: [
    {
      name: '小阳',
      id: 'oxffX15XOZ5_Fcv7fUg41XOXyix0',
      useTemplateId: 'SUMpNToAUH5cmHxaiPCxRpuVVS2pvEZBSKuza0_NKgM',
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
      courseSchedule: [
        // 周一
        [
          '上午第2节｜信息技术教材教法（高慧）1#303-304',
          '下午第4节｜Java语言程序设计（焦禹澄）3#414-415 计算机综合技能实训室',
        ],
        // 周二
        [
          '下午第3节｜数据库原理及应用（李孟雪）3#404-405 虚拟仿真实训室',
          '下午第4节｜Java语言程序设计（焦禹澄）3#414-415 计算机综合技能实训室',
        ],
        // 周三
        [
          '上午第1节｜Java语言程序设计（焦禹澄）3#412-413 计算机组成原理实验室',
          '上午第2节｜操作系统（李晨）3#414-415 计算机综合技能实训室',
          '晚上第5节｜Java语言程序设计（焦禹澄）',
        ],
        // 周四
        [
          '上午第2节｜Java语言程序设计（焦禹澄）3#414-415 计算机综合技能实训室',
          '下午第3节｜信息技术教材教法（高慧）1#303-304',
          '下午第4节｜数据库原理及应用（李孟雪）3#404-405 虚拟仿真实训室',
        ],
        // 周五
        [
          '上午第1节｜Java语言程序设计（焦禹澄）3#414-415 计算机综合技能实训室',
          '上午第2节｜操作系统（李晨）3#412-413 计算机组成原理实验室',
        ],
        // 周六
        [],
        // 周日
        [],
      ],
    },
    {
      name: '自己',
      id: 'oxffX1_JavqbCnu4GqVzM0NgDZX0',
      useTemplateId: 'SUMpNToAUH5cmHxaiPCxRpuVVS2pvEZBSKuza0_NKgM',
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
      courseSchedule: [
        // 周一
        [
          '上午第2节｜信息技术教材教法（高慧）1#303-304',
          '下午第4节｜Java语言程序设计（焦禹澄）3#414-415 计算机综合技能实训室',
        ],
        // 周二
        [
          '下午第3节｜数据库原理及应用（李孟雪）3#404-405 虚拟仿真实训室',
          '下午第4节｜Java语言程序设计（焦禹澄）3#414-415 计算机综合技能实训室',
        ],
        // 周三
        [
          '上午第1节｜Java语言程序设计（焦禹澄）3#412-413 计算机组成原理实验室',
          '上午第2节｜操作系统（李晨）3#414-415 计算机综合技能实训室',
          '晚上第5节｜Java语言程序设计（焦禹澄）',
        ],
        // 周四
        [
          '上午第2节｜Java语言程序设计（焦禹澄）3#414-415 计算机综合技能实训室',
          '下午第3节｜信息技术教材教法（高慧）1#303-304',
          '下午第4节｜数据库原理及应用（李孟雪）3#404-405 虚拟仿真实训室',
        ],
        // 周五
        [
          '上午第1节｜Java语言程序设计（焦禹澄）3#414-415 计算机综合技能实训室',
          '上午第2节｜操作系统（李晨）3#412-413 计算机组成原理实验室',
        ],
        // 周六
        [],
        // 周日
        [],
      ],
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
