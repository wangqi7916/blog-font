/**
 * 毫秒转换友好的显示格式
 * 输出格式：21小时前
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
function dateStr(date: any) {
  // 获取js 时间戳
  const timeNow = new Date().getTime()
  const lastTime = new Date(date).getTime()
  const time = (timeNow - lastTime) / 1000

  // 存储转换值
  let s
  if (time < 60 * 10) {
    // 十分钟内
    return '刚刚'
  }
  if (time < 60 * 60 && time >= 60 * 10) {
    // 超过十分钟少于1小时
    s = Math.floor(time / 60)
    return `${s}分钟前`
  }
  if (time < 60 * 60 * 24 && time >= 60 * 60) {
    // 超过1小时少于24小时
    s = Math.floor(time / 60 / 60)
    return `${s}小时前`
  }
  if (time <= 60 * 60 * 24 * 30 && time >= 60 * 60 * 24) {
    // 超过1天少于30天内
    s = Math.floor(time / 60 / 60 / 24)
    return `${s}天前`
  }

  if (time < 60 * 60 * 24 * 30 * 12 && time >= 60 * 60 * 24) {
    // 超过1个月
    s = Math.floor(time / 60 / 60 / 24 / 30)
    return `${s}月前`
  }

  s = Math.floor(time / 60 / 60 / 24 / 30 / 12)
  return `${s}年前`
}

export default dateStr
