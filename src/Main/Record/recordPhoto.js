/*
 * @Author: Litao 
 * @Date: 2020-07-02 10:49:49 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-02 15:01:30
 */

import React from 'react'

class RecordPhoto extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {}
    shouldComponentUpdate(newData, oldData) {
        console.log(newData, oldData)
    }
    render() {
        const { photoInfo } = this.props
        return (
            <React.Fragment>
                <div className="photoContainer">
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
            </React.Fragment>
        )
    }
}

export default RecordPhoto