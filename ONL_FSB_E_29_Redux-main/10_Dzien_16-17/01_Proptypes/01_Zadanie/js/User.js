// Pamiętaj aby na końcu pliku wyeksportować komponent jako domyślny export
// np. export default User
import PropTypes from "prop-types";
import React from "react";

const User = ({firstName, lastName, age, onClick }) => {



    return (
        <>
            <h1>{firstName} {lastName}</h1>
            <div><p>{age ? <div>Masz {age} lat !</div> : ""}</p></div>
            <button onClick={() => onClick()}>Przycisk</button>
        </>
    )
}

User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default User