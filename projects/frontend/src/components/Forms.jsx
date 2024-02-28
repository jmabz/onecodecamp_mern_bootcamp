import React, {useState} from 'react'

const Forms = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => { 
        event.preventDefault();
        console.log('Login submitted');
     }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(event) => { setPassword(event.target.value) }}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Forms;