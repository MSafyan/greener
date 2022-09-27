import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { connect } from 'react-redux';

const variant = 'Light';
function BasicExample({ sub = [] }) {
	return (
		<DropdownButton
			as={ButtonGroup}
			id={`dropdown-variants-${variant}`}
			variant='light'
			title='Jour'
			// className='btn '
		>
			{Object.keys(sub).map((key) => (
				<Dropdown.Item key={key} eventKey={key}>
					{key}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
}

const mapStateToProps = (state) => ({
	sub: state.dashboard.dashboardFilter?.filters.sub,
});

export default connect(mapStateToProps)(BasicExample);
