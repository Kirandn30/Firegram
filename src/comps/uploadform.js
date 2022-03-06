import { IconButton } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import React, { useState } from 'react';
import ProgressBar from './progressBar';

const Uploadform = () => {

    const [file, setFile]= useState(null);
    const [error, setError]=useState(null)

    const types= ['image/png', 'image/jpeg', 'image/jpeg'];
    
    let changeHandler=(event)=>{
        let selected = event.target.files[0];
        console.log(selected);
        if(selected && types.includes(selected.type)){
          setFile(selected);
          setError(null)
        }else{
          setFile(null);
          setError('Please select an image file (png or jpeg)')
        }
    }
  return (
    <form className='form'>
         <input id="icon-button-file" type="file" hidden onChange={changeHandler}/>
          <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
          <AddAPhotoIcon className='camera'/>
          </IconButton>
          </label>
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
    </form>
  )
}

export default Uploadform;