import React from 'react';
import money from '../../../assets/images/money.png';
import Chargeur from './popups/chargeur';

const sideDrawerExplore = ({ chargement }) => {
	return (
		<div className='sidebar_explore'>
			<div className='bg-card'>
				<div className='head_sidebar_explore'>
					{/* <div> */}
					<p className='fs-13 text-center'>Prix négocié</p>
					<div className='d-flex'>
						<p className='fs-30'>{chargement.price} $</p>
						<div className='icon-wrapper-25 px-1 d-inline m-auto'>
							<img src='eye.png' width='100%' alt='' />
						</div>
					</div>
					<div className='img_sidebar_explore '>
						<img src={money} height='100%' width='100%' alt='money' />
					</div>
					{/* </div> */}
				</div>
				<div className='body_sidebar_explore'>
					{Object.keys(chargement).map((_, i) => {
						var key = _;
						var icon = null;
						if (_ === 'chargeurId' || _ === 'price') return null;
						if (_ === 'chargeurId') key = '_FT_Code_Unloading';
						if (_ === 'typeService') key = 'Type Service';
						if (_ === 'typeAssurance') key = 'Type Assurance';
						if (_ === 'orderBillingEntityName') {
							key = 'Entité facturée';
							icon = <Chargeur />;
						}
						return (
							<div className='body_item_explore py-2' key={i}>
								<p className='fs-13 lc'>{key}</p>
								<div className={'d-flex'}>
									<p className='fs-16'>{chargement[_]}</p>
									{icon && icon}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default sideDrawerExplore;
