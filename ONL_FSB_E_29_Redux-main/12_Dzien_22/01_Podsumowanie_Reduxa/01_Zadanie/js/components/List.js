// List
import React from "react";

const List = ({saveCurrentNumber, currentNumber, savedNumbers, removeNumber}) => {

    return (

        <div>
            <button onClick={() => saveCurrentNumber(currentNumber)}>Zapisz</button>
            <ul>
                { savedNumbers ? savedNumbers.map((nr, idx) => <li key={idx} onClick={() => removeNumber(nr)}>{nr}</li>) : ""}
            </ul>
        </div>

    )
}

export default List;