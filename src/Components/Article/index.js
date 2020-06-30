/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:28:04 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-06-30 17:27:38
 * @descript  goArticle点击回调
 */

import React, { Component } from 'react';

import Label from '../Label/index'

import './index.css'
import { skyblue } from 'color-name';

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    
    render() {
        const { goArticle, id=1 } = this.props
        return (
            <div className="blog-acticle">
                <div className="acticle-top">
                    <div onClick={() => {goArticle(id)}}>
                        <img src="https://www.arcinbj.com/upload/2020/2/%E4%B8%BB%E9%A1%B52-a3c9bab88f9c41efbc40c948ee8b45d6.jpeg" />
                    </div>
                    <div className="fontFamily">
                        <h2 onClick={() => {goArticle(id)}}>孤独的寂寞</h2>
                        <p>
                        刚才有人问我该怎么区分孤独与寂寞，有天你走在大街上突然下雨了，你躲在屋檐下找遍了手机通讯录也不知道要找谁给你送伞，那一刻你是孤独的，而寂寞，是你一个人躲在屋檐下安静的等雨停。
                        </p>
                    </div>
                </div>
                {/* <p className="time"><p></p><span>{'2020-5-12'}</span><p></p></p> */}
                <div className="acticle-bottom">
                    <div className="acticleBtnLeft">
                        <p>
                            <i className="iconfont icon-biaoqian"></i>
                            {/* 循环 */}
                            <Label
                                txt={'Javascript'}
                            />
                            <Label
                                color={'skyblue'}
                                borderColor={'green'}
                                backgroundColor={'pink'}
                                txt={'CSS'}
                            ></Label>
                            <Label
                                txt={'HTML'}
                            ></Label>
                        </p>
                    </div>
                    <div className="acticleBtnRight">
                        <p><i className="iconfont icon-shijian"></i><span>{'2020-5-12'}</span></p>
                        <p><i className="iconfont icon-fangwen"></i><span>{1123}</span></p>
                        <p><i className="iconfont icon-zuozhe"></i><span>{'Litao'}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}