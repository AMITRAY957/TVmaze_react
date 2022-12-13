import "./style.css";

const Actor = (props) =>{
    const {imageUrl, name}=props;
    return (
    <div className="card-wrapper">
        <img 
        className="card-image"
        src={imageUrl} 
        alt="Card Cover"/>
        <div className="bottom-container">
            <h6>Name:{name}</h6>
             {/* <div
            dangerouslySetInnerHTML={{
                __html:description,
            
            }}
            />
            <div>{rating}</div>  */}
        </div> 
        </div>
);
};
export default Actor;