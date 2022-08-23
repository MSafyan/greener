import React, { useState } from 'react'
import HeaderCont from '../headercont/headercont'
import RowDetail from '../rowdetail/rowdetail'
import { style1, style2 } from '../../../../helper/style'
import Location2 from '../location/location2'
import { taskDetailCount } from '../../../../data/atom'
import { useRecoilValue } from 'recoil'
import { taskAnimate } from '../../../../helper/animations'
import { motion } from 'framer-motion'
import Location1 from '../location/location1'

function Supplements({ supplementData }) {
    const taskDetailsCount = useRecoilValue(taskDetailCount)

    return (
        <>
            <HeaderCont
                arrow={true}
                links={false}
                title={
                    <p className='dashboard-head-title'>Supplements a approuver <span className='color-grey'>{taskDetailsCount.supplements}</span></p>
                }
            />
            <motion.div
                variants={taskAnimate}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='task-body task-body-scroll' style={{ overflowY: 'auto' }}>
                {supplementData.map(item => (
                    <Row item={item} />
                ))}
            </motion.div>
        </>
    )
}

function Row({ item }) {
    return (
        <div className="table-strip table-strip-2">
            <p
                style={{ fontSize: '12px', margin: "0 0 5px 0" }}
                className="color-grey">{item.status}</p>
            {item.trajectory.length === 4 ?
                <Location2 item={item.trajectory} /> :
                <Location1 item={item.trajectory} />
            }
            <div className='d-flex a-center j-bw' style={{ marginBottom: '5px' }}>
                <p style={style1()} className="color-grey">{item.orderReference}</p>
                <p style={style1()} className="color-grey">{item.carrierName}</p>
            </div>
            <div className='d-flex a-center j-bw' style={{ marginBottom: '5px' }}>
                <RowDetail title={item.supplementReason} detail={item.supplementObject} />
                <RowDetail title={"de"} detail={item.oldValue} />
                <RowDetail title={"a"} detail={item.newValue} />
            </div>
            <div className='d-flex a-center j-bw' style={{ marginBottom: '5px' }}>
                <RowDetail title={"Montant Initial"} detail={`${item.orderPrice} ${item.currency}`} />
                <RowDetail title={"Supplement"} detail={`${item.supplementPrice} ${item.currency}`} />
            </div>
            <Btn />
        </div>
    )
}

function Btn() {
    const [disp, setDisp] = useState(true);
    return (
        <>
            {
                !disp ?
                    <>
                        <p style={style2()}>Etes-vous sur de vouloir refuser ce supplement?</p>
                        <div style={style2()} className="d-flex a-center">
                            <p
                                onClick={() => setDisp(true)}
                                className='color-red'
                                style={{ margin: '0 15px 0 0' }}>Non-Retourner</p>
                            <p
                                onClick={() => setDisp(true)}
                                className='color-blue'>Oui, Refuser</p>
                        </div>
                    </> :
                    <>
                        <div className='d-flex a-center j-bw'>
                            <div>
                                <button
                                    onClick={() => setDisp(false)}
                                    className='btn-card bg-red'
                                    style={{ margin: '0 15px 0 0' }}>Refuser</button>
                                <button
                                    onClick={() => setDisp(false)}
                                    className='btn-card bg-green'>Accepter</button>
                            </div>
                            <p onClick={() => setDisp(false)}
                                className='color-red'
                                style={style1()}>Anuler</p>
                        </div>
                    </>
            }
        </>
    )
}

export default Supplements