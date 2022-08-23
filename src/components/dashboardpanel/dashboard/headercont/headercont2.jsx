import React, { useState } from 'react'
import arrowLeft from '../../../../assets/images/arrow_left.png'

function HeaderCont2({ links, title, arrow, click }) {
    const [display, setDisplay] = useState(false);
    return (
        <div className='dashboard-head'>
            <div className='d-flex a-center'>
                {arrow && <img src={arrowLeft} alt="arrow left" onClick={click} />}
                {/* <p className='dashboard-head-title'
                    style={{ opacity: !display ? 1 : 0 }}>{title}</p> */}
            </div>
            {links && (
                <div
                    className='dashboard-links dashboard-links-2'
                    style={{ width: !display ? '63px' : 'calc(100% - 22px)' }}
                >
                    <Links display={display} setDisplay={setDisplay} />
                </div>)}
        </div>
    )
}

const Links = ({ display, setDisplay }) => {
    const [style, setStyle] = useState({ link1: 'active', link2: '', link3: '', link4: '' })
    const [link, setLink] = useState('Tous modes')

    const styleHandle = (key) => {
        setDisplay(!display)
        switch (key) {
            case 1:
                setLink("Tous modes")
                setStyle({ link1: 'active', link2: '', link3: '', link4: '' })
                break;
            case 2:
                setLink("Maritime")
                setStyle({ link1: '', link2: 'active', link3: '', link4: '' })
                break;
            case 3:
                setLink("Routier")
                setStyle({ link1: '', link2: '', link3: 'active', link4: '' })
                break;
            case 4:
                setLink("Aerien")
                setStyle({ link1: '', link2: '', link3: '', link4: 'active' })
                break;
            default:
                break;
        }
    }

    return (
        <>
            {display ?
                <>
                    <p className={style.link1} onClick={() => styleHandle(1)}>Tous modes</p>
                    <p className={style.link2} onClick={() => styleHandle(2)}>Maritime</p>
                    <p className={style.link3} onClick={() => styleHandle(3)}>Routier</p>
                    <p className={style.link4} onClick={() => styleHandle(4)}>Aerien</p>
                </> :
                <p className={'active'} onClick={() => styleHandle(0)}>{link}</p>
            }
        </>
    )
}

export default HeaderCont2