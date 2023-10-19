import { useEffect, useState } from 'react';
import WCU from './cards/WCU';

const WhyChoseeUs = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('/wcu.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCards(data)
        })
    },[])

    return (
        <div className='my-10'>
            <div className='max-w-6xl mx-auto'>
                <h1 className="text-5xl font-bold text-center pb-10">Why Choose us</h1>
                <div className='grid grid-cols-4 gap-4'>
                  {
                    cards.map(card =><WCU key={card.id} card={card}></WCU>)
                  }
                </div>
            </div>
        </div>
    );
};

export default WhyChoseeUs;