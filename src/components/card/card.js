import './card.css';
import './flip-animation.css';

function Card({onClick}){
    return(
        <div className="card" onClick={onClick}>
            <div className="card-back">Plug your nose b/c he stinky asf</div>
            <div className="card-front">What should you do when Alex kim arrives?</div>
        </div>
    );
}

export default Card;