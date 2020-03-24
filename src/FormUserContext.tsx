import * as React from 'react';

interface IUserState {
  name: string;
}

export const FormContext = React.createContext('');

export function useForm(props: IUserState) {
  const [name, setName] = React.useState('');

  const data = {
    name,
    setName
  };
  return <FormContext.Provider value={data} />;
}
