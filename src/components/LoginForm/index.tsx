import ButtonEnter from '../ButtonEnter';
import './styles.css'

export default function LoginForm() {
    return (
        <>
            <div className="dsc-login-form-container">
                <form className="dsc-card dsc-form">
                    <h2>Login</h2>
                    <div className="dsc-form-controls-container">
                        <div>
                            <input className="dsc-form-control dsc-input-erro " type="text" placeholder="Email" />
                            <div className="dsc-form-erro">
                                Campo obrigatório
                            </div>
                        </div>
                        <div>
                            <input className="dsc-form-control" type="password" placeholder="Senha" />
                        </div>


                    </div>
                        <ButtonEnter/>
                </form>
            </div>
            </> );
}