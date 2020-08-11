import React from 'react'

class HomeHeader extends React.Component {
    constructor(props) {
        super(props)
    } 

    goPersonal = () => {
        console.log(1)
        window.location.href = `#/personal`
    }

    render() {
        return (
            <div className="headerImg">
                <img src="https://www.arcinbj.com/upload/2020/2/%E4%B8%BB%E9%A1%B52-a3c9bab88f9c41efbc40c948ee8b45d6.jpeg"></img>
                <div style={{ position: 'absolute', left: '0', right: '0',top:'35vh', }}>
                    <div style={{ width: '10em', height: '10em', border: '1px solid black', borderRadius: '50%', margin: '0 auto', backgroundImage: 'url(https://pic4.zhimg.com/v2-478b6f894f52972c383a0ce57c9724ca_r.jpg?source=1940ef5c)', backgroundSize: 'cover' }}>
                    </div>
                    <div style={{ margin: '0 auto', textAlign: "center", marginTop: '2vh', width: '300px' }}>
                        <h1 onClick={() => { this.goPersonal() }} className="headerH1">贪狼</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader