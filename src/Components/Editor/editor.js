/*
 * @Author: Litao 
 * @Date: 2020-07-07 11:29:39 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-07 14:02:48
 */
import React from 'react'
import E from 'wangeditor'



export default class Editor extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var editor = new E('#editor')
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor.create()
    }

    render() {
        return (
            <div id="editor">
            </div>
        )
    }
}