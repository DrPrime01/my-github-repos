import React from 'react';
import FallbackUI from './FallbackUI'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <FallbackUI />;
      }
      return this.props.children;
    }
  }

  
export default ErrorBoundary;
