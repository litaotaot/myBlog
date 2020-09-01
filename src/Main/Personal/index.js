/*
 * @Author: Litao 
 * @Date: 2020-08-13 11:24:46 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-17 14:11:20
 */

import React from 'react'

import './index.scss'

// import img from '../../../public/assets/img/boshijie.jpg'
// const img = require('../../../public/assets/img/boshijie.jpg')
class Personal extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        let url = 'public/assets/img/timg.jpg'
        return (
            <div style={{ margin: '0 auto', width: '70%', backgroundColor: '#f1f1f1', minHeight: '100vh', padding: '1em' }}>
                <div className='personalTop' style={{ backgroundImage: `url(${require('../../../' + url)})`, paddingTop: '2em' }}>
                    <div style={{ width: '10em', height: '10em', border: '1px solid black', borderRadius: '50%', margin: '0 auto', backgroundImage: 'url(https://pic4.zhimg.com/v2-478b6f894f52972c383a0ce57c9724ca_r.jpg?source=1940ef5c)', backgroundSize: 'cover' }}>
                    </div>
                    <h2>不忘初心，砥砺前行</h2>
                </div>
                <div className='personalBody'>
                    <ul>
                        <li className="personalLi">
                            <h2 style={{ textAlign: 'left', backgroundColor: 'skyblue' }}>关于我</h2>
                            <p style={{ fontSize: '1.2em', margin: '.2em' }}>前端开发小哥一枚</p>
                            <ul style={{ paddingLeft: '2em', paddingRight: '2em' }}>
                                <li><span className='cloumn'>邮箱: </span><a>2418999295@qq.com</a></li>
                                <li><span className='cloumn'>github: </span><a>https://github.com/litaotaot</a></li>
                                <li><span className='cloumn'>兴趣爱好: </span>和一个菜鸟打羽毛球，打游戏，撸代码(我不是真心的 哈哈)</li>
                            </ul>
                        </li>
                        <li className="personalLi">
                            <h2 style={{ textAlign: 'left', backgroundColor: 'skyblue' }}>关于本站</h2>
                            <p style={{ fontSize: '1.2em', margin: '.2em' }}>设计此博客纯属练手，有设计不足欢迎指出</p>
                            <ul style={{ paddingLeft: '2em', paddingRight: '2em' }}>
                                <li><span className='cloumn'>前端实现: </span>React + Antd(少量，本想自己实现UI插件，考虑太耗时所以后续有时间再看吧) + redux(纯属练手)</li>
                                <li><span className='cloumn'>后端实现: </span>nodejs + mysql</li>
                                <li className='cloumn'>本站采用阿里云提供服务</li>
                            </ul>
                        </li>
                        <li className="personalLi">
                            <h2 style={{ textAlign: 'left', backgroundColor: 'skyblue' }}>关于版权</h2>
                            <ul style={{ paddingLeft: '2em', paddingRight: '2em' }}>
                                <li><span>本站资源来源于网络，版权由作者所有。如有侵权，请联系作者及时删除。</span></li>
                                <li><span>您可以将本站作为参考二次开发、转载，但不得进行商业用途。</span></li>
                                <li>本站仅对客户端开发，没有对移动端以及IE兼容。</li>
                                <li>如有共同学习的小伙伴欢迎联系</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='personalBottom'>
                    这里准备写点啥的
                </div>
            </div>
        )
    }
}

export default Personal