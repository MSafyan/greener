import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const variant = "Light";
function BasicExample() {
	return (
		<DropdownButton
			as={ButtonGroup}
			id={`dropdown-variants-${variant}`}
			variant="light"
			title="Jour"
      classNmae="btn btn-light"
		>
			<Dropdown.Item eventKey="1">Action</Dropdown.Item>
			<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
			<Dropdown.Item eventKey="3" active>
				Active Item
			</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
		</DropdownButton>
	);
}

export default BasicExample;
