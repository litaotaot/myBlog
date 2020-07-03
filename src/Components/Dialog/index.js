/*
 * @Author: Litao 
 * @Date: 2020-07-02 15:44:20 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-03 14:41:06
 */

import React from 'react'
import { Modal } from 'antd'

import './index.scss'

class Dialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleCancel = this.props.handleCancel.bind(this)
        this.handleOk = this.props.handleOk.bind(this)
    }
    componentDidMount() { }
    handleOk = e => {
        this.handleOk()
    }
    handleCancel = e => {
        this.handleCancel()
    }
    render() {
        const { modal1Visible } = this.props
        return (
            <Modal
                title="Basic Modal"
                visible={modal1Visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                <div style={{ width: '600px', height: '400px' }}>
                    123456
                </div>
            </Modal>
        )
    }
}

export default Dialog