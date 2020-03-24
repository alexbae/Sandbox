import * as React from 'react';

export function useConditionalHook<T>(
  shouldRun: boolean,
  hook: (...args: []) => T
) {
  if (!shouldRun) return;
  return hook();
}

export function useClientDimensons() {
  const [dimension, setDimensions] = React.useState({});

  React.useEffect(() => {
    function handler() {
      setDimensions({
        width: document.body.clientWidth,
        height: document.body.clientHeight
      });
    }

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  });
  return dimension;
}

export function TestHooks() {
  const [count, setCount] = React.useState(0);
  const isEven = count % 2 === 0;
  const value = useConditionalHook(isEven, useClientDimensons);

  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
      </div>
      {value && <pre>{JSON.stringify(value, null, 2)}</pre>}
    </div>
  );
}

export interface IUseForm {
  values: any;
  resetForm: () => void;
  handleChange: (event: React.ChangeEvent<HTMLFormElement>) => void;
}

export function useForm({ initial }: { [key: string]: any }): IUseForm {
  const [values, updateValues] = React.useState(initial);

  function resetForm() {
    updateValues(initial);
  }

  function handleChange(event: React.ChangeEvent<HTMLFormElement>) {
    updateValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  return {
    values,
    resetForm,
    handleChange
  };
}
