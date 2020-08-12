/*
 * @Author: Litao 
 * @Date: 2020-08-10 09:36:48 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-12 17:22:08
 */


import React from 'react'


class TimeRecord extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="TimeRecordContainer">
                <ul style={{ padding: '1em' }}>
                    <li style={{ position: "relative", borderTop: '1px solid #999999', borderBottom: '1px solid #999999', borderLeft: '.3em solid rgba(153, 153, 153,.5)' }}>
                        <div style={{
                            position: "absolute", 
                            width: '6em',
                            height: '3em',
                            textAlign: 'center',
                            lineHeight: '3em',
                            top: '-1.5em',
                            left: '-2em',
                            fontSize: '1.3em',
                            backgroundColor: 'white'
                        }}>2020-8-10</div>
                        <div style={{
                            position: "absolute",
                            top: '40%',
                            left: '-3.3em',
                            width: '6em',
                            height: '6em',
                        }}>
                            <img style={{width: '100%'}} src="https://pic3.zhimg.com/v2-897026c1e09d4ea245b807e08977d549_r.jpg?source=1940ef5c" alt=""/>
                        </div>
                        <div>
                            <ul>
                                <li style={{ display: 'flex', flexDirection: 'row', padding: '1em', boxSizing: 'border-box' }}>
                                    <div style={{ width: '30%', padding: '2em' }}>
                                        雄关漫道真如铁，而今迈步从头越。
                                    </div>
                                    <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li style={{ position: "relative", borderTop: '1px solid #999999', borderBottom: '1px solid #999999', borderLeft: '.3em solid rgba(153, 153, 153,.5)' }}>
                        <div style={{
                            position: "absolute", width: '6em',
                            height: '3em',
                            textAlign: 'center',
                            lineHeight: '3em',
                            top: '-1.5em',
                            left: '-2em',
                            fontSize: '1.3em',
                            backgroundColor: 'white'
                        }}>2020-8-10</div>
                        <div style={{
                            position: "absolute",
                            top: '40%',
                            left: '-3.3em',
                            width: '6em',
                            height: '6em',
                        }}>
                            <img style={{width: '100%'}} src="https://pic3.zhimg.com/v2-897026c1e09d4ea245b807e08977d549_r.jpg?source=1940ef5c" alt=""/>
                        </div>
                        <div>
                            <ul>
                                <li style={{ display: 'flex', flexDirection: 'row', padding: '1em', boxSizing: 'border-box' }}>
                                    <div style={{ width: '30%', padding: '2em' }}>
                                        雄关漫道真如铁，而今迈步从头越。
                                    </div>
                                    <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                        <img style={{ width: '16em', height: '10em' }} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775841676,3206984900&fm=26&gp=0.jpg" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TimeRecord