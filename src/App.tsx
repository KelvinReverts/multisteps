import { Router } from "./router";
import {FormProvider} from './contexts/FormContexts'

const App = () =>{
  return(
    <FormProvider>
      <Router/>
    </FormProvider>
  )
}

export default App;