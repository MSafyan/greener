import React from 'react'
import HeaderCont from '../headercont/headercont'
import OfferDetail from './offerdetail/offerdetail'
import RowDetail from '../rowdetail/rowdetail'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { offerAnimation, offerDetail, offerStyle, taskDetailCount } from '../../../../data/atom'
import { style2, style3 } from '../../../../helper/style'
import Api from '../../../../api/api'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { taskAnimate } from '../../../../helper/animations'


function Offer({ offerData }) {
    const taskDetailsCount = useRecoilValue(taskDetailCount)
    const setOfferStyle = useSetRecoilState(offerStyle)
    const setOfferAnimation = useSetRecoilState(offerAnimation)
    const [offer_Detail, setOfferDetail] = useRecoilState(offerDetail);
    const [offerDetailData, setOfferDetailData] = useState([]);
    const click = () => {
        let overlay = document.getElementById("dashboard-overlay");
        let parent = document.getElementById("dashboard-body-1-1");
        let child = document.getElementById("dashboard-body-offer");
        overlay.style.display = "block";
        child.style.left = parent.offsetLeft + 50 + "px"
        child.style.width = parent.offsetWidth + "px"
        setOfferStyle(parent.offsetHeight + "px")
        setOfferDetail(true);
        setOfferAnimation(true);
    }

    const offerDetailHandle = async (id) => {
        const res = await Api.getOfferDetail(id);
        if (res.status === 200) {
            setOfferDetailData(res.data);
            click();
        }
    }

    return (
        <>
            <HeaderCont
                arrow={true}
                links={false}
                title={
                    <p className='dashboard-head-title'>Offers a pre-affecter <span className='color-grey'>{taskDetailsCount.offers}</span></p>
                }
            />
            <motion.div
                variants={taskAnimate}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='task-body task-body-scroll' style={{ overflowY: 'auto' }}>
                {!offer_Detail ?
                    <>
                        {offerData.map(item => (
                            <div key={item.id} className="table-strip table-strip-2 d-flex j-bw a-f-end">
                                <RowDetail title={"N commande"} detail={item.orderReference} />
                                <div>
                                    <p style={style2()}><span className="color-blue">{item.orderReceivedOffers}</span> Offres recues</p>
                                    <p style={style2()}><span className="color-green">{item.orderPreaffectedOffers}</span> pre-affectes</p>
                                </div>
                                <p style={style3()} onClick={() => offerDetailHandle(item.id)} className='color-blue'>Voir details</p>
                            </div>
                        ))}
                    </> : <OfferDetail offerDetailData={offerDetailData} />}
            </motion.div>
        </>
    )
}

export default Offer