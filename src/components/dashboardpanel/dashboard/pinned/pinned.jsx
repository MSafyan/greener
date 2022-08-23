import React, { useCallback, useEffect, useState } from 'react'
import { style1, style2, style3, style4 } from '../../../../helper/style'
import pin2 from '../../../../assets/images/pin2.png'
import pin3 from '../../../../assets/images/pin3.png'
import close from '../../../../assets/images/cancel.png'
import Api from '../../../../api/api'
import { routeType } from '../../../../helper/routetype'
import { pinAnimationTemp, pinnedStyle_ } from '../../../../data/atom'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import HeaderCont2 from '../headercont/headercont2'

function Pinned() {
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false);
    const [pinAnimationTemp_, setPinAnimationTemp] = useRecoilState(pinAnimationTemp);
    const [pinnedStyle, setPinnedStyle] = useRecoilState(pinnedStyle_);
    const click = () => {
        let overlay = document.getElementById("dashboard-overlay");
        let parent = document.getElementById("dashboard-body-2-1");
        let child = document.getElementById("dashboard-body-pin");
        setDisplay(!display)
        if (!display) {
            overlay.style.display = "block";
            child.style.left = parent.offsetLeft + 50 + "px"
            child.style.width = parent.offsetWidth + "px"
            child.style.bottom = `calc(100vh - ${parent.offsetHeight + parent.offsetTop}px)`
            setPinnedStyle(parent.offsetHeight + "px")
            setPinAnimationTemp(true)
        } else {
            setPinAnimationTemp(true)
            setTimeout(() => {
                overlay.style.display = "none";
                setPinAnimationTemp(false)
            }, 300);
        }
    }

    useEffect(() => {
        document.getElementById('dashboard-body-pin').style.position = 'initial';
        setPinAnimationTemp(false);
    }, [setPinAnimationTemp])

    const offerAnimate = {
        hidden: {
            transition: {
                duration: 0.3,
            }, height: pinnedStyle, zIndex: 6,
            position: pinAnimationTemp_ ? 'fixed' : 'initial',
        },
        show: {
            transition: {
                duration: 0.3
            }, position: 'fixed',
            zIndex: 6, height: '93vh'
        }
    }

    const getPinnedShipment = useCallback(async () => {
        let res = await Api.getPinnedShipment();
        if (res.status === 200) { setData(res.data.data) }
        else { setData([]) }
    }, [setData])

    useEffect(() => {
        getPinnedShipment()
    }, [getPinnedShipment])

    return (
        <div className='dashboard-body-2' id='dashboard-body-2-1'>
            <motion.div className='dashboard-mid-child dashboard-cont' id="dashboard-body-pin"
                animate={display ? offerAnimate.show : offerAnimate.hidden}>
                <HeaderCont2
                    arrow={display}
                    links={true}
                    click={click}
                    title={'Expeditions epingless'}
                />
                <div className='task-body'>
                    <div className='task-body-child task-body-scroll'
                        style={{ overflowY: display ? 'auto' : 'hidden' }}>
                        {data?.map(item => (
                            <Pin item={item} />
                        ))}
                    </div>
                    <div onClick={click} className="voir-plus table-strip d-flex j-center a-center"
                        style={style4()}>
                        {!display ?
                            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Voir Plus</p> :
                            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Mes expiditions</p>
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function Pin({ item }) {
    const [disp, setDisp] = useState("none")
    return (
        <div key={item.id} className="table-strip table-strip-2 d-flex j-bw pin-row" style={{ alignItems: 'end' }}>
            <div className={`animate__animated ${disp === "none" ? 'animate__fadeOutRight' : 'animate__fadeInRight'} pin-overlay`} style={{
                display: disp === "none" ? setTimeout(() => {
                    return "none"
                }, 500) : "block"
            }}>
                <div className='pin-overlay-head d-flex a-center j-bw'>
                    <span >Document 2</span>
                    <img src={close} onClick={() => setDisp("none")} alt="" />
                </div>
                <div className='pin-overlay-body'>
                    <div className='pin-body-child'>
                        <input type="checkbox" name="" />
                        <label htmlFor="">Shipping Instructions</label>
                    </div>
                    <div className='pin-body-child'>
                        <input type="checkbox" name="" />
                        <label htmlFor="">Draft BL</label>
                    </div>
                    <div className='btn-pinned'>
                        <button>Telecharger</button>
                    </div>
                </div>
            </div>
            <div>
                <div className={`d-flex ${item.orderMode !== 'maritime' ? 'a-center' : ''}`}>
                    <p style={style1()} className="color-212121">{item.orderReference}</p>
                    <img style={{ height: '11px', marginLeft: '4px' }} src={routeType(item.orderMode)} alt="" />
                </div>
                <p style={style2()} className={`${!item.orderStatus.includes('Discharged') && 'color-green'}`}>{item.orderStatus}</p>
            </div>
            <div>
                <div className='pinned-img'>
                    <img onClick={() => setDisp("block")} src={pin2} alt="" />
                    <img src={pin3} alt="" />
                </div>
                <p style={style3()} className='color-blue w-45'>Plus d'infos</p>
            </div>
        </div >
    )
}

export default Pinned