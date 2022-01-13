/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "[Hover over a Energizer to see it's effect]": "[将鼠标悬停在 增能器 上以查看其效果]",
    "1e21 Half Points and Destabilizing IV are required to unlock Half Jump": "解锁半跳需要 1e21 半点和 不稳定 IV",
    "Delete Your Savefile [THIS CANNOT BE UNDONE!!!!]": "删除您的保存文件 [这无法撤消！！！！]",
    "Destabilizers": "去稳定器",
    "Destabilizing": "不稳定",
    "Energizers": "增能器",
    "Export your save (copies your save to the clipboard": "导出您的存档（将您的存档复制到剪贴板",
    "Half Jump": "半跳",
    "Half Jump.": "半跳。",
    "Import your save": "导入你的存档",
    "Temporary Credits :": "非常感谢:",
    "This will reset all content except for things that explicitly say they will not be reset, but you will unlock many new powerful things, beyond your imagination.": "这将重置所有内容，但明确表示不会重置的内容除外，但您将解锁许多超出您想象的强大新内容。",
    "Unknown": "未知",
    "Unlocking any Energizer will reset your Destabilizers": "解锁任何 增能器 都会重置你的 去稳定器",
    "Use these Energizers' great power to your advantage": "使用这些 增能器 的强大力量为您带来优势",
    "Will you take the risk?": "你会冒这个险吗？",
    "The first Energizer also provides a 2x Boost to D1": "第一个 增能器 还为 D1 提供 2x 提升",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Credit to unpingabot#4191 for a ton of help with loading saves": "感谢 unpingabot#4191 在加载保存方面提供了大量帮助",
    "Credit to thepaperpilot#1210 for a lot of general help with learning js/html/css": "感谢 thepaperpilot#1210 在学习 js/html/css 方面提供了很多一般帮助",
    "Credit to Jayman#8158 for a lot of help with the save system": "感谢 Jayman#8158 为保存系统提供了很多帮助",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Currently Producing ": "当前生产 ",
    "Destabilizing ": "不稳定 ",
    "Your Number is ": "你的数字是 ",
    "Increasing by ": "增加了 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You are gaining (.+) every second$/, '你每秒获得 $1'],
    [/^You have Half Jumped (.+) Times.$/, '你半跳了 $1 次。'],
    [/^You have (.+) Half Points$/, '你有 $1 半点'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Produces (.+) Destabilizer (.+)$/, '生产 $1 去稳定器 $2'],
    [/^Produces (.+) Half Point$/, '生产 $1 半点'],
    [/^Produces (.+) Half Points$/, '生产 $1 半点'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^Destabilizer ([\d\.]+)$/, '去稳定器 $1'],
	[/^D([\d\.]+) gains a small multiplier based on the amount of D([\d\.]+) you have$/, 'D$1 根据您拥有的 D$2 数量获得一个小的乘数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: ([\d\.]+)$/, '成本：$1'],
    [/^Cost: ([\d\.,]+)$/, '成本：$1'],
    [/^Cost: ([\d\.]+)e([\d\.,]+)$/, '成本：$1e$2'],
    [/^Cost: ([\d\.]+)e([\d\.,]+) Half Points$/, '成本：$1e$2 半点'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Currently: ([\d\.]+)x$/, '当前：$1x'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);