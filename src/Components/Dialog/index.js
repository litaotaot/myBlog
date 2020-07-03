/*
 * @Author: Litao 
 * @Date: 2020-07-02 15:44:20 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-02 17:51:28
 */

 import React from 'react'
 import { Modal } from 'antd'

 import './index.scss'

 class Dialog extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { modal1Visible } = this.props
        console.log(this.props)
        return (
            <Modal visible={modal1Visible}>
                <div style={{width: '600px',height: '400px'}}>
                    123456
                </div>
            </Modal>
        )
    }
 }

 export default Dialog