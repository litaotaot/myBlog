/*
 * @Author: Litao 
 * @Date: 2020-08-13 11:24:46 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-13 14:56:35
 */

import React from 'react'

import './index.scss'

class Personal extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div style={{ margin: '0 auto', width: '70%', backgroundColor: '#f1f1f1', minHeight: '100vh',padding: '1em' }}>
                <div className='personalTop'>

                </div>
                <div className='personalBody'>
                    <ul>
                        <li>
                            <h2 style={{ textAlign: 'left', backgroundColor: 'skyblue' }}>关于我</h2>
                            <p style={{ fontSize: '1.2em' }}>前端开发小哥一枚</p>
                            <ul style={{ paddingLeft: '2em', paddingRight: '2em' }}>
                                <li><span className='cloumn'>邮箱: </span><a>2418999295@qq.com</a></li>
                                <li><span className='cloumn'>github: </span><a>https://github.com/litaotaot</a></li>
                                <li><span className='cloumn'>兴趣爱好: </span>和一个菜鸟打羽毛球，打游戏，撸代码(我不是真心的 哈哈)</li>
                            </ul>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='personalBottom'>

                </div>
            </div>
        )
    }
}

export default Personal