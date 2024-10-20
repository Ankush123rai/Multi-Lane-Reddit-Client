const ErrorMessage = ({ message, clearError }) => {
  return (
    <div className="error-message">
      <p>{message}</p>
      <button onClick={clearError}>Dismiss</button>
    </div>
  );
};

export default ErrorMessage;
