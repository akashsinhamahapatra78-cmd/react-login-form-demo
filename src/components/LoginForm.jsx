import React, { useState } from 'react';

/**
 * LoginForm Component
 * Demonstrates React useState hook for form state management
 * Features:
 * - Real-time state updates as user types
 * - Form validation for empty fields
 * - Console logging of login attempts
 * - Error message display
 */
function LoginForm() {
  // State management using useState hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handle username input change
   * Updates the username state in real-time as user types
   * Clears error message when user starts typing
   */
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (error) {
      setError('');
    }
  };

  /**
   * Handle password input change
   * Updates the password state in real-time as user types
   * Clears error message when user starts typing
   */
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (error) {
      setError('');
    }
  };

  /**
   * Handle form submission
   * Validates that both username and password are provided
   * Logs credentials to console if validation passes
   * Displays error message if validation fails
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear previous error
    setError('');

    // Validation: Check if both fields are filled
    if (!username.trim() || !password.trim()) {
      setError('❌ Error: Both username and password are required!');
      console.error('Login failed: Missing required fields');
      setIsSubmitted(false);
      return;
    }

    // Validation passed: Log credentials to console
    console.log('✅ Login Attempt:');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Timestamp:', new Date().toLocaleString());
    console.log('---');

    // Update submitted state to show success
    setIsSubmitted(true);

    // Reset form after successful submission (optional)
    setTimeout(() => {
      setUsername('');
      setPassword('');
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="form-title">Login</h2>

      {/* Username Input Field */}
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="form-input"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          aria-label="Username input"
        />
      </div>

      {/* Password Input Field */}
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          aria-label="Password input"
        />
      </div>

      {/* Error Message Display */}
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      {/* Success Message Display */}
      {isSubmitted && (
        <div className="success-message" role="status">
          ✅ Login successful! Check the console for details.
        </div>
      )}

      {/* Submit Button */}
      <button type="submit" className="submit-button">
        Login
      </button>

      {/* Current State Display (for learning purposes) */}
      <div className="state-display">
        <h3>Current State:</h3>
        <p><strong>Username:</strong> {username || '(empty)'}</p>
        <p><strong>Password:</strong> {password ? '●'.repeat(password.length) : '(empty)'}</p>
      </div>
    </form>
  );
}

export default LoginForm;
