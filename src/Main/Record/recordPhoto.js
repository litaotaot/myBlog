/*
 * @Author: Litao 
 * @Date: 2020-07-02 10:49:49 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-02 17:51:31
 */

import React from 'react'
import { Modal, Button } from 'antd'

// import Dialog from '../../Components/Dialog/index'

class RecordPhoto extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         visible: true
    //     }
    // }
    state = { visible: false };
    // componentDidMount() { }
    // shouldComponentUpdate(newData, oldData) {
    //     console.log(newData, oldData)
    // }
    showDialog() {
        console.log(123)
        // this.setState({
        //     modal1Visible: true
        // })
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    render() {
        const { photoInfo } = this.props
        const { modal1Visible } = this.state
        return (
            // <React.Fragment>
            //     <div className="photoContainer" onClick={() => this.showDialog() }>
            //         {
            //             photoInfo.map((item, index) => {
            //                 return (
            //                     <div className="recordPhoto" style={{ transform: `rotate(${item.rotate})` }} key={index}>
            //                         <i className="iconfont icon-suolian-copy"></i>
            //                         <p>{item.photoTxt}</p>
            //                         <div style={{ backgroundImage: `url(${require('../../Image/' + item.photoImg)})` }}></div>
            //                     </div>
            //                 )
            //             })
            //         }
            //     </div>
            //     <Dialog
            //         modal1Visible={modal1Visible}
            //     />
            //     <Modal
            //         title="20px to Top"
            //         style={{ top: 20 }}
            //         visible={this.state.modal1Visible}
            //         onOk={() => this.setModal1Visible(false)}
            //         onCancel={() => this.setModal1Visible(false)}
            //     >
            //         <p>some contents...</p>
            //         <p>some contents...</p>
            //         <p>some contents...</p>
            //     </Modal>
            // </React.Fragment>
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

export default RecordPhoto