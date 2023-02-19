import { useState } from 'react';
import { datagifts } from './datagifts';
import './App.css';

function Giftsbox() {
  const [gifts, setGifts] = useState(datagifts)
  return (
    <div>
      <div className='container'>
        <h1>List of {gifts.length} gifts</h1>
      </div>
      {gifts.map((element=>{
        const {id, gift, image} = element;
        
        const removeGift = (id) => {
          console.log(id)
          let newGifts = gifts.filter(gift => gift.id !== id);
          setGifts(newGifts)
        }
        return(
    <div key={id}>
        <div className='flexstart'>
            <div className='item'>
                <h2>{id}-{gift}</h2>
                <img src={image}  alt= "gift" width="200px"/>
                <button onClick={() => removeGift(id)}>Delete</button>
            </div>
        </div>
    </div>
        )
    }))}
        <div className='container'>
            <button onClick={() => setGifts([])}>Delete all</button>
        </div>
    </div>
    );
}

export default Giftsbox;
