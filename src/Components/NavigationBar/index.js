/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:23:29 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-03 15:49:24
 */

import React from 'react'

import './index.scss'

class NavigationBar extends React.Component {
    constructor(props) {
        super()
        this.state = {
            configData: [
                { name: 'Home', url: 'public/assets/img/home.jpg' },
                { name: 'Blog', url: 'public/assets/img/blog.jpg' },
                { name: 'Record', url: 'public/assets/img/record.jpg' },
                { name: 'Personal', url: 'public/assets/img/personal.jpg' },
                { name: 'GitHub', url: 'public/assets/img/github.webp' },
                { name: 'CSDN', url: 'public/assets/img/csdn.webp' },
                { name: '', url: 'public/assets/img/flower.jpg' },
                { name: '', url: 'public/assets/img/history.jpg' },
            ]
        }
    }

    navigation = (e) => {
        switch (e) {
            case 'home':
                this.goToHome(e)
                break;
            case 'blog':
                this.goToBlog(e)
                break;
            case 'record':
                this.goToRecord(e)
                break;
            case 'personal':
                this.goToPersonal(e)
                break;
            case 'github':
                this.goToGitHub()
                break;
            case 'csdn':
                this.goToCSDN()
                break;
            default:
                break;
        }
    }

    goToHome = (e) => {
        window.location.href = `#/${e}/`
    }

    goToBlog = (e) => {
        window.location.href = `#/${e}/`
    }

    goToRecord = (e) => {
        window.location.href = `#/${e}/`
    }

    goToPersonal = (e) => {
        window.location.href = `#/record/detail`
    }

    goToGitHub = () => {
        window.open('https://github.com/litaotaot')
    }

    goToCSDN = () => {
        window.open('https://blog.csdn.net/weixin_44966545')
    }

    render() {
        const { configData } = this.state
        let navigationBlock = configData.map((item, index) => {
            return <div className="popup" style={{ backgroundImage: `url(${require('../../../'+item.url)})`, backgroundSize: '100% 100%' }} key={index} onClick={() => { this.navigation(item.name.toLowerCase()) }}>
                <span className="popupTxt">{item.name}</span>
            </div>
        })
        return (
            <div className="package">
                <div className="box effect7">
                    {navigationBlock}
                </div>
            </div>
        )
    }
}

export default NavigationBar