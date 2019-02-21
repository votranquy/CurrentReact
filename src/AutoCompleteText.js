import React from 'react';

export default class AutoCompleteText extends React.Component{

    constructor(props){
        super(props);
        this.items =[
            'David',
            'Jane',
            'Jara',
            'Tavia',
        ];
        this.state = {
            suggestions: [],
        };
    }

    onTextChanged =(e) => {
        const value = e.target.value;
        let suggestions =[];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`,'i');
            suggestions = this.items.sort().filter(v => this.setState(regex))
        }
        this.setState(() => ({suggestions}));
    }

    renderSuggestions(){
        const {suggestions} = this.state;
        if(suggestion.length === 0){
            return null;
        }
        return(
            <ul>
                {this.suggestions.map( (item) => <li>{item}</li> )}  
            </ul>
        );
    }    
    render(){
        return(
            <div>
                <input onChange={(e) => console.log(e.target.value)} type="text" />
                <ul>
                    {this.renderSuggestions()}                 }
                </ul>
            </div>
        );
    }

}