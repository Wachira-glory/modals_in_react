// import './index.css'
// import { useState } from 'react';
// import { login } from './utils';
// const Login = () =>{

    
    
//     const [username,setUserName]=useState('');
//     const [password, setPassword]=useState('');
 

//     const handleLogin = async(event)=>{
//         event.preventDefault();
//         const result = await login({username,password});
//         console.log({result});
//     };
   
 

//     return(
//         <div>
//             <form onSubmit={handleLogin}>
//                 <h2>Login</h2>
           
//             <input placeholder="Enter Username" type="text" onChange={(event)=>setUserName(event.target.value)}/>
//             <br></br>
//             <input placeholder="Enter Password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
//             <button type='submit'>Login</button>
//             <br></br>
           
//             </form>

            
//         </div>
//     )
// }
// export default Login

import './index.css';
import { useState } from 'react';
import { login } from './utils';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login({ username, password });
    console.log({ result });
    if (result.success) {
      setIsModalOpen(true);
      setUsers(result.users);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Login</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                placeholder="Enter Username"
                type="text"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
              />
              <br />
              <input
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <button type="submit">Login</button>
            </form>
            {users.length > 0 && (
              <div>
                <h2>Users</h2>
                <ul>
                  {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;


