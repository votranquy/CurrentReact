import React  from "react"

function ContactCard(props){
    console.log(props);
    return(
        <div className="contact">
            <div className="contact-card">
                <img src={props.imgurl} alt="A"/>
                <h3>Name: {props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    );
}

export default ContactCard