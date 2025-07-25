import RestuarentCard from "./RestuarentCard";

import { useEffect, useState } from "react";


import Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    

const [listofRestuarent,setlistofRestuarent] = useState([]);
const [filteredRestuarent,setfilteredRestuarent] = useState([ ]);

const [searchText,setsearchText] = useState("");

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
  console.log(json);

  //  setlistofRestuarent(json?.data?.cards[4]?.data?.data?.cards);

//   const restList = json?.data?.cards;

// setlistofRestuarent(restList || []);
const restaurantCards = json?.data?.cards?.find(
    (card) => card?.card?.card?.id?.includes("restaurant_grid")
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  setlistofRestuarent(restaurantCards || []);

  setfilteredRestuarent(restaurantCards);

};

const onlinestatus = useOnlineStatus();

if(onlinestatus === false) 
return(
<h1>
  Looks like you are offline please check your internet.
</h1>
); 


if(listofRestuarent.length === 0)
    {
      return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
               <div className="search">
                
                <input type="text" className="search-box"
                  value={searchText}
                  onChange={(e) => {
                    setsearchText(e.target.value);
                  }}
                />

                <button onClick = {() => {
                    console.log(searchText);

                    const filteredRestuarent = listofRestuarent.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) );

                    setfilteredRestuarent(filteredRestuarent);
                }}>Search</button>

               </div>
               
               <button className="filter-btn" onClick={()=>{
                    const filteredList = listofRestuarent.filter((res)=> res?.info?.avgRating > 4.2
                );

                setlistofRestuarent(filteredList);
                }}>Top rated restuarent</button>
            </div>
            <div className="res-container">
              {
                Array.isArray(filteredRestuarent) && filteredRestuarent.map((restuarent) => (
                    // <RestuarentCard 
                    // key={restuarent?.info?.id || index}
                    //  resData = {restuarent?.info}/>
                    <Link 

                    key={restuarent?.info?.id}
                      to={"/restuarent/" + restuarent?.info?.id }
                    >
                    <RestuarentCard 
                     //key is used to identify each ele uniquley.
                    resData={restuarent?.info} />
                    </Link>
                ))
              }
           
            </div>
        </div>
    )
}

export default Body; 