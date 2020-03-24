import * as React from 'react';

interface IState {
  errorMessage: string;
}

class ErrorBoundary extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error(error, info);
  }

  render() {
    if (this.state.errorMessage) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong. <p>{this.state.errorMessage}</p>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
