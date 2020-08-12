/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:23:42 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-12 14:02:55
 */

import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouterDOM from 'react-router-dom'
import axios from 'axios'


// const { Switch, HashRouter, Link, Route, Redirect } = ReactRouterDOM

window.React = React
window.ReactDOM = ReactDOM
// window.Switch = Switch
// window.HashRouter = HashRouter
// window.Link = Link
// window.Route = Route
// window.Redirect = Redirect
window.axios = axios

// 字符串base64和base64转字符串
export const base64 = {
  encode: (str) => {
    if (!str) return str
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1)
      }))
  },
  decode(str) {
    if (!str) return str
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }
}

/**
 * @param {date} 标准时间格式:Fri Nov 17 2017 09:26:23 GMT+0800 (中国标准时间)
 * @param {type} 类型
 *   type == 1 ---> "yyyy-mm-dd hh:MM:ss.fff"
 *   type == 2 ---> "yyyy-mm-dd hh:MM"
 *   type == '' ---> "yyyy-mm-dd hh:MM:ss"
 */
export const formatDate = (date, type) => {
  var year = date.getFullYear()// 年
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1// 月
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()// 日
  var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()// 时
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()// 分
  var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()// 秒
  var milliseconds = date.getMilliseconds() < 10 ? '0' + date.getMilliseconds() : date.getMilliseconds() // 毫秒
  if (type === 1) {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds + '.' + milliseconds
  } else if (type === 2) {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes
  } else if (type === 3) {
    return year + '-' + month + '-' + day
  } else {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
  }
}

export const getRandom = (min, max) => {
  return Math.round(Math.random()*(max-min)) + min
}
