import "./style.css";

const Show = (props) =>{
    const {imageUrl, name,description,rating}=props;
    return (
        <>
    <div className="card-wrapper">
        <img 
        className="card-image"
        src={imageUrl} 
        alt="Card Cover"/>
        <div className="bottom-container">
            <h6>{name}</h6>
             <div className="show-description"
            dangerouslySetInnerHTML={{
                __html:description,
            
            }}
            />
            <div>{rating}</div> 
        </div>
        </div>
        </>
);
};
export default Show;