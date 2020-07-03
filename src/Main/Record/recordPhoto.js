/*
 * @Author: Litao 
 * @Date: 2020-07-02 10:49:49 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-03 14:55:51
 */

import React from 'react'
import { Modal } from 'antd'

class RecordPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal1Visible: false
    }
  }
  // componentDidMount() { }
  // shouldComponentUpdate(newData, oldData) {
  //     console.log(newData, oldData)
  // }
  showDialog() {
    this.setState({
      modal1Visible: true
    })
  }
  handleOk = () => {
    this.setState({
      modal1Visible: false
    })
  }
  handleCancel = () => {
    this.setState({
      modal1Visible: false
    })
  }
  render() {
    const { photoInfo } = this.props
    const { modal1Visible } = this.state
    console.log(modal1Visible)
    return (
      <React.Fragment>
        <div className="photoContainer" onClick={() => this.showDialog()}>
          {
            photoInfo.map((item, index) => {
              return (
                <div className="recordPhoto" style={{ transform: `rotate(${item.rotate})` }} key={index}>
                  <i className="iconfont icon-suolian-copy"></i>
                  <p>{item.photoTxt}</p>
                  <div style={{ backgroundImage: `url(${require('../../Image/' + item.photoImg)})` }}></div>
                </div>
              )
            })
          }
        </div>
        <Modal
          title="Basic Modal"
          visible={modal1Visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="600px"
          >
          <div style={{ width: '550px', height: '500px' }}>
            <p>今使人于危难之地，急而弃之，外则纵蛮夷之暴，内则伤死难之臣。此际若不救之，匈奴如复犯塞为寇，陛下将何以使将？</p>
            <div style={{width: '500px', height: '300px', backgroundImage: `url(${require('../../Image/' + 'general3.jpg')})`}}></div>
            <p>
            刚才有人问我该怎么区分孤独与寂寞，有天你走在大街上突然下雨了，你躲在屋檐下找遍了手机通讯录也不知道要找谁给你送伞，那一刻你是孤独的，而寂寞，是你一个人躲在屋檐下安静的等雨停。
            </p>
          </div>
        </Modal>
      </React.Fragment>
    )
  }
}

export default RecordPhoto