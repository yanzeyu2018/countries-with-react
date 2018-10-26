import React,{Component} from 'react';

import countries from '../countries.js';
import './Main1.css';



class Main1 extends Component {
    
    state = {
        value: "",
        result: countries
    }
    

    searchStartWith = (event) => {
        this.setState({
            value: event.target.value
            //  result: result
        })
        let searchvalue = this.state.value.toUpperCase();
        let result = countries.filter((country)=>{
            return country.toUpperCase().startsWith(searchvalue)
        })

        this.setState({
          
            result: result
        }, ()=>{console.log("result",result,"state", this.state, "this.state.result",this.state.result)})
    }

    searchIncludes = (event) => {
        this.setState({
            value: event.target.value
           
        })
        let searchvalue = this.state.value.toUpperCase();
        let result = countries.filter((country)=>{
            return country.toUpperCase().includes(searchvalue)

        })
        
        this.setState({
          
            result: result})

    }
    
  
    
    hexColorGenerator = () => {
        let hexString = '0123456789ABCDEF';
        let resultString = "#";
        for(let i = 0; i < 6; i++) {
            resultString += hexString[Math.floor(Math.random() * hexString.length)];
        }
        
        return resultString;
     
    }
    
    render () {
        return (
            <div className="mainWrapper">
                <input type = "text" value = {this.state.value} onChange = {this.searchStartWith} placeholder = " Search for countries ..." />
                <div className="buttonWrapper">
                    <button className="button startwith" onClick = {this.searchStartWith}>Search StartWith</button>

                    <button className="button include" onClick = {this.searchIncludes}>Search Includes</button>
                </div>
                    <h3>{this.state.result.length} results found</h3>
                    <div className="displayCountries">
                        {this.state.result.map((item, i)=>{
                            return (
                                
                                    <li key = {i} style ={{backgroundColor: this.hexColorGenerator()}}>{item}</li>
                                
                            )
                        })}            
                    </div>
                
            </div>
        )

    }
}




export default Main1;
