import React  from 'react'
import { useSetRecoilState } from 'recoil'
import { tasksCard } from '../../../../../../data/atom';

function Card({ number, text }) {
    const setCardDisplay = useSetRecoilState(tasksCard);
    const showHandle = () => {
        if (text.includes("Offers")) {
            setCardDisplay(obj => ({
                main: false,
                card1: true,
                card2: false,
                card3: false,
                card4: false,
                card5: false
            }))
        } else if (text.includes("Intsructions")) {
            setCardDisplay(obj => ({
                main: false,
                card1: false,
                card2: true,
                card3: false,
                card4: false,
                card5: false
            }))
        } else if (text.includes("Supplements")) {
            setCardDisplay(obj => ({
                main: false,
                card1: false,
                card2: false,
                card3: true,
                card4: false,
                card5: false
            }))
        } else if (text.includes("Commandes")) {
            setCardDisplay(obj => ({
                main: false,
                card1: false,
                card2: false,
                card3: false,
                card4: true,
                card5: false
            }))
        } else if (text.includes("Livraisons")) {
            setCardDisplay(obj => ({
                main: false,
                card1: false,
                card2: false,
                card3: false,
                card4: false,
                card5: true
            }))
        }
    }
    return (
        <div
            className={`card-wrapper card-wrapper1`}
            onClick={showHandle}
        >
            {/* <img src={path} alt="" /> */}
            <div className="card-bgColor">
                <div className='card-1'>
                    <p className={`card-number`}>{number}</p>
                    <p className='card-text'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card