// Dependencies.
import React, { Component } from 'react';

// Draw Component Class.
class Login extends Component {
    render() {
        return (
            // 'Login' Component Container.
            <div className="login-section">
                <div className="ComingSoon animated fadeInDown slow">
                    {/* Coming Soon Text */}
                    <img src="/images/logos/logo.png" alt="SiteLogo" />
                    <h1 className="display-1 text-white font-weight-bold">Client Registration Coming Soon!</h1>
                    <p className="display-2 text-white">We are working hard to bring our services to all clients.</p>
                </div>
            </div>
        );
    };
};

// Export Component.
export default Login;