import React, { useState, useEffect } from 'react';
import './instruction_model.css';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { DataGrid } from '@mui/x-data-grid';
import { Form, Button } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import InputGroup from 'react-bootstrap/InputGroup';
import { toggleInstructionModel } from '../../../../../data/atom';
import { taskAnimate } from '../../../../../helper/animations';
import icon from '../../../../../assets/images/return-icon.png';
import line from '../../../../../assets/images/lineForm.png';
import uploader from '../../../../../assets/images/uploader.png';

function InstructionModel() {
	const columns = [
		{ field: 'contenuer', headerName: 'N Contenuer', minWidth: 80 },
		{ field: 'type', headerName: 'Type', minWidth: 40 },
		{ field: 'commodity', headerName: 'Commodité', minWidth: 140 },
		{ field: 'numberD', headerName: "Nombre d'emballage", minWidth: 125 },
		{ field: 'typeD', headerName: "Type d'emballage", minWidth: 125 },
		{ field: 'palette', headerName: 'Poids', minWidth: 60 },
		{ field: 'dangerous', headerName: 'Dangereux', minWidth: 60 },
		{ field: 'guage', headerName: 'Out of Gauge', minWidth: 60 },
		{ field: 'seals', headerName: 'Seals', minWidth: 60 },
		{ field: 'cargo', headerName: 'Cargo description', minWidth: 150 },
		{ field: 'remarks', headerName: 'Remarks', minWidth: 150 },
	];

	const data = [
		{
			id: 1,
			contenuer: 'CMAU97939',
			type: 'FRIG0',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
		{
			id: 2,
			contenuer: 'CMAU97939',
			type: 'FRIG',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
		{
			id: 3,
			contenuer: 'CMAU97939',
			type: 'FRI0',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
		{
			id: 4,
			contenuer: 'CMAU97939',
			type: 'FRG0',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
		{
			id: 5,
			contenuer: 'CMAU97939',
			type: 'FIG0',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
		{
			id: 6,
			contenuer: 'CMAU97939',
			type: 'FRIG0',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
		{
			id: 7,
			contenuer: 'CMAU97939',
			type: 'FRIG0',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
		{
			id: 8,
			contenuer: 'CMAU97939',
			type: 'FRIG0',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
		{
			id: 9,
			contenuer: 'CMAU97939',
			type: 'FRIG0',
			commodity: 'Tomates cerises',
			numberD: 50,
			typeD: 'Palette',
			palette: 16,
			dangerous: 'Non',
			guage: 'Oui',
			seals: '896RE 878',
			cargo: 'lorem ipsum isit',
			remarks: 'lorem ipsum isit',
		},
	];

	const [count, setCount] = useState(0);
	let [buttonStyle, setButtonStyle] = useState('insModelButtonStyle1');
	let [child1_1Style, setChild1_1Style] = useState('insModelChild1-1Style1');
	let [child1_2Style, setChild1_2Style] = useState('insModelChild1-2Style1');
	let [child2_1Style, setChild2_1Style] = useState('insChild2-1Style1');
	let [child2_2Style, setChild2_2Style] = useState('insChild2-2Style1');
	let [menuLevel1, setMenuLevel1] = useState('multiLevel1Hide'); // to toggle multiLevel1Show
	let [menuLevel2, setMenuLevel2] = useState('multiLevel2Hide'); // to toggle multiLevel1Show
	let [validerButton, setValiderButton] = useState('hide');
	let [togleDisplay, setTogleDisplay] = useRecoilState(toggleInstructionModel);
	let [toggleOutOfGauge, setToggleOutOfGauge] = useState('hide');
	let [animate, setAnimate] = useState('');
	let [upd, setUpd] = useState('uploaderStyle1');

	function ToggleOutOfGaugeMenu() {
		if (toggleOutOfGauge === 'hide') {
			setToggleOutOfGauge('show');
		} else {
			setToggleOutOfGauge('hide');
		}
	}

	function setStyle1() {
		setButtonStyle('insModelButtonStyle1');
		setChild1_1Style('insModelChild1-1Style1');
		setChild1_2Style('insModelChild1-2Style1');
		setChild2_1Style('insChild2-1Style1');
		setChild2_2Style('insChild2-2Style1');
		setMenuLevel1('multiLevel1Hide');
		setValiderButton('hide');
		setToggleOutOfGauge('hide');
		setUpd('uploaderStyle1');
	}

	function setStyle2() {
		if (buttonStyle === 'insModelButtonStyle2') {
			setButtonStyle('insModelButtonStyle1');
			setChild1_1Style('insModelChild1-1Style1');
			setChild1_2Style('insModelChild1-2Style1');
			setChild2_1Style('insChild2-1Style1');
			setChild2_2Style('insChild2-2Style1');
			setMenuLevel1('multiLevel1Hide');
			setValiderButton('hide');
			setToggleOutOfGauge('hide');
			setUpd('uploaderStyle1');
		} else {
			setChild1_2Style('insModelChild1-2Style2');
			setButtonStyle('insModelButtonStyle2');
			setChild2_1Style('insChild2-1Style2');
			setChild2_2Style('insChild2-2Style2');
			setMenuLevel1('multiLevel1Show');
			setValiderButton('show');
			setUpd('uploaderStyle2');
		}
	}

	function setStyle3() {
		if (buttonStyle === 'insModelButtonStyle3') {
			setButtonStyle('insModelButtonStyle2');
			setChild1_1Style('insModelChild1-1Style1');
			setChild1_2Style('insModelChild1-2Style2');
			setChild2_1Style('insChild2-1Style2');
			setChild2_2Style('insChild2-2Style2');
			setMenuLevel1('multiLevel1Show');
			setValiderButton('show');
			setMenuLevel2('multiLevel2Hide');
			setUpd('uploaderStyle2');
		} else {
			setChild1_2Style('insModelChild1-2Style3');
			setButtonStyle('insModelButtonStyle3');
			setChild2_1Style('insChild2-1Style3');
			setChild2_2Style('insChild2-2Style3');
			setMenuLevel1('multiLevel1Show');
			setValiderButton('show');
			setMenuLevel2('multiLevel2Show');
			setUpd('uploaderStyle3');
		}
	}

	function setStyle4() {
		setButtonStyle('insModelButtonStyle4');
		setChild1_1Style('insModelChild1-1Style4');
		setChild1_2Style('insModelChild1-2Style4');
		setChild2_1Style('insChild2-1Style4');
		setChild2_2Style('insChild2-2Style4');
		setMenuLevel1('multiLevel1Hide');
		setValiderButton('hide');
		setAnimate('animate__fadeOut');
		setUpd('uploaderStyle4');
		setTimeout(() => {
			setAnimate('animate__fadeIn');
		}, 900);
	}

	function backHandler() {
		if (buttonStyle === 'insModelButtonStyle1') {
			setTogleDisplay('insModelWrapperHide');
			setButtonStyle('insModelButtonStyle1');
			setChild1_1Style('insModelChild1-1Style1');
			setChild1_2Style('insModelChild1-2Style1');
			setChild2_1Style('insChild2-1Style1');
			setChild2_2Style('insChild2-2Style1');
			setMenuLevel1('multiLevel1Hide');
			setToggleOutOfGauge('hide');
			setUpd('uploaderStyle1');
		}
		if (buttonStyle === 'insModelButtonStyle2') {
			setButtonStyle('insModelButtonStyle1');
			setChild1_1Style('insModelChild1-1Style1');
			setChild1_2Style('insModelChild1-2Style1');
			setChild2_1Style('insChild2-1Style1');
			setChild2_2Style('insChild2-2Style1');
			setMenuLevel1('multiLevel1Hide');
			setValiderButton('hide');
			setToggleOutOfGauge('hide');
			setUpd('uploaderStyle2');
		}
		if (buttonStyle === 'insModelButtonStyle3') {
			setButtonStyle('insModelButtonStyle2');
			setChild1_1Style('insModelChild1-1Style1');
			setChild1_2Style('insModelChild1-2Style2');
			setChild2_1Style('insChild2-1Style2');
			setChild2_2Style('insChild2-2Style2');
			setMenuLevel1('multiLevel1Show');
			setValiderButton('show');
			setMenuLevel2('multiLevel2Hide');
			setUpd('uploaderStyle3');
		}
		if (buttonStyle === 'insModelButtonStyle4') {
			setButtonStyle('insModelButtonStyle1');
			setChild1_1Style('insModelChild1-1Style1');
			setChild1_2Style('insModelChild1-2Style1');
			setChild2_1Style('insChild2-1Style1');
			setChild2_2Style('insChild2-2Style1');
			setMenuLevel1('multiLevel1Hide');
			setValiderButton('hide');
			setUpd('uploaderStyle4');
			setToggleOutOfGauge('hide');

			setTogleDisplay('insModelWrapperHide');
		}
	}
	useEffect(() => {
		setAnimate('');
	}, []);

	return (
		<div className={togleDisplay}>
			{/*Model Button*/}
			<div className={buttonStyle} onClick={backHandler}>
				<p
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '35px',
					}}
					className={'text-center'}
				>
					<img src={icon} alt='return icon' />
				</p>
			</div>

			<AnimatePresence>
				{/*Model Layout*/}
				{togleDisplay === 'insModelWrapper' && (
					<motion.div
						variants={taskAnimate}
						initial='hidden'
						animate='show'
						exit='hidden'
						className={'isnModeParent1'}
					>
						<div
							className={`${child1_1Style} animate__animated animate__fadeIn`}
						>
							<div className={'patch'}>
								<p className={'text-center'}>
									<i className='fa-solid fa-check'></i> Patch 1
								</p>
								<p className={'text-center'}>Crée avec succès</p>
							</div>
						</div>
						<motion.div
							animate={{
								width:
									buttonStyle === 'insModelButtonStyle1'
										? '57%'
										: buttonStyle === 'insModelButtonStyle2'
										? '76%'
										: '100%',
								transition: {
									duration: 0.4,
								},
							}}
							className={`${child1_2Style} animate__animated ${animate}`}
						>
							<div className={'insParent2'}>
								<div className={child2_1Style}>
									<p>
										<Link to={'#'}>Besoin d'assistance ?</Link>
									</p>
									<p className={'child2-1Head'}>
										Sélectionner les conteneurs pour votre Instructions
										documentaires
									</p>
									<p>
										1. Sélectionnez les conteneurs pour lesquels vous souhaitez
										créer le même instructions documentaires
									</p>

									<div className={upd}>
										<div className={'d-flex'}>
											<h6 style={{ marginTop: '10%' }}>Ou</h6>
											<p style={{ marginTop: '10%', paddingLeft: '3%' }}>
												<img style={{ width: '88%' }} src={line} alt='' />
											</p>
										</div>
										<p className={'child2-1Head'}>
											Uploader les listes de colisages et votre S.I sera crée
											dans quelques secondes
										</p>
										<img
											style={{ marginTop: '5%', width: '50%', height: '8%' }}
											src={uploader}
											alt=''
										/>
									</div>

									<div
										className={`${menuLevel1} animate__animated animate__fadeInRight`}
									>
										<div className={'d-flex'}>
											<Form.Group controlId='formBasicPassword'>
												<Form.Label className={'insInputLabels'}>
													Consignee
												</Form.Label>
												<Form.Control type='text' placeholder='' />
											</Form.Group>
											<Form.Group
												style={{ marginLeft: '2%' }}
												controlId='formBasicPassword'
											>
												<Form.Label className={'insInputLabels'}>
													Notify
												</Form.Label>
												<Form.Control type='text' placeholder='' />
											</Form.Group>
										</div>
										<div className={'d-flex'}>
											<Form.Group controlId='formBasicPassword'>
												<Form.Label className={'insInputLabels'}>
													Nombre d'emballage
												</Form.Label>
												<Form.Control type='text' placeholder='' />
											</Form.Group>
											<Form.Group
												style={{ marginLeft: '2%' }}
												controlId='formBasicPassword'
											>
												<Form.Label className={'insInputLabels'}>
													Type d'emballage
												</Form.Label>
												<Form.Control type='text' placeholder='' />
											</Form.Group>
										</div>
										<div className={'d-flex mb-2'}>
											<Form.Group controlId='formBasicPassword'>
												<Form.Label className={'insInputLabels'}>
													Poids / Palette
												</Form.Label>
												<Form.Control type='text' placeholder='' />
											</Form.Group>
											<Form.Group
												style={{ marginLeft: '2%' }}
												controlId='formBasicPassword'
											>
												<Form.Label className={'insInputLabels'}>
													Dangereux
												</Form.Label>
												<br />
												<BootstrapSwitchButton
													onlabel={'Oui'}
													offlabel={'Non'}
													onstyle='success'
													offstyle='danger'
												/>
											</Form.Group>
										</div>
										<div className={'d-flex mb-2'}>
											<Form.Group
												style={{
													display: 'flex',
													flexDirection: 'column',
													width: '30%',
													marginTop: '5px',
												}}
												className='mb-3 '
												controlId='formBasicPassword'
												onClick={ToggleOutOfGaugeMenu}
											>
												<Form.Label className={'insInputLabels'}>
													Out of Gauge
												</Form.Label>
												<BootstrapSwitchButton
													onlabel={'Oui'}
													offlabel={'Non'}
													onstyle='success'
													offstyle='danger'
												/>
											</Form.Group>
											<div className={toggleOutOfGauge}>
												<Form.Group
													style={{ marginLeft: '4%' }}
													controlId='formBasicPassword'
												>
													<Form.Label
														className={'insInputLabels'}
														style={{ opacity: 0 }}
													>
														.
													</Form.Label>
													<Form.Control type='text' placeholder='overHeight' />
												</Form.Group>
											</div>
										</div>
										<div className={'d-flex mb-3'}>
											<div className={toggleOutOfGauge}>
												<Form.Group
													style={{ marginLeft: '2%' }}
													controlId='formBasicPassword'
												>
													<Form.Control
														type='text'
														placeholder='overLengthFront'
													/>
												</Form.Group>
											</div>
											<div className={toggleOutOfGauge}>
												<Form.Group
													style={{ marginLeft: '2%' }}
													controlId='formBasicPassword'
												>
													<Form.Control
														type='text'
														placeholder='overLengthRear'
													/>
												</Form.Group>
											</div>
										</div>
										<div className={'d-flex mb-2'}>
											<div className={toggleOutOfGauge}>
												<Form.Group
													style={{ marginLeft: '2%' }}
													controlId='formBasicPassword'
												>
													<Form.Control
														type='text'
														placeholder='overWifthLength'
													/>
												</Form.Group>
											</div>
											<div className={toggleOutOfGauge}>
												<Form.Group
													style={{ marginLeft: '2%' }}
													controlId='formBasicPassword'
												>
													<Form.Control
														type='text'
														placeholder='overWidthHeight'
													/>
												</Form.Group>
											</div>
										</div>
										<Form.Group
											style={{ marginLeft: '0' }}
											controlId='formBasicPassword'
										>
											<Form.Label
												onClick={setStyle3}
												className={'insInputLabels'}
												style={{ color: 'blue', cursor: 'pointer' }}
											>
												Détails Avancés{' '}
												<span className={'fas fa-arrow-down'}></span>
											</Form.Label>
										</Form.Group>
										<Form.Group
											style={{ marginLeft: '0' }}
											controlId='formBasicPassword'
										>
											<Form.Control
												type='text'
												placeholder=''
												style={{ opacity: '0' }}
											/>
										</Form.Group>

										<div className={menuLevel2}>
											<InputGroup className='mb-3'>
												<DropdownButton
													variant='dark'
													title='Seal Type'
													id='input-group-dropdown-1'
												>
													<Dropdown.Item href='#'>Shipper</Dropdown.Item>
													<Dropdown.Item href='#'>Custom</Dropdown.Item>
													<Dropdown.Item href='#'>
														Terminal Operator
													</Dropdown.Item>
													<Dropdown.Item href='#'>Carrier</Dropdown.Item>
													<Dropdown.Item href='#'>
														Quartine agency
													</Dropdown.Item>
												</DropdownButton>
												<Form.Control aria-label='Text input with dropdown button' />
											</InputGroup>

											<InputGroup className='mb-3'>
												<DropdownButton
													variant='dark'
													title='Seal Type'
													id='input-group-dropdown-1'
												>
													<Dropdown.Item href='#'>Shipper</Dropdown.Item>
													<Dropdown.Item href='#'>Custom</Dropdown.Item>
													<Dropdown.Item href='#'>
														Terminal Operator
													</Dropdown.Item>
													<Dropdown.Item href='#'>Carrier</Dropdown.Item>
													<Dropdown.Item href='#'>
														Quartine agency
													</Dropdown.Item>
												</DropdownButton>
												<Form.Control aria-label='Text input with dropdown button' />
											</InputGroup>
											<Form.Group
												className='mb-3'
												controlId='formBasicPassword'
											>
												<Form.Label className={'insInputLabels'}>
													Cargo desscription
												</Form.Label>
												<Form.Control type='text' placeholder='' />
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicPassword'
											>
												<Form.Label className={'insInputLabels'}>
													Remarks
												</Form.Label>
												<Form.Control type='text' placeholder='' />
											</Form.Group>
										</div>
									</div>
									<Button
										onClick={setStyle4}
										className={`${validerButton} animate__animated animate__fadeIn`}
										style={{ width: '100%', marginTop: '5%' }}
										variant='success'
									>
										Valider
									</Button>
								</div>
								<div className={child2_2Style} id='get-height'>
									<p className={'child2-2Main'} onClick={setStyle2}>
										Sélectionner tous les conteneurs{' '}
										<span className={'child2-2MainSpan'}>
											{' '}
											( {count} Sélectionnés)
										</span>
									</p>
									<div
										className={'child2-2DataTable'}
										style={{ height: '480px' }}
									>
										{/* <MUIDataTable
                                        title={""}
                                        data={data}
                                        columns={columns}
                                        options={options}
                                    /> */}
										<DataGrid
											rows={data}
											columns={columns}
											pageSize={6}
											checkboxSelection
											onSelectionModelChange={(itm) => {
												setCount(itm.length);
												if (itm.length > 0) {
													setChild1_2Style('insModelChild1-2Style2');
													setButtonStyle('insModelButtonStyle2');
													setChild2_1Style('insChild2-1Style2');
													setChild2_2Style('insChild2-2Style2');
													setMenuLevel1('multiLevel1Show');
													setValiderButton('show');
													setUpd('uploaderStyle2');
												} else {
													setStyle1();
												}
											}}
										/>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default InstructionModel;
