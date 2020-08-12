/*
 * @Author: Litao 
 * @Date: 2020-05-12 15:18:31 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-12 16:45:25
 * @descript  热搜组件
 */

import React from 'react'

import './index.css'

import { getRandom } from '../../exp'

export default class HotSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txtArr: [
                // { id: 1, txt: '簌簌衣巾落枣花，村南村北响缫车', color: '#00FF66' },
                // { id: 2, txt: '醉月频中圣，迷花不事君', color: '#993366' },
                // { id: 3, txt: '西塞山前白鹭飞，桃花流水鳜鱼肥。', color: '#003771' },
                // { id: 4, txt: '梅须逊雪三分白，雪却输梅一段香', color: '#765433' },
                // { id: 5, txt: '簌簌衣巾落枣花，村南村北响缫车', color: '#986543' },
                // { id: 6, txt: '簌簌衣巾落枣花，村南村北响缫车', color: '#325622' },
                // { id: 7, txt: '一路稻花谁是主？红蜻蛉伴绿螳螂', color: '#465793' },
                // { id: 8, txt: '簌簌衣巾落枣花，村南村北响缫车', color: '#457211' },
                // { id: 9, txt: '秋风起兮白云飞，草木黄落兮雁南归', color: '#3467F8' },
            ]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.originHotSearch === nextProps.originHotSearch ? false : true 
    }

    componentWillReceiveProps(nextProps) {
        nextProps.originHotSearch.length && this.getInitialData(nextProps.originHotSearch)
    }

    getInitialData = (originHotSearch) => {
        let tempArr = [], tempObj
        originHotSearch.forEach(item => {
            tempObj = {}
            tempObj.color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
            tempObj.txt = item.blogName
            tempObj.id = item.id
            tempArr.push(tempObj)
        })
        this.setState({
            txtArr: tempArr
        })
    }

    goDetail = (e) => {
        console.log(e.target.innerText)
    }

    render() {
        const { txtArr } = this.state
        const { goArticle } = this.props
        const li = txtArr.map((item, index) => {
            switch (index) {
                case 0:
                    return <li key={index} onClick={() => {goArticle(item.id)}}><i className="iconfont icon-shu first" style={{color: item.color || '#33FF99'}}></i>{item.txt}</li>
                    break;
                case 1:
                    return <li key={index} onClick={() => {goArticle(item.id)}}><i className="iconfont icon-hua seconed" style={{color: item.color || '#33FF99'}}></i>{item.txt}</li>
                    break;
                case 2:
                    return <li key={index} onClick={() => {goArticle(item.id)}}><i className="iconfont icon-ziyuan thrid" style={{color: item.color || '#33FF99'}}></i>{item.txt}</li>
                    break;
                default:
                    return <li key={index} onClick={() => {goArticle(item.id)}}><i className="iconfont icon-lianjie" style={{color: item.color || '#33FF99'}}></i>{item.txt}</li>
                    break;
            }
        })
        return (
            <div className="hotContainer">
                <div className="hotTop">
                    <p><i className="iconfont icon-icon-test"></i><span>热搜</span></p>
                </div>
                <p className="line"></p>
                <div className='hotBottom' onClick={this.getTags}>
                    <ul onClick={this.goDetail}>
                        {li}
                    </ul>
                </div>
            </div>
        )
    }
}