/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:28:04 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-12 15:34:38
 * @descript  goArticle点击回调
 */

import React, { Component } from 'react';

import Label from '../Label/index'
import { formatDate } from '../../exp'

import './index.css'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        const { goArticle, articleInfo } = this.props
        const labelList = articleInfo.blogTags && articleInfo.blogTags.split(',').map((item, index) => {
            return <Label txt={item} key={index} />
        })
        return (
            <div className="blog-acticle">
                <div className="acticle-top">
                    <div onClick={() => { goArticle(articleInfo.id) }}>
                        <img src={articleInfo.blogImg} />
                    </div>
                    <div className="fontFamily">
                        <h2 onClick={() => { goArticle(articleInfo.id) }}>{articleInfo.blogName}</h2>
                        <p>{articleInfo.blogMessage}</p>
                    </div>
                </div>
                {/* <p className="time"><p></p><span>{'2020-5-12'}</span><p></p></p> */}
                <div className="acticle-bottom">
                    <div className="acticleBtnLeft">
                        <p>
                            <i className="iconfont icon-biaoqian"></i>
                            {/* <Label
                                color={'skyblue'}
                                borderColor={'green'}
                                backgroundColor={'pink'}
                                txt={'CSS'}
                            ></Label> */}
                            {
                                labelList
                            }
                        </p>
                    </div>
                    <div className="acticleBtnRight">
                        <p><i className="iconfont icon-shijian"></i><span>{formatDate(new Date(articleInfo.blogTime), 3)}</span></p>
                        <p><i className="iconfont icon-fangwen"></i><span>{articleInfo.blogVisits}</span></p>
                        <p><i className="iconfont icon-zuozhe"></i><span>{articleInfo.blogAuthor}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}