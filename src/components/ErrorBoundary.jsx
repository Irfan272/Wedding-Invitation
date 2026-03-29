import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-red-50 text-red-900 border-4 border-red-500 z-50 fixed inset-0">
          <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-4xl overflow-auto text-left">
            <h3 className="font-bold text-lg mb-2">{this.state.error && this.state.error.toString()}</h3>
            <pre className="text-sm bg-gray-100 p-4 rounded">{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
          </div>
          <p className="mt-8">Tolong screenshot pesan error ini agar bisa diperbaiki.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
