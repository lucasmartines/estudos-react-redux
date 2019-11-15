import React, { useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";

const CreateItem = props => {
  let [nomeItem, setNomeItem] = useState("");

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={e => setNomeItem(e.target.value)}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={e => {
            props.getInput(nomeItem);
          }}
        >
          Insert One{" "}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};
export default CreateItem;
