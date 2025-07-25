import {CDN_URL} from "../utils/contants";

const RestuarentCard = (props) => {
    const {resData} = props; 
   // console.log("resData", resData);

        return(
            <div className="res-card">
                <img 
                className="res-logo"
                src={
                CDN_URL + resData?.cloudinaryImageId
                }
               
         
                 />

               
                
                
                {/* <h3>{resData.data.name}</h3>
                <h4>{resData.data.cuisines}</h4>
                <h4>{resData.data.avgRating}</h4>
                <h4>{resData.data.deliveryTime}</h4> */}
    
        <h3>{resData?.name}</h3>
          <h4>{resData?.cuisines.join(", ")}</h4>
          <h4>{resData?.avgRating}</h4>
          <h4>{resData?.deliveryTime} mins</h4>
                
            </div>
        )
    };

export default RestuarentCard;