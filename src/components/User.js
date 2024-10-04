import '../styles/User.css';

export default function User() {
    return (
        <div className="userWrapper">
            <span>Welcome, User</span>
            <div className="userInputGroup">
                <input type="text" placeholder="Enter your name" />
                <button>Set Name</button>
            </div>
        </div>
    )
}