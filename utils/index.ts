
/**
 * 數字添加千位符
 * @param {number} value
 * @returns {string}
 */
export function handleThousands (value: any) {
  const suffix = ''
  if (value && value !== 'NULL' && value !== 'undefined' && isNaN(Number(value))) {
    return value
  } else if (!value) {
    return '0'
  } else {
    const pSuffix = ''
    value = value.toString()
    const intPart = Math.floor(Math.abs(Number(value)))
    let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    intPartFormat = pSuffix + intPartFormat
    let floatPart = ''
    const value2Array = value.split('.')
    
    if (value2Array.length === 2) {
      floatPart = value2Array[1].toString()
      if (floatPart.length === 1) {
        
        return intPartFormat + '.' + floatPart + '0' + suffix
      } else {
        return intPartFormat + '.' + floatPart + suffix
      }
    } else {
      return intPartFormat + floatPart + suffix
    }
  }
}

/**
 * 禁用滾動條 禁用頁面滾動
 */
export function handleStopScroll () {
  var mo = function (e) { e.preventDefault() }
  document.body.style.overflow = 'hidden'
  document.addEventListener("touchmove", mo, false)
}

/**
 * 恢復禁用滾動條 恢復禁用頁面滾動
 */
export function handleCanScroll () {
  var mo = function (e) { e.preventDefault() }
  document.body.style.overflow = ''
  document.removeEventListener("touchmove", mo, false)
}