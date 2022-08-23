import React from 'react'
import { useRecoilValue } from 'recoil'
import { taskDetailCount } from '../../../../../data/atom'
import { taskAnimate } from '../../../../../helper/animations'
import { motion } from 'framer-motion'
import HeaderCont from '../../headercont/headercont'
import Card from './card/card'

function Cards() {
    const taskDetailsCount = useRecoilValue(taskDetailCount)
    return (
        <>
            <HeaderCont
                arrow={false}
                links={true}
                title={
                    <p className='dashboard-head-title'>Tâches</p>
                }
            />
            <motion.div
                variants={taskAnimate}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='task-body d-flex'>
                <Card number={taskDetailsCount.offers} text="Offers a pre-affecter" />
                <div style={{ width: '15px' }}></div>
                <div className='card-cont'>
                    <div className='d-flex card-2'>
                        <Card number={taskDetailsCount.instructions} text="Intsructions Documetaries a soumettre" />
                        <div style={{ width: '15px' }}></div>
                        <Card number={taskDetailsCount.supplements} text="Supplements a approuver" />
                    </div>
                    <div style={{ height: '15px' }}></div>
                    <div className='d-flex card-2'>
                        <Card number={taskDetailsCount.commands} text="Commandes a tracer" />
                        <div style={{ width: '15px' }}></div>
                        <Card number={taskDetailsCount.confirmer} text="Livraisons a confirmer" />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Cards