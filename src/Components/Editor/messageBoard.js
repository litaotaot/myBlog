/*
 * @Author: Litao 
 * @Date: 2020-07-07 09:41:28 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-07 16:11:55
 */
import React from 'react'
import { Input } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

import MyDialog from './EditorDialog/myDialog'

const { TextArea } = Input

class MessageBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDialog: false
        }
    }

    getExpression = () => {
        this.setState({
            showDialog: true
        })
    }
    render() {
        const { showDialog } = this.state
        return (
            <div className="myEditor">
                <div className="myEditorTop">
                    <SmileOutlined style={{ fontSize: '1.6em', cursor: 'pointer' }} onClick={this.getExpression} />
                </div>
                <div className="myEditorBottom">
                    <TextArea rows={4} ></TextArea>
                </div>
                <MyDialog showDialog={showDialog}/>
            </div>
        )
    }
}

export default MessageBoard