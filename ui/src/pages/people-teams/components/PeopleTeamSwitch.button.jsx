import { ButtonGroup, Button } from "reactstrap";

export const PeopleTeamSwitchButton = ({ category, handleCategory }) => {
  return (
    <ButtonGroup>
      <Button
        active={category === "People" ? true : false}
        color="primary"
        onClick={e => handleCategory(e.target.innerText)}
      >
        People
      </Button>
      <Button
        active={category === "Teams" ? true : false}
        color="primary"
        onClick={e => handleCategory(e.target.innerText)}
      >
        Teams
      </Button>
    </ButtonGroup>
  );
};
