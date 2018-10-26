import React,{Component} from 'react'
import './Header.css';





class Header extends Component{

//     // generate random color
//     genRandomColor = () => {
//     let hexString = '0123456789ABCDEF';
//     let randColor = '#';
//     for(let i = 0; i < 6; i++){
//         let rand = hexString[Math.floor(Math.random() * hexString.length)];
//         randColor += rand;
//     } 
//     return randColor;
// }

    render() {
        // console.log(this.genRandomColor())
        return (
            <div className="header-div">
                <h1 id = "header"><span id = 'c'>C</span><span id = 'o'>O</span><span id = 'u'>U</span><span id = 'n'>N</span><span id = 't'>T</span><span id = 'r'>R</span><span id = 'i'>I</span><span id = 'e'>E</span><span id = 's'>S</span></h1>
                {/* <h1 style = {{color:this.genRandomColor()}}>Countries</h1> */}
            </div>
        )
    }
}
export default Header