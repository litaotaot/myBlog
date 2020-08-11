/*
 * @Author: Litao 
 * @Date: 2020-08-10 09:36:48 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-10 15:24:14
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
                            position: "absolute", width: '6em',
                            height: '3em',
                            textAlign: 'center',
                            lineHeight: '3em',
                            top: '-1.5em',
                            left: '-2em',
                            fontSize: '1.3em',
                            backgroundColor: 'white'
                        }}>2020-8-10</div>
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