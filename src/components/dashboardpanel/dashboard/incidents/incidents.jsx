import React, { useCallback, useEffect, useState } from 'react'
import { style1, style2, style3, style4 } from '../../../../helper/style'
import { routeType } from '../../../../helper/routetype'
import Api from '../../../../api/api'
import { incidentAnimationTemp, incidentStyle_ } from '../../../../data/atom'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import HeaderCont2 from '../headercont/headercont2'

function Incidents() {

    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false);
    const [incidentAnimationTemp_, setIncAnimationTemp] = useRecoilState(incidentAnimationTemp);
    const [incidentStyle, setIncidentStyle] = useRecoilState(incidentStyle_);
    const click = () => {
        let overlay = document.getElementById("dashboard-overlay");
        let parent = document.getElementById("dashboard-body-2-2");
        let child = document.getElementById("dashboard-body-incident");
        setDisplay(!display)
        if (!display) {
            overlay.style.display = "block";
            child.style.left = parent.offsetLeft + 50 + "px"
            child.style.width = parent.offsetWidth + "px"
            child.style.bottom = `calc(100vh - ${parent.offsetHeight + parent.offsetTop}px)`
            setIncidentStyle(parent.offsetHeight + "px")
            setIncAnimationTemp(true)
        } else {
            setIncAnimationTemp(true)
            setTimeout(() => {
                overlay.style.display = "none";
                setIncAnimationTemp(false)
            }, 300);
        }
    }

    useEffect(() => {
        document.getElementById('dashboard-body-incident').style.position = 'initial';
        setIncAnimationTemp(false);
    }, [setIncAnimationTemp])

    const offerAnimate = {
        hidden: {
            transition: {
                duration: 0.3,
            }, height: incidentStyle, zIndex: 6,
            position: incidentAnimationTemp_ ? 'fixed' : 'initial',
        },
        show: {
            transition: {
                duration: 0.3
            }, position: 'fixed',
            zIndex: 6, height: '93vh'
        }
    }

    const getIncidents = useCallback(async () => {
        let res = await Api.getIncidentReports();
        if (res.status === 200) { setData(res.data.data) }
        else { setData([]) }
    }, [setData])

    useEffect(() => {
        getIncidents()
    }, [getIncidents])

    return (
        <div className='dashboard-body-2' id='dashboard-body-2-2'>
            <motion.div className='dashboard-mid-child dashboard-cont' id="dashboard-body-incident"
                animate={display ? offerAnimate.show : offerAnimate.hidden}>
                <HeaderCont2
                    arrow={display}
                    links={true}
                    click={click}
                    title={'Incidents'}
                />
                <div className='task-body'>
                    <div className='task-body-child task-body-scroll'
                        style={{ overflowY: display ? 'auto' : 'hidden' }}>
                        {data?.map(item => (
                            <Row item={item} />
                        ))}
                    </div>
                    <div onClick={click} className="voir-plus table-strip d-flex j-center a-center"
                        style={style4()}>
                        {!display ?
                            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Voir Plus</p> :
                            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Gestion de Qualite</p>
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function Row({ item }) {
    return (
        <div key={item.id} className="table-strip table-strip-2 d-flex j-bw a-f-end">
            <div>
                <div className={`d-flex ${item.orderMode !== "maritime" ? 'a-center' : ''}`}>
                    <p style={style1()} className="color-grey">N contenaire</p>
                    <img style={{ height: '11px', marginLeft: '4px' }} src={routeType(item.orderMode)} alt="" />
                </div>
                <p style={style2()}>{item.orderReference}</p>
            </div>
            <div>
                <p style={style1()} className="color-grey">Incident</p>
                <p style={style2()} className="color-orange">{item.incidentType}</p>
            </div>
            <p style={style3()} className='color-blue w-45'>Plus d'infos</p>
        </div>
    )
}

export default Incidents

