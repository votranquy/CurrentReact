import React from "react";
import AutoCompleteText from './AutoCompleteText';
import countries from './countries.js'
class App extends React.Component{
    render(){
        return(
            <div className="App">
                <div className="App-Component">
                    <div className="App-Component">
                        <div className="App">
                            <AutoCompleteText items={countries}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;