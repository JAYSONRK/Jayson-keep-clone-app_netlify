import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (prop) => {
    const deleteItem = () =>{
        prop.deleteItem(prop.id);
    }

    return (<>
        <div className="cardB bg-light">
            <h3>{prop.title}</h3>
            <p>{prop.content}</p>
            <button type="submit" className="buttonB" onClick={deleteItem}><DeleteOutlineIcon className="deleteicon"/></button>
        </div>    
    </>)
}

export default Note;