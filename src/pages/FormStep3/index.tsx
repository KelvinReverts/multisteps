import { useNavigate,Link } from 'react-router-dom';
import * as C from './styles';
import {useForm, FormActions} from '../../contexts/FormContexts'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';


export const FormStep3 = () =>{
    const navigate = useNavigate();
    const {state, dispatch}= useForm();

    useEffect(() =>{
        if(state.name === ''){
            navigate('/')
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    },[])

    const handleNextStep = () =>{
        if(state.name !=='' && state.github!==''){
            alert('Nome: '+state.name+ '\nNivel: '+state.level+
            '\nEmail: '+state.email+'\nGitHub: '+state.github);
        }else{
            alert("Preencha os dados.")
        }
    }

    const handleEmailChange =(e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    const handleGitHubChange =(e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }
    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>{state.name}, onde te achamos?</h1>
                <p>Insira os seus contatos nos campos abaixo.</p>

                <hr/>

                    <label>E-Mail
                        <input type="email" 
                                autoFocus value={state.email} 
                                onChange={handleEmailChange}/>
                    </label>
                    
                    <label>GitHub
                        <input type="url" 
                                autoFocus value={state.github} 
                                onChange={handleGitHubChange}/>
                    </label>
                    <Link to='/Step2' className='backButton'>Voltar</Link>
                    <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}