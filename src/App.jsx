import { useState } from 'react';
import Login from './components/Login/Login';
import './App.css';
import Register from './components/register/register';

function App() {
  const [open, setOpen] = useState(false)

  return (
   <div className='rootdiv'>
<div className='H1box'>
<h1>Facebook</h1>
<h3 >Facebook помогает вам всегда оставаться <br />
    на связи и общаться со своими знакомыми.</h3>


</div>
<div className='rightbox'>
<Login/>
<button onClick={()=>setOpen(true)}>register</button>
{
  open && <Register/>
}
</div>
   </div>
  )
}

export default App;
