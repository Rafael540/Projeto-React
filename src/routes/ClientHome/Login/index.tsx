

import { loginRequest } from '../../../services/auth-service';
import './styles.css'
import { useState } from 'react';
import type { CrendetialsDTO } from '../../../models/auth';

export default function Login() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [formData, setFormData] = useState<CrendetialsDTO>(
        {
            username: '',
            password: ''
        })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault();
        loginRequest(formData);
    }

    return (
        <>
            <main>
                <section id="login-section" className="dsc-container">
                    <div className="dsc-login-form-container">
                        <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="dsc-form-controls-container">
                                <div>
                                    <input className="dsc-form-control " type="text" placeholder="Email" />
                                    <div className="dsc-form-erro">
                                    </div>
                                </div>
                                <div>
                                    <input className="dsc-form-control" type="password" placeholder="Senha" />
                                </div>
                            </div>

                            <div className="dsc-btn dsc-btn-blue ">
                               <button>Entrar</button>
                            </div>
                        </form>
                    </div>

                </section>

            </main>
        </>);
}