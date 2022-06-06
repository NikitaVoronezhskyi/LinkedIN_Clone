import React from 'react';
import "./InputOption.css";

const InputOption = ({Title,Icon,Color}) => {
  return (
    <div className='inputOption'>
     <Icon style={{color:Color}}/>
     <h4>{Title}</h4>
    </div>
  )
}

export default InputOption