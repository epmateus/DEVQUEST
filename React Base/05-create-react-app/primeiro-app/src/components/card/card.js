import React from 'react'
import './card.css'

// EXEMPLO DE FUNÇÃO

const Card = ({children, color, showCardColor}) => {
    return (
        <div className='card'
        style={{ backgroundColor: color}}
        onClick={() => showCardColor(color)}>
            {children}
        </div>
    );
}

Card.defaultProps = {
    color: 'orange'
}

// EXEMPLO DE CLASSE

// class Card extends React.Component{
//     render(){
//         return (
//             <div className='card'>
//                 <h3>{this.props.title}</h3>
//                 <p>esse é um texto do card</p>
//             </div>
//         )
//     }
// }

export default Card