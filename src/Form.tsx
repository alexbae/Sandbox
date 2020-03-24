import * as React from 'react';
import { FormUserContext } from './FormUserContext';

interface IForm {
  name: string;
  handleName: () => any;
}

function Form(props: IForm) {
  return (
    <form>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          onChange={props.handleName}
          type="text"
          value={props.name}
          placeholder="e.g. Sue Bloggs"
          name="name"
        />
      </div>
    </form>
  );
}

function FormWithContext() {
  const { name, setName } = React.useContext(FormUserContext);
  return <Form name={name} handleName={setName} />;
}

export default FormWithContext;
