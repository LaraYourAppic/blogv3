import './Login.css';
import React from 'react';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = ({isAuth, toggleAuth}) => {

    const history = useHistory();
    const {register} = useForm();


    function nextPage(){
        history.push('/blog')
        toggleAuth (true)
        console.log(isAuth)
    }

    return (
        <div>

            <h1> Vul je gegevens in om in te loggen</h1>
            <h3> Om lid te kunnen worden van dit blogforum, willen wij zien dat je weet hoe je een lorum ipsum blog kunt te schrijven.<br/>
            Zet hieronder een stukje Lorum en klik op inloggen.</h3>
            <form>
                <fieldset>
                    <label htmlFor="details-name" className="fieldlegenda">
                        Mijn Lorum Ipsum Blog:
                        <input
                            type="text"
                            id="details-name"
                            {...register("name")}
                        />
                    </label>
                </fieldset>
            </form><br/>
            <br/>
            <button className="loginbutton"
                type= "button"
                onClick={nextPage}>Inloggen</button>

        </div>
    );
};

export default Login;