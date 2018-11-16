const inBrowser: boolean = typeof window !== 'undefined'
const UA: any = inBrowser && window.navigator.userAgent.toLowerCase()
const isIE: boolean = UA && /msie|trident/.test(UA)
const isIE9: boolean = UA && UA.indexOf('msie 9.0') > 0
const isEdge: boolean = UA && UA.indexOf('edge/') > 0
const isAndroid: boolean = UA && UA.indexOf('android') > 0
const isIOS: boolean = UA && /iphone|ipad|ipod|ios/.test(UA)
const isChrome: boolean = UA && /chrome\/\d+/.test(UA) && !isEdge

let os: string
if (isIOS) {
  os = 'ios'
} else if (isAndroid) {
  os = 'android'
} else {
  os = 'other'
}

let isWechat: boolean
let isAlipay: boolean
let isQQ: boolean
let app: string
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

export {
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
