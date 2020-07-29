/*
 * @Author: Litao 
 * @Date: 2020-07-07 09:41:28 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-22 11:29:48
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
        this.iconTextarea = React.createRef()
        this.state = {
            showDialog: false,
            iconPic: ['icon-biaoqing', 'icon-jiacu', 'icon-xieti', 'icon-zitiyanse', 'icon-beijingse', 'icon-tupian', 'icon-chaolianjie', 'icon-shouhangsuojin', 'icon-zuoduiqi', 'icon-ziyuan1', 'icon-youduiqi'],
            selectInfo: {
                selectValue: '',
                selectionStart: null,
            }
        }
    }

    componentDidMount() {
        // document.addEventListener('onselect', function(e){
        //     console.log(e)
        // })
    }

    getExpression = () => {
        this.setState({
            // showDialog: true,

        })
    }
    textareaFocus = () => {
        // let p = document.createElement('p')
        // p.value = ''
        // console.log(this.iconTextarea)
        // this.iconTextarea.current.appendChild(p)
    }
    textareaClick = (e) => {
        // let selection = window.getSelection()
        // let range = document.createRange()
        // range.selectNodeContents(document.getElementsByClassName('iconTextareaStyle')[0])
        // // range.selectNodeContents(this.iconTextarea.current)
        // // selection.addRange(range)
        // // selection.removeAllRanges();
        // // selection.addRange(range);
        // // console.log(document.getElementsByClassName('iconTextareaStyle'))
    }
    textareaMouseUp = (e) => {
        const selection = window.getSelection()
        console.log(selection)
        console.log(selection.toString())
        console.log(selection.getRangeAt(Selection.rangeCount))
        // let anchorNode = selection.anchorNode.parentNode,
        // focusNode = selection.focusNode.parentNode
        // if(anchorNode.nodeName = 'DIV') {
        //     // selection.anchorNode.nodeValue.s
        //     // anchorNodeName.className
            
        //     // selection.anchorOffset
        // }
        // if(focusNode.nodeName = 'DIV') {

        // }


    }

    textareaSelect = (e) => {
        const { selectionStart, selectionEnd, value } = e.target
        if (selectionStart !== selectionEnd) {
            const selection = value.substring(selectionStart, selectionEnd)
            this.setState({
                selectInfo: {
                    selectValue: selection,
                    selectionStart,
                }
            })
        }
    }

    textareaChange = (e) => {
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
        const { selectInfo } = this.state
        // let P = <p>{selectValue}</p>
        let span = document.createElement('span')
        // let iconTextarea = document.getElementById('.iconTextareaStyle')
        span.innerText = selectInfo.selectValue
        console.log(this.iconTextarea.current.innerText)

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
        const { selectInfo, iconPic } = this.state
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
                    <div
                        className="iconTextareaStyle"
                        id="iconTextarea"
                        contentEditable="true"
                        ref={this.iconTextarea}
                        onSelect={(e) => { this.textareaSelect(e) }}
                        onChange={(e) => { this.textareaChange(e) }}
                        onFocus={() => { this.textareaFocus() }}
                        onClick={(e) => { this.textareaClick() }} 
                        onMouseUp={() => { this.textareaMouseUp()}}>
                        {/* qweqwe<span className="spanStrong">1231231</span> */}
                        <span>iii</span>123sdgs<span>ooo</span>wer
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageBoard