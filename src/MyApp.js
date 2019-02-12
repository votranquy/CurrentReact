import React from 'react';
// import Footer from './Footer.js'
// import MainContent from './MainContent.js'
// import Header from './Header.js'
import ContactCard from "./ContactCard.js"
import Joke from "./Joke.js"
function MyApp(){
    return(

        // <div>
        //     <ContactCard 
        //         imgurl="http://placekitten.com/300/200"
        //         name="Mr. Wyatt"
        //         phone="5255-1234"
        //         email="wyatt@enclave.vn"
        //     />

        //     <ContactCard 
        //         imgurl="http://placekitten.com/300/100"
        //         name="Mr. B"
        //         phone="5525-1234"
        //         email="wyatt@enclave.vn"
        //     />

        //     <ContactCard 
        //         imgurl="http://placekitten.com/300/300"
        //         name="Mr. V"
        //         phone="555-12342"
        //         email="wyatt@enclave.vn"
        //     />
        //  </div> 
        <div>
            <Joke question="Did you hear about the accident downtown?" punchLine="There no menu"/>
            <Joke question="Did you hear about the accident downtown?" punchLine="There no menu"/>
            <Joke question="Did you hear about the accident downtown?" punchLine="There no menu"/>
            <Joke question="Did you hear about the accident downtown?" punchLine="There no menu"/>
        </div>  
    );
}

export default MyApp