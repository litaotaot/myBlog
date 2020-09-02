/*
 * @Author: Litao 
 * @Date: 2020-07-07 09:41:28 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-09-02 18:00:52
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
            swatches: ['#FFFFFF', '#000000', '#FFC0CB', '#FF00FF', '#4B0082', '#6A5ACD', '#F8F8FF', '#4169E1', '#87CEEB', '#E1FFFF', '#008080', '#7FFFAA', '#F0FFF0', '#ADFF2F', '#FFD700', '#FF0000'],
            faceUrl: ["Image/face/i_f01.gif", "Image/face/i_f02.gif", "Image/face/i_f03.gif", "Image/face/i_f04.gif", "Image/face/i_f05.gif", "Image/face/i_f06.gif", "Image/face/i_f07.gif", "Image/face/i_f08.gif", "Image/face/i_f09.gif", "Image/face/i_f10.gif", "Image/face/i_f11.gif", "Image/face/i_f12.gif", "Image/face/i_f13.gif", "Image/face/i_f14.gif", "Image/face/i_f15.gif", "Image/face/i_f16.gif", "Image/face/i_f17.gif", "Image/face/i_f18.gif", "Image/face/i_f19.gif", "Image/face/i_f20.gif", "Image/face/i_f21.gif", "Image/face/i_f22.gif", "Image/face/i_f23.gif", "Image/face/i_f24.gif", "Image/face/i_f25.gif", "Image/face/i_f26.gif", "Image/face/i_f27.gif", "Image/face/i_f28.gif", "Image/face/i_f29.gif", "Image/face/i_f30.gif", "Image/face/i_f31.gif", "Image/face/i_f32.gif", "Image/face/i_f33.gif", "Image/face/i_f34.gif", "Image/face/i_f35.gif", "Image/face/i_f36.gif", "Image/face/i_f37.gif", "Image/face/i_f38.gif", "Image/face/i_f39.gif", "Image/face/i_f40.gif", "Image/face/i_f41.gif", "Image/face/i_f42.gif", "Image/face/i_f43.gif", "Image/face/i_f44.gif", "Image/face/i_f45.gif", "Image/face/i_f46.gif", "Image/face/i_f47.gif", "Image/face/i_f48.gif", "Image/face/i_f49.gif", "Image/face/i_f50.gif"],
            currentRange: null,
            showSwatches: false,
            showBackSwatches: false,
            showFace: false,
        }
    }

    componentDidMount() {
        const { showSwatches, showBackSwatches } = this.state
        this.iconTextarea.current.addEventListener('click', () => {
            this.setState({
                showSwatches: false,
                showBackSwatches: false,
                showFace: false,
                showImg: false,
            })
        })
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
        // console.log(this.iconTextarea)
        // const selection = window.getSelection()
        // console.log(selection)
        // console.log(selection.toString())
        // console.log(selection.getRangeAt(Selection.rangeCount))
        // this.setState({
        //     currentRange: selection.getRangeAt(Selection.rangeCount)
        // })
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

    //保存当前选区
    saveRange = () => {
        const selection = window.getSelection()
        this.setState({
            currentRange: selection.getRangeAt(Selection.rangeCount)
        })
    }

    //复制选区
    copyRange = (range) => {
        return range.cloneRange()
    }

    textareaSelect = (e) => {
        // const { selectionStart, selectionEnd, value } = e.target
        this.saveRange()
    }

    //选择颜色
    selectColor = (e) => {
        const { showSwatches, currentRange, showBackSwatches } = this.state
        if(!currentRange) return   
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        // 字体颜色
        if(showSwatches) {
            document.execCommand('foreColor', false, e) 
            this.setState({
                showSwatches: !showSwatches,
                currentRange: copyRange
            })
        } 
        // 背景颜色
        if(showBackSwatches) {
            document.execCommand('backColor', false, e)
            this.setState({
                showBackSwatches: !showBackSwatches,
                currentRange: copyRange
            })
        }
    }

    // 添加表情
    selectImg = (e) => {
        const { showFace, currentRange } = this.state
        if(!currentRange) return   
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        document.execCommand('insertImage', false, e) 
        this.setState({
            showFace: !showFace,
        })
    }

    // 上传图片
    doUpload = () => {
      const file = this.$refs.excelFile.files[0]; // 文件信息
      if (!file) {
        return false;
      } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
        // 格式根据自己需求定义
        // this.$message.error("上传格式不正确，请上传xls或者xlsx格式");
        // this.$emit("excelData", { msg: '上传格式不正确，请上传xls或者xlsx格式' })
        return false;
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
        const { showFace  } = this.state
        this.setState({
            showFace: !showFace
        })
    }
    jiacu = () => {
        const { currentRange } = this.state
        if(!currentRange) return 
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        document.execCommand('bold', false, null)
        //重设选区
        this.setState({
            currentRange: copyRange
        })
    }
    xieti = () => {
        const { currentRange } = this.state
        if(!currentRange) return 
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        document.execCommand('italic', false, null)
        //重设选区
        this.setState({
            currentRange: copyRange
        })
    }
    zitiyanse = () => {
        const { showSwatches  } = this.state
        this.setState({
            showSwatches: !showSwatches
        })
    }
    beijingse = () => {
        const { showBackSwatches  } = this.state
        this.setState({
            showBackSwatches: !showBackSwatches
        })
    }
    tupian = () => {
        const { showImg  } = this.state
        this.setState({
            showImg: !showImg
        })
    }
    chaolianjie = () => {
        const { currentRange } = this.state
        if(!currentRange) return 
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        document.execCommand('createLink', false, null)
        //重设选区
        this.setState({
            currentRange: copyRange
        })
    }
    shouhangsuojin = () => {
        const { currentRange } = this.state
        if(!currentRange) return 
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        document.execCommand('outdent', false, null)
        //重设选区
        this.setState({
            currentRange: copyRange
        })
    }
    zuoduiqi = () => {
        const { currentRange } = this.state
        if(!currentRange) return 
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        document.execCommand('justifyLeft', false, null)
        //重设选区
        this.setState({
            currentRange: copyRange
        })
    }
    ziyuan1 = () => {
        const { currentRange } = this.state
        if(!currentRange) return 
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        document.execCommand('justifyCenter', false, null)
        //重设选区
        this.setState({
            currentRange: copyRange
        })
    }
    youduiqi = () => {
        const { currentRange } = this.state
        if(!currentRange) return 
        let copyRange = this.copyRange(currentRange)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(currentRange)
        document.execCommand('justifyRight', false, null)
        //重设选区
        this.setState({
            currentRange: copyRange
        })
    }
    render() {
        const { swatches, iconPic, showSwatches, showBackSwatches, faceUrl, showFace, showImg } = this.state
        // 顶部图标
        const Icon = iconPic.map((item, index) => {
            return <i className={"iconfont " + item + " iconfontStyle"} key={index} onClick={() => { this.getEditorType(item) }} ></i>
        })
        // 色板
        const Swatches = swatches.map((item, index) => {
            return <li className="swatchesLi" style={{ backgroundColor: item }} key={index} onClick={() => {
                this.selectColor(item)
            }} ></li>
        })
        // 表情
        const Face = faceUrl.map((item, index) => {
            return (<li className="faceLi" style={{ backgroundColor: item }} key={index} onClick={() => {
                        this.selectImg(require('../../' + item))
                    }} >
                        <img src={require('../../' + item)} />
                    </li>)
        })
        return (
            <div className="myEditor">
                <div className="myEditorTop">
                    {
                        Icon
                    }
                </div>
                <div className="myEditorBottom">
                    <div className="swatchesBox">
                        {
                            showSwatches && <ul className='swatchesUl'>
                                { Swatches }
                            </ul>
                        }
                    </div>
                    <div className="showBackSwatches">
                        {
                            showBackSwatches && <ul className='swatchesUl'>
                                { Swatches }
                            </ul>
                        }
                    </div>
                    <div className="showFace">
                        {
                            showFace && <ul className='facesUl'>
                                { Face }
                            </ul>
                        }
                    </div>
                    {
                        showImg && <div className="showImg">
                            <input type="text" />
                            <input type="button" value="确定" onClick="determine" />
                            <input type="file" accept="image/*" onChange="doUpload" />
                        </div>
                    }
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
                            会施工i啊化工i啊化工i回到i过后i大案件哦i改价哦i啊化工i啊化工i啊
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageBoard