/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:23:52 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-13 11:05:53
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
        axios.get('http://172.16.163.65:5000/home').then(res => {
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
            return (<div key={item.id} className={'item item-'+index} style={{ backgroundImage: `url(${item.homeUrl})` }}>
                        {/* <img src={} style={{width: '100%',height: '100%'}} alt=""/> */}
                        <div className='itemTop'>面对疾风吧</div>
                        <div className='itemBottom'>哈萨克</div>
                        {/* <div className='round'></div> */}
                        吾虽浪迹天涯， 却从未迷失本心
                    </div>)
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