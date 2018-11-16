const inBrowser = typeof window !== 'undefined'
const UA = inBrowser && window.navigator.userAgent.toLowerCase()
const isIE = UA && /msie|trident/.test(UA)
const isIE9 = UA && UA.indexOf('msie 9.0') > 0
const isEdge = UA && UA.indexOf('edge/') > 0
const isAndroid = UA && UA.indexOf('android') > 0
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
let os
if (isIOS) {
  os = 'ios'
} else if (isAndroid) {
  os = 'android'
} else {
  os = 'other'
}

let isWechat
let isAlipay
let isQQ
let app
if (/micromessenger/.test(UA)) {
  isWechat = true
  app = 'wechat'
} else if (/qq/.test(UA) && !/qq-url-managerl/.test(UA)) {
  isQQ = true
  app = 'qq'
} else if (/alipay/.test(UA)) {
  isAlipay = true
  app = 'alipay'
}

export default {
  inBrowser,
  isChrome,
  isIE,
  isIE9,
  isEdge,

  app,
  isWechat,
  isAlipay,
  isQQ,

  os,
  isIOS,
  isAndroid
}
