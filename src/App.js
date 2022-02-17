import { useState } from 'react';
import { data } from './data';
import { info } from './data';
import './App.css';

function App() {

  const [hotel, setHotel] = useState(data);
  const [resto, setResto] = useState(0);
  const {number, place, restaurant} = info[resto];

  const PreviousRestaurant = () => {
    setResto((resto => {
     resto --;
      if (resto < 0) {
        return data.length -1;
      }
      return resto;
    }))
   }
 
   const NextRestaurant = () => {
    setResto((resto => {
     resto ++;
      if (resto > data.length - 1) {
        resto = 0;
     }
      return resto;
    }))
   }

  const removeHotel = (id) => {
    let newHotels = hotel.filter( element => element.id !== id);
    setHotel(newHotels);
  }

  const [showMore, setShowMore] = useState(false);


 
  return (
    <div>
        <div className='container'>
           <h1>Must live {hotel.length} hotels in Paris! </h1>
        </div>
        {hotel.map((hotels => {
           const {id, name, description, image, address} = hotels;
           return(
             <div key={id}>
            <div className='container'>
            <h2>{id} - {name} </h2>
         </div>
         <div className='container'>
            <p>{showMore ? description : description.substring(0,200) + "...."} 
            <button onClick={() => setShowMore (!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>
         </div>
         <div className='container btnnew'>
            <img alt='hotelphoto' width="500px" src={image} />
         </div>
         <div className='container'>
            <h4> Address: {address}</h4>
         </div>
         <div className='container'>
            <button className='btn' onClick={() => removeHotel(id) }>Remove</button>
         </div>
       


         </div>
           )
        }))}

        <div className='container'>
            <button className='btn class' onClick={()=> setHotel([])}>Remove All</button>
        </div>
        <div className='container'>
           <h2>Top restaurants in Paris!</h2>
        </div>
        <div className='container'>
           <img alt='rest' width="500px" src={restaurant} />
        </div>
        <div className='container'>
          <h3>No {number} - {place}</h3>
        </div>
        <div className='container'>
          <button className='prev btnnew' onClick={PreviousRestaurant}>Previous</button>
          <button className='prev btnnew' onClick={NextRestaurant}>Next</button>
        </div>
    </div>
  );
}

export default App;
