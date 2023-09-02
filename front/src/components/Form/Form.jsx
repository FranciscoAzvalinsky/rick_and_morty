import styles from './Form.module.css';
import React from 'react';
import validation from '../validation';
import Button from '../Button/Button';

export default function Form ({login, signUp}){
    const [userData, setUserData]= React.useState({
        email: "",
        password:"",
    });


    const [errors, setErrors]= React.useState({});

    function handleChange(e){
        setUserData({
            ...userData,
            [e.target.name] : e.target.value,
        });

        setErrors(validation({
            ...userData,
            [e.target.name] : e.target.value,
        }));
    }

    function handleSubmit(e){

        e.preventDefault();
        let boton = e.target.getAttribute('value');
        console.log('boton: ' + boton);
        if (boton === "login"){
            login(userData);
            console.log('ENTRE EN EL IF')
        }
        else if (boton === "signup"){
            signUp(userData);
            console.log('ENTRE EN EL ELSE')
        }
        /*<Button text="Login" marginTop= '0px' value='login'></Button>
        <Button text='Sign up' marginTop='0px' value='signup'></Button>*/
    }

    function onClick(e){
        handleSubmit(e);
    }
    
    return (
        <div className={styles.divForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.divDivs}>
                    <div className={styles.divDiv}>
                        <label className={styles.label}>email:</label>
                        <input name = 'email' placeholder=' example@gmail.com' type='text' className={styles.input} value={userData.email} onChange={handleChange}></input>
                        <p className={styles.p}>{errors.email}</p>
                    </div>
                    <div className={styles.divDiv}>
                        <label className={styles.label}>password:</label>
                        <input name = 'password' placeholder=' Escribe tu contraseña...' type='password' className={styles.input} value={userData.password} onChange={handleChange}></input>
                        <p className={styles.p}>{errors.password}</p>
                    </div>
                </div>
                <button value='login' className={styles.cssButtonArrowBlack} onClick={onClick}>Login</button>
                <p className={styles.label2}>No tienes cuenta? 
                    Registrate aqui</p>
                <button value='signup' className={styles.cssButtonArrowBlack} onClick={onClick}>Sign Up</button>
            </form>
        </div>
    );
}