import { useState } from 'react'
import './App.css'
import {Box,Container,TextField,Button} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
   <Container maxWidth="sm flex mt-1 " sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}>
   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" type='password' />
      <Button variant="contained">LOGIN</Button>
      <Button variant="outlined">SIGN IN</Button>

      
    </Box>

   </Container>
    
     
    </>
  )
}

export default App
