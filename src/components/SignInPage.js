import React from 'react';

const SignInPage = ({ handleSubmit, history}) => {

  function onSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    handleSubmit({
      email: formData.get('email'),
      password: formData.get('password')
    });
    history.push('/');
  }

  return(
    <main className='bgImage' style={{height:'320px'}}>
      <h5 style={{color:'white',marginLeft:'2rem',paddingTop:'1rem'}}>Sign In</h5>
      <form style={{padding:'2rem',color:'white'}} onSubmit={onSubmit}>
        <div className='form-group row'>
          <label htmlFor='email' className='col-sm-2 col-form-label'>Email*</label>
          <input id='email' type='email' name='email' required='required' />
        </div>
        <div className= 'form-group row'>
          <label htmlFor='password' className='col-sm-2 col-form-label'>Password*</label>
          <input id='password' type='password' name='password' required='required' />
        </div>
        <button type="submit" className="btn btn-primary btn" style={{marginLeft:'16.8rem'}}>Sign In</button>
      </form>
    </main>
  )
}

export default SignInPage;

