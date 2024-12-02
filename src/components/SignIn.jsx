import React from 'react'

const SignIn = ({toggle}) => {
    
  return (
    <form className='w-96 min-h-56 bg-white p-3'>
        <h2 className='text-2xl mb-3'>Sign in</h2>
        <input className='w-full h-10 border mb-3' type="text" />
        <input className='w-full h-10 border mb-3' type="text" />
        <button className='bg-slate-400 w-full h-10'>Sign in</button>
        <button onClick={()=> toggle()}>sign up</button>
    </form>
  )
}

export default SignIn