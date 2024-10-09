const ResturantCard = (props) => {

    const {resdata}= props
     
    const {imgId,name,cuisine,AvgRating,costForTwo,deliveryTime} = resdata
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="pyar han pyar"
          src={imgId}
        />
        <h3>{name}</h3>
        <h3>{cuisine}</h3>
        <h3>{AvgRating} Stars</h3>
        <h3>{costForTwo/100}</h3>
        <h3>{deliveryTime} minutes</h3>
      </div>
    );
  };

  export default ResturantCard;