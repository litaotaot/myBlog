/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:23:52 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-29 18:03:16
 */

import React from 'react'
import axios from 'axios'

class HomeBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homeInfo: null
        }
    }

    componentDidMount() {
        axios.get('http://172.16.163.53:5000/home').then(res => {
            if(res.status == 200) {
                this.setState({
                    homeInfo: res.data
                })
            }
        })
    }
    render() {
        const { homeInfo } = this.state
        const divBox = homeInfo && homeInfo.map((item, index) => {
            return <div key={item.id} className={'item item-'+index}><img src={item.homeUrl} style={{width: '100%',height: '100%'}} alt=""/></div>
        })
        return (
            <div className="containerBac">
                <div className="container ">
                    { divBox }
                </div>
            </div>
        )
    }
}

export default HomeBody