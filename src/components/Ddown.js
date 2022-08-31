import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as TacoLogo} from '../imgs/mexican-hat.svg'

const Ddown = () => {
    const [toggleNav, setToggleNav] = useState(false)

    const links = [
        {
            linkText:'home',
            href:'/'
        },
        {
            linkText:'order',
            href:'/order'
        },
        {
            linkText:'cart',
            href:'/cart'
        }
    ]

    useEffect(()=> {
        
    })

    const dropIt = () => {
        setToggleNav((prevState) => {
            return !prevState
        })
    }

    const unDrop = () => {
        setToggleNav((prevState) => {
            return !prevState
        })
    }

    const theLink = links.map(( link, index) => {
        return (
            <div onClick={unDrop} >
                <Link to={link.href} >
                    {link.linkText}
                </Link>
            </div>

        )
        // return <li key={index}><a href={link.href}>{link.linkText}</a></li>
    })        

    return (
       
        <div >
            <nav className="Ddown">
                <div className="logo">
                    <TacoLogo />
                </div>
                <ul className={`nav-links  ${toggleNav && 'nav-active'}`}>
                    {theLink}
                    {/* <li><a href="/home">home</a></li>
                    <li><a href="/menu">menu</a></li>
                    <li><a href="/cart">cart</a></li>
                    <li><a href="/">order </a></li> */}
                </ul>
                <div className="hamburger" onClick={dropIt}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </nav>            
        </div>
    )
}

export default Ddown