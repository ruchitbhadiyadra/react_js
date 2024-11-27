import "./profile.css"
const profile = ({img,name,email,age,phoneno,address}) => {
    return(
        <div className="main">
            <img src={img}/>
            <div className="name">Name:- {name}</div>
            <div className="email">Email:- {email}</div>
            <div className="age">Age:- {age}</div>
            <div className="phoneno">Phone number:- {phoneno}</div>
            <div className="address">Address:- {address}</div>
        </div>
    )
}
export default profile;