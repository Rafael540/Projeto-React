import HeaderClient from '../../components/HeaderClient';
import LoginForm from '../../components/LoginForm';
import './styles.css'

export default function Login(){

    return(
        <>

        <HeaderClient/>
         <main>
        <section id="login-section" className="dsc-container">
            <LoginForm/>
           

        </section>

    </main>
  </>  );
}