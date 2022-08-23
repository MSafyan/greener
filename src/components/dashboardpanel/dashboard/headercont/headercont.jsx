import React, { useState } from 'react'
import arrowLeft from '../../../../assets/images/arrow_left.png'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { offerAnimation, offerAnimationTemp, offerDetail, tasksCard } from '../../../../data/atom';

function HeaderCont({ links, title, arrow }) {
  const [offerAnimation_, setOfferAnimation] = useRecoilState(offerAnimation)
  const setCardDisplay = useSetRecoilState(tasksCard);
  const setOfferDetail = useSetRecoilState(offerDetail);
  const setOfferAnimationTemp = useSetRecoilState(offerAnimationTemp);
  const mainShow = () => {
    setCardDisplay(obj => ({
      main: true,
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      card5: false
    }))
  }
  const click = () => {
    let overlay = document.getElementById("dashboard-overlay");
    if (!offerAnimation_) {
      mainShow();
    } else {
      setOfferAnimation(false);
      setOfferAnimationTemp(true)
      setOfferDetail(false);
      if (offerAnimation_) {
        setTimeout(() => {
          overlay.style.display = "none";
          setOfferAnimationTemp(false)
        }, 300);
      }
    }
  }

  return (
    <div className='dashboard-head'>
      <div className='d-flex a-center'>
        {arrow && <img src={arrowLeft} alt="arrow left" onClick={click} />}
        {title}
      </div>
      {links && <div className='dashboard-links'><Links /></div>}
    </div>
  )
}


const Links = () => {
  const [style, setStyle] = useState({ link1: 'active', link2: '', link3: '', link4: '' })
  const styleHandle = (key) => {
    switch (key) {
      case 1:
        setStyle({ link1: 'active', link2: '', link3: '', link4: '' })
        break;
      case 2:
        setStyle({ link1: '', link2: 'active', link3: '', link4: '' })
        break;
      case 3:
        setStyle({ link1: '', link2: '', link3: 'active', link4: '' })
        break;
      case 4:
        setStyle({ link1: '', link2: '', link3: '', link4: 'active' })
        break;
      default:
        break;
    }
  }
  return (
    <>
      <p className={style.link1} onClick={() => styleHandle(1)}>Tous modes</p>
      <p className={style.link2} onClick={() => styleHandle(2)}>Maritime</p>
      <p className={style.link3} onClick={() => styleHandle(3)}>Routier</p>
      <p className={style.link4} onClick={() => styleHandle(4)}>Aerien</p>
    </>
  )
}

export default HeaderCont