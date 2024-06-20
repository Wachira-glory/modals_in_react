const UserCard = ({image,fullName,age,gender}) =>{
    return(
        <div>
            <img src={image} alt={`${fullName} profile`} />
            <h2>{fullName}</h2>
            <p>{age}</p>
            <p>{gender}</p>
        </div>
    );
};
export default UserCard;
