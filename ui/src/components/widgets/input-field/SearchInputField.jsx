import { FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

export const SearchInputField = ({ placeholder }) => {
  return (
    <FormGroup>
      <InputGroup className="input-group-merge input-group-alternative rounded-pill">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="fa fa-search" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder={placeholder} type="text" />
      </InputGroup>
    </FormGroup>
  );
};
