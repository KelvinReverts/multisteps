import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import {useForm, FormActions} from '../../contexts/FormContexts'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';


export const FormStep1 = () =>{
    const navigate = useNavigate();
    const {state, dispatch}= useForm();

    useEffect(() =>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    },[])

    const handleNextStep = () =>{
        if(state.name !==''){
        navigate('/step2')
        }else{
            alert("Preencha os dados.")
        }
    }

    const handleNameChange =(e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }
    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Insira o seu nome completo no campo abaixo</p>

                <hr/>

                    <label>Full name <input type="text" 
                                        autoFocus value={state.name} 
                                        onChange={handleNameChange}/>
                                        </label>
                    <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
    )
}