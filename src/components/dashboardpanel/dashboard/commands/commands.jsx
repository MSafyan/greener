import React from 'react'
import HeaderCont from '../headercont/headercont'
import tick from '../../../../assets/images/tick.png'
import { style1 } from '../../../../helper/style'
import RowDetail from '../rowdetail/rowdetail'
import Location2 from '../location/location2'
import { taskDetailCount } from '../../../../data/atom'
import { useRecoilValue } from 'recoil'
import { motion } from 'framer-motion'
import { taskAnimate } from '../../../../helper/animations'
import Location1 from '../location/location1'
import brand from '../../../../assets/images/card-brand.png';
import tick2 from '../../../../assets/images/tick2.png';

function Commands({ commandData }) {
    const taskDetailsCount = useRecoilValue(taskDetailCount)
    return (
        <>
            <HeaderCont
                arrow={true}
                links={false}
                title={
                    <p className='dashboard-head-title'>Commandes a tracer <span className='color-grey'>{taskDetailsCount.commands}</span></p>
                }
            />
            <motion.div
                variants={taskAnimate}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='task-body task-body-scroll' style={{ overflowY: 'auto' }}>
                {commandData.map(item => (
                    <Row item={item} />
                ))}
            </motion.div>
        </>
    )
}

function Row({ item }) {
    const filterData = (id) => {
        // let arr = data.filter(item1 => id !== item1.id)
        // data = [...arr];
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
                > Inserez le code tracker de cette commande puis cliquez sur <img src={tick2} style={{width:'14px'}} alt=".." /> pour la valider</p>
                <div className='command-btn'>N enregistreur
                    <p onClick={() => filterData(item.id)}><img src={tick} alt="" /></p>
                </div>
            </div>
        </div>
    )
}

export default Commands