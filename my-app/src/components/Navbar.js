
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import React,{useState} from 'react';

const Navbar = ({user}) =>{

    const history = useHistory()
    const handleLogout = async (e)=> {
        e.preventDefault()
        await auth.signOut() 
        history.push('/login')
        console.log("hello")
    }

    return (
        <nav>
            <div className="nav-wrapper blue">
                <Link to="/" className="brand-logo">IRTS Connect</Link>
                <ul id="nav-mobile" className="right ">
                
                
                    {
                        user?
                            <li>
                            <button className="waves-effect waves-light btn-small purple"  onClick={(e)=>handleLogout(e)}>Logout</button>
                            </li>              
                        :
                            <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>                   
                            </>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
