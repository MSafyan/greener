import './tasks.css'
import React, { useState, useCallback, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import { offerAnimation, offerAnimationTemp, offerStyle, taskDetailCount, tasksCard } from '../../../../data/atom'
import { motion, AnimatePresence } from 'framer-motion'
import Cards from './cards/cards'
import Offer from '../offer/offer'
import Instruction from '../instructions/instruction'
import Supplements from '../supplements/supplements'
import Commands from '../commands/commands'
import Confirmer from '../confirmer/confirmer'
import Api from '../../../../api/api'

function Tasks() {
    const tasksDisplay = useRecoilValue(tasksCard)
    const offerStyle_ = useRecoilValue(offerStyle)
    const offerAnimation_ = useRecoilValue(offerAnimation)
    const setTaskDetailCount = useSetRecoilState(taskDetailCount)
    const [offerAnimationTemp_, setOfferAnimationTemp] = useRecoilState(offerAnimationTemp);
    const [offerData, setOfferData] = useState([]);
    const [instructionData, setInstructionData] = useState([]);
    const [supplementData, setSupplementData] = useState([]);
    const [commandData, setCommandData] = useState([]);
    const [confirmerData, setConfirmerData] = useState([]);

    const getOffersData = useCallback(async () => {
        const offer = await Api.getTaskDetail("_Offers_To_Preaffect");
        if (offer.status === 200) {
            setOfferData(offer.data)
            setTaskDetailCount((obj) => ({ ...obj, offers: offer.data.length }))
        }
        else { setOfferData([]) }
    }, [setOfferData, setTaskDetailCount])

    const getInstructionData = useCallback(async () => {
        const instructions = await Api.getTaskDetail("_SIs_To_Send");
        if (instructions.status === 200) {
            setInstructionData(instructions.data)
            setTaskDetailCount((obj) => ({ ...obj, instructions: instructions.data.length }))
        }
        else { setInstructionData([]) }
    }, [setInstructionData, setTaskDetailCount])

    const getSupplementData = useCallback(async () => {
        const supplements = await Api.getTaskDetail("Supplements_to_approve");
        if (supplements.status === 200) {
            setSupplementData(supplements.data)
            setTaskDetailCount((obj) => ({ ...obj, supplements: supplements.data.length }))
        }
        else { setSupplementData([]) }
    }, [setSupplementData, setTaskDetailCount])

    const getCommandData = useCallback(async () => {
        const commands = await Api.getTaskDetail("_Orders_To_Trace");
        if (commands.status === 200) {
            setCommandData(commands.data)
            setTaskDetailCount((obj) => ({ ...obj, commands: commands.data.length }))
        }
        else { setCommandData([]) }
    }, [setCommandData, setTaskDetailCount])

    const getConfirmer = useCallback(async () => {
        const confirmer = await Api.getTaskDetail("_Deliveries_To_Confirm");
        if (confirmer.status === 200) {
            setConfirmerData(confirmer.data)
            setTaskDetailCount((obj) => ({ ...obj, confirmer: confirmer.data.length }))
        }
        else { setConfirmerData([]) }
    }, [setConfirmerData, setTaskDetailCount])

    useEffect(() => {
        getOffersData();
        getInstructionData();
        getSupplementData();
        getCommandData();
        getConfirmer();
    }, [getOffersData, getInstructionData, getConfirmer, getSupplementData, getCommandData])
    useEffect(() => {
        document.getElementById('dashboard-body-offer').style.position = 'initial';
        setOfferAnimationTemp(false);
    }, [setOfferAnimationTemp])

    const offerAnimate = {
        hidden: {
            transition: {
                duration: 0.3,
            }, height: offerStyle_, zIndex: 6,
            position: offerAnimationTemp_ ? 'fixed' : 'initial',
        },
        show: {
            transition: {
                duration: 0.3
            }, position: 'fixed',
            zIndex: 6, top: '30px', height: '90vh'
        }
    }
    return (
        <div className='dashboard-body-2' id='dashboard-body-1-1'>
            <motion.div
                className='dashboard-mid-child dashboard-cont' id="dashboard-body-offer"
                animate={offerAnimation_ ? offerAnimate.show : offerAnimate.hidden}
            >
                <AnimatePresence>
                    {tasksDisplay.main && <Cards />}
                    {tasksDisplay.card1 && <Offer offerData={offerData} />}
                    {tasksDisplay.card2 && <Instruction instructionData={instructionData} />}
                    {tasksDisplay.card3 && <Supplements supplementData={supplementData} />}
                    {tasksDisplay.card4 && <Commands commandData={commandData} />}
                    {tasksDisplay.card5 && <Confirmer confirmerData={confirmerData} />}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Tasks