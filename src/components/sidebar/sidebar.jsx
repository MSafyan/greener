import './sidebar.css'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo1 from '../../assets/images/preload_icon.png'
import search from '../../assets/images/search.png'
// import add from '../../assets/images/add.png'
// import info from '../../assets/images/info.png'
// import setting from '../../assets/images/settings.png'
// import stats from '../../assets/images/stats.png'
// import dashboard1 from '../../assets/images/dashboard_layout1.png'
// import dashboard2 from '../../assets/images/dashboard_layout2.png'
// import logout from '../../assets/images/logout.png'
// import user from '../../assets/images/user.png'
import { imgAnimate, inputAnimate, pAnimate } from '../../helper/animations'
// import logo2 from '../../assets/images/logo.png'

function Sidebar() {
    const [hover, setHover] = useState(false)

    const onMouseEnter = () => {
        setHover(true)
    }
    const onMouseLeave = () => {
        setHover(false)
    }


    return (
        <motion.div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            animate={{ width: hover ? '235px' : '50px', transition: { duration: 0.5, type: 'spring', damping: 12 } }}
            className={`sidebar-wrapper`}
        >
            <div className='logo1-wrapper'>
                <img src={logo1} alt="logo" className='' />
            </div>
            <div className='sidebar-cont'>
                <div className='sidebar-cont-top'>
                    <ul className='sidebar-icon'>
                        <li className='sidebar-icon1'>
                            <i className="fa-solid fa-circle-plus"></i>
                            <AnimatePresence>
                                {hover && <motion.p
                                    variants={pAnimate}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    style={{ marginLeft: '0', whiteSpace: 'nowrap' }}>Passez votre commande</motion.p>}
                            </AnimatePresence>
                        </li>
                        <li>
                            <AnimatePresence>
                                {hover ? <>
                                    <motion.input
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        variants={inputAnimate}
                                        type="text"
                                        placeholder='N Commande ...'
                                        className='sidebar-input' />
                                    <motion.img
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        variants={imgAnimate}
                                        src={search} alt=""
                                    />
                                </> :
                                    <img src={search} alt="" className='sidebar-input-search' />
                                }
                            </AnimatePresence>
                        </li>
                        <Li src={"fa-th-large"} display={hover} content="Overview" />
                        <Li src={'fa-th'} display={hover} content="Mes expeditions" />
                        <Li src={'fa-circle-exclamation'} display={hover} content="Gerez la qualite" />
                        <Li src={'fa-chart-pie'} display={hover} content="Statistiques" />
                        <Li src={'fa-gear'} display={hover} content="Parametres" />
                    </ul>
                </div>
                <div className='sidebar-cont-bottom'>
                    <ul className='sidebar-icon3'>
                        <Li src={'fa-circle-user'} display={hover} content="Username" />
                        <Li src={"fa-arrow-right-from-bracket"} display={hover} content="Se deconnectez" />
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

function Li({ src, display, content }) {
    return (
        <li style={{ whiteSpace: 'nowrap' }}>
            {/* <img src={src} alt={content} /> */}
            <i className={`fas ${src}`}></i>
            <AnimatePresence>
                {display && <motion.p
                    variants={pAnimate}
                    initial="hidden"
                    animate="show"
                    exit="hidden">{content}</motion.p>}
            </AnimatePresence>
        </li>
    )
}

export default Sidebar