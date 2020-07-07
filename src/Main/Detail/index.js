/*
 * @Author: Litao 
 * @Date: 2020-07-07 09:35:28 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-07 15:59:42
 */
import React from 'react'

import MessageBoard from '../../Components/Editor/messageBoard'
import Editor from '../../Components/Editor/editor'

import './index.scss'
 class Detail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="detailContainer">
                <MessageBoard/>
                {/* <Editor/> */}
            </div>
        )
    }
 }

 export default Detail