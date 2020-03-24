import * as React from 'react';

interface IErrorBoundary {}

interface IErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends React.Component<
  IErrorBoundary,
  IErrorBoundaryState
> {
  state = { hasError: false, message: '' };

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: string) {
    // You can also log the error to an error reporting service
    this.setState({
      message: info
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
