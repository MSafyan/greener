import React from 'react'
import HeaderCont from '../headercont/headercont'
import { style1 } from '../../../../helper/style'
import RowDetail from '../rowdetail/rowdetail'
import Location2 from '../location/location2'
import Location1 from '../location/location1'
import { useRecoilState, useRecoilValue } from "recoil";
import { taskDetailCount, toggleInstructionModel } from "../../../../data/atom";
import { motion } from "framer-motion";
import { taskAnimate } from '../../../../helper/animations'
import brand from '../../../../assets/images/card-brand.png';

function Instruction({ instructionData }) {
    const taskDetailsCount = useRecoilValue(taskDetailCount)

    return (
        <>
            <HeaderCont
                arrow={true}
                links={false}
                title={
                    <p className='dashboard-head-title'>Intsructions Documetaries a soumettre <span className='color-grey'>{taskDetailsCount.instructions}</span></p>
                }
            />
            <motion.div
                variants={taskAnimate}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='task-body task-body-scroll' style={{ overflowY: 'auto' }}>
                {instructionData.map(item => (
                    <Row item={item} />
                ))}
            </motion.div>
        </>
    )
}

function Row({ item }) {
    let [/*toggleDisplay*/, setTogleDisplay] = useRecoilState(toggleInstructionModel);
    function changeState() {
        setTogleDisplay('insModelWrapper');
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
            <div style={{ textAlign: 'end', marginTop: '8px' }}>
                <button className='btn-card bg-blue' onClick={changeState}>Soumettre S.I</button>
            </div>
        </div>
    )
}


export default Instruction