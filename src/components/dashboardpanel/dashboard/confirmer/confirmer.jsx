import React from 'react'
import HeaderCont from '../headercont/headercont'
import pin from '../../../../assets/images/pin.png'
import tick from '../../../../assets/images/tick.png'
import { useState } from 'react'
import { style1 } from '../../../../helper/style'
import RowDetail from '../rowdetail/rowdetail'
import Location2 from '../location/location2'
import { taskDetailCount } from '../../../../data/atom'
import { useRecoilValue } from 'recoil'
import { taskAnimate } from '../../../../helper/animations'
import { motion } from 'framer-motion'
import Location1 from '../location/location1'
import brand from '../../../../assets/images/card-brand.png';
import tick2 from '../../../../assets/images/tick2.png';

function Confirmer({ confirmerData }) {
    const taskDetailsCount = useRecoilValue(taskDetailCount)

    return (
        <>
            <HeaderCont
                arrow={true}
                links={false}
                title={
                    <p className='dashboard-head-title'>Livraisons a confirmer <span className='color-grey'>{taskDetailsCount.confirmer}</span></p>
                }
            />
            <motion.div
                variants={taskAnimate}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='task-body task-body-scroll' style={{ overflowY: 'auto' }}>
                {confirmerData.map(item => (
                    <Row item={item} />
                ))}
            </motion.div>
        </>
    )
}

function Row({ item }) {
    const [image, setImage] = useState(pin);
    const [bgColor, setBgColor] = useState("#149ad7");
    const [text, setText] = useState("le fitche de tracabilitie");
    const submit = () => {
        setImage(tick)
        setBgColor('#000000')
        setText('filename.type')
    }

    return (
        <div className="table-strip table-strip-1">
            <div className="brand-logo"><img src={brand} alt="brand" /></div>
            {item.trajectory.length === 4 ?
                <Location2 item={item.trajectory} /> :
                <Location1 item={item.trajectory} />
            }
            <div className='d-flex a-center j-bw'>
                <RowDetail title={"N Bookings"} detail={item.bookingReference} />
                <RowDetail title={"N Commande"} detail={item.orderReference} />
                <RowDetail title={"Date Depart"} detail={<>{item.vesselDepartureWeek} <span className="color-grey" style={style1()}>({item.vesselDepartureDate.slice(0, 10)})</span></>} />
                <RowDetail title={"Navire"} detail={item.vesselName} />
            </div>
            <div
                style={{ textAlign: 'end', marginTop: '8px' }}
                className="d-flex a-center  j-bw"
            >
                <p
                    style={{ fontSize: '12px', textAlign: 'start', width: '250px' }}
                    className="color-grey"
                > Importez le le fitche de tracabilitie cette commande puis cliquez sur <img src={tick2} style={{witdh:'14px'}} alt=".." /> pour la valider</p>
                <div onClick={submit} className='command-btn'>{text}
                    <p style={{ background: bgColor }}><img src={image} alt="" /></p>
                </div>
            </div>
        </div>
    )
}

export default Confirmer