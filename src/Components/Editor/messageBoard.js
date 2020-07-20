/*
 * @Author: Litao 
 * @Date: 2020-07-07 09:41:28 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-20 18:19:46
 */
import React from 'react'
import { Input } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

import MyDialog from './EditorDialog/myDialog'
import './index.scss'

const { TextArea } = Input

class MessageBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDialog: false,
            iconPic: ['icon-biaoqing', 'icon-jiacu', 'icon-xieti', 'icon-zitiyanse', 'icon-beijingse', 'icon-tupian', 'icon-chaolianjie', 'icon-shouhangsuojin', 'icon-zuoduiqi', 'icon-ziyuan1', 'icon-youduiqi'],
        }
    }

    getExpression = () => {
        this.setState({
            // showDialog: true
        })
    }

    textareaSelect = (e) => {
        console.log(e)
    }

    getEditorType = (e) => {
        switch (e) {
            case 'icon-biaoqing':
                this.biaoqing()
                break;
            case 'icon-jiacu':
                this.jiacu()
                break;
            case 'icon-xieti':
                this.xieti()
                break;
            case 'icon-zitiyanse':
                this.zitiyanse()
                break;
            case 'icon-beijingse':
                this.beijingse()
                break;
            case 'icon-tupian':
                this.tupian()
                break;
            case 'icon-chaolianjie':
                this.chaolianjie()
                break;
            case 'icon-shouhangsuojin':
                this.shouhangsuojin()
                break;
            case 'icon-zuoduiqi':
                this.zuoduiqi()
                break;
            case 'icon-ziyuan1':
                this.ziyuan1()
                break;
            case 'icon-youduiqi':
                this.youduiqi()
                break;
            default:
                break;
        }
    }
    biaoqing = () => {

    }
    jiacu = () => {
        console.log("加粗")

    }
    xieti = () => {
        
    }
    zitiyanse = () => {
        
    }
    beijingse = () => {
        
    }
    tupian = () => {
        
    }
    chaolianjie = () => {
        
    }
    shouhangsuojin = () => {
        
    }
    zuoduiqi = () => {
        
    }
    ziyuan1 = () => {
        
    }
    youduiqi = () => {
        
    }
    render() {
        const { showDialog, iconPic } = this.state
        const Icon = iconPic.map((item, index) => {
            return <i className={"iconfont " + item + " iconfontStyle"} key={index} onClick={() => { this.getEditorType(item) }} ></i>
        })
        return (
            <div className="myEditor">
                <div className="myEditorTop">
                    {
                        Icon
                    }
                </div>
                <div className="myEditorBottom">
                    <textarea className="iconTextareaStyle" rows={10} onSelect={(e) => {this.textareaSelect(e)}}></textarea>
                </div>
            </div>
        )
    }
}

export default MessageBoard