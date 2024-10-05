import { useRef, useState } from 'react';
import '../styles/User.css';

export default function User() {
    //useRef to get the input value
    //useState to store the name
    const [ userName, setUserName ] = useState(null);
    const inputUserRef = useRef();

    const handleClick = () => {
        //set the name
        setUserName(inputUserRef.current.value);
        inputUserRef.current.value = '';
    }

    return (
        <div className="userWrapper">
            <span>Welcome, {userName ?? 'Unknown'}</span>
            <div className="userInputGroup">
                <input ref={inputUserRef} type="text" placeholder="Enter your name" />
                <button onClick={handleClick}>Set Name</button>
            </div>
        </div>
    )
}