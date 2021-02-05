import React from 'react'
import '../assets/css/style.css'
import DisplayData from './DisplayData';
import Input from './Input';

function MainBody(){
    return(
        <React.Fragment>
          <div className="box">
            <Input></Input>
            <DisplayData></DisplayData>
            

          </div>

        </React.Fragment>
    )
}

export default MainBody