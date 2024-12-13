import React from "react";

function InputText(){

    return(
<form>

  <label>
    Route Name:</label>
    <input type="text" name="name" />
    <label>Route Notes:</label>
    <input type="text" name="notes" />
    <label>Wall Degree:</label>
    <input type="range" name="name" />
    <label>info</label>
    <input type="radio"></input>
    <input type="submit" value="Submit" />
</form>
    )
}

export default InputText;