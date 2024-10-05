import '../styles/Challenge.css';

export default function Challenge({title, targetTime}) {
    return (
        <div className="challengeWrapper">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} seconds
            </p>
            <button>Start Challenge</button>
        </div>
    )
}