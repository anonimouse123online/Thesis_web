import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react'; 
import { Monitor, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState<string>('admin@construction.com');
  const [password, setPassword] = useState<string>('admin123');
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    navigate('/dashboard/projects');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        <div className="icon-header">
          <div className="icon-circle">
            <Monitor className="text-white w-8 h-8" />
          </div>
        </div>

        <div className="login-title">
          <h1>Admin Dashboard</h1>
          <p>Construction Site Management System</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon w-5 h-5" />
              <input 
                type="email" 
                className="login-input"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon w-5 h-5" />
              <input 
                type="password" 
                className="login-input"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn-signin">
            Sign In to Dashboard
          </button>
        </form>

        <hr className="divider" />
        
        <div className="signup-section">
          <p className="signup-text">Don't have an account?</p>
          <button type="button" className="btn-create">
            Create Admin Account
          </button>
        </div>

        <div className="demo-box">
          <p style={{ fontWeight: 'bold', marginBottom: '4px', color: '#374151' }}>Demo Credentials:</p>
          <p>Email: admin@construction.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;