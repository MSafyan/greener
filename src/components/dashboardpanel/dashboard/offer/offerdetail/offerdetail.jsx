import React from 'react'
import RowDetail from '../../rowdetail/rowdetail'
import Location2 from '../../location/location2'
import { style1 } from '../../../../../helper/style'
import { useState } from 'react'
import Location1 from '../../location/location1'

const style = { color: '#666666', marginBottom: '6px', fontSize: '13px', fontWeight: 500 }
function OfferDetail({ offerDetailData }) {
    return (
        <>
            <Top data={offerDetailData} />
            <div style={{ height: '15px' }}></div>
            <Rows data={offerDetailData} />
        </>
    )
}

function Top({ data }) {
    return (
        <>
            <p style={style}>Details de la commande</p>
            <div className="table-strip table-strip-1">
                {data.trajectory.length === 4 ?
                    <Location2 item={data.trajectory} /> :
                    <Location1 item={data.trajectory} />
                }
                <div className='d-flex a-center j-bw'>
                    <RowDetail title={"N Commande"} detail={data.orderReference} />
                    <RowDetail title={"Marchandise"} detail={data.commodity} />
                    <RowDetail title={"Categorie vehicule"} detail={data.category} />
                </div>
            </div>
        </>
    )
}

function Rows({ data }) {

    return (
        <>
            <p style={style}>Offres recues {data.orderReceivedOffers}</p>
            <div className="table-strip offer-detail-cont">
                <div className='offer-time'>
                    <p>temps restant {data.expiringAt.slice(0, 10)}</p>
                </div>
                {data.offers.map(item => (
                    <Offer item={item} />
                ))}
            </div>
        </>
    )
}

function Offer({ item }) {
    const [bg, setBg] = useState("");
    const [btnDisp, setBtnDisp] = useState(true);
    return (
        <div key={item.id} className={`offer-content ${bg} d-flex a-center j-bw`}>
            <RowDetail title={item.carrierName} detail={<><Star carrierRating={item.carrierRating} /><span className="color-grey" style={style1()}>{item.carrierTotalRatings}</span></>} />
            <RowDetail title={"Offre"} detail={`${item.price} ${item.currency}`} />
            {btnDisp ?
                <button
                    className='btn-card bg-blue'
                    onClick={() => {
                        setBg("offer-bg")
                        setBtnDisp(false)
                    }}
                >Pre-affecter</button> :
                <button
                    className='btn-card'
                    style={{ color: '#149ad7' }}
                    onClick={() => {
                        setBg("")
                        setBtnDisp(true)
                    }}
                >Annular</button>}
        </div>
    )
}

function Star({ carrierRating }) {
    return (
        <>
            {carrierRating === 5 ?
                <>
                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                </> : carrierRating === 4 ?
                    <>
                        <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                        <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                        <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                        <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                        <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                    </> : carrierRating === 3 ?
                        <>
                            <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                            <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                            <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                            <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                            <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                        </> : carrierRating === 2 ?
                            <>
                                <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                                <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                                <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                            </> : carrierRating === 1 ?
                                <>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "rgb(245 155 33 / 91%)" }}></i>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                </> : <>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                    <i className="fas fa-star" style={{ fontSize: '11px', marginLeft: '2px', color: "white" }}></i>
                                </>
            }
        </>
    )
}

export default OfferDetail