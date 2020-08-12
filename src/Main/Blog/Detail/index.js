/*
 * @Author: Litao 
 * @Date: 2020-08-11 10:55:14 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-12 09:54:52
 */

import React from 'react'
import axios from 'axios'


class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            originData: {}
        }
    }

    componentDidMount() {
        let params = window.location.href.split('=')[1]   //获取文章数据
        axios.get('http://172.16.163.65:5000/blog/detail?id='+params).then(res => {
            this.setState({
                originData: res.data.length ? res.data[0] : {}
            })
        })
    }

    render() {
        const { originData } = this.state
        return (
            <div className="detailContainer" style={{ margin: "0 auto", width: '70%', minHeight: '100vh', backgroundColor: '#faf8fb', padding: '3em' }}>
                <div style={{ margin: '1em auto', textAlign: 'center', padding: '1vh 0' }}>
                    <h1>{originData.blogName}</h1>
                    <p>{originData.blogAuthor}</p>
                    <p>{originData.blogMessage}</p>
                </div>
                <div>
                    <img src={originData.blogImg} style={{ width: '50%', display: 'block' }} />
                    <p style={{ textIndent: '2em', marginTop: '2em' }} >{originData.blogText}</p>
                </div>
            </div>
        )
    }
}

export default Detail