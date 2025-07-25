import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/contants";

const RestuarentMenu = () => {

    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
     fetchMenu();
    },[]);


    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();

        console.log(json);

        setResInfo(json.data);
    }

    const info= resInfo?.cards[2]?.card?.card?.info;
    const name= info?.name;
   const areaName = info?.areaName;
    const costforTwo = info?.costForTwoMessage;
    
    const cuisines=info?.cuisines;

     const itemCat= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

     return(
        <div className="menu">
            <h1>{name}</h1>
            <h1>{areaName}</h1>

            <p>
            {cuisines} - {costforTwo}
            

            </p>
           

      
       
            <h2>Menu</h2>
            <ul>
            {itemCat?.itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100}</li>
        ))}
                {/* // <li>{itemCat?.itemCards[0]?.card?.info?.name}</li>
                // <li>{itemCat?.itemCards[1]?.card?.info?.name}</li>
                // <li>{itemCat?.itemCards[2]?.card?.info?.name}</li>
                // <li>{itemCat?.itemCards[3]?.card?.info?.name}</li>
                // <li>{itemCat?.itemCards[4]?.card?.info?.name}</li> */}
            </ul>
        </div>
    );
};

export default RestuarentMenu;