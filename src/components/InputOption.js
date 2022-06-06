import React from 'react';
import "./InputOption.css";

const InputOption = ({Title,Icon,Color}) => {
  return (
    <div className='inputOption'>
     <Icon style={{color:Color}}/>
     <p>{Title}</p>
    </div>
  )
}

export default InputOption