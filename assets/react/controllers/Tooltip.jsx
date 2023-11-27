import React  from "react";

export default function Tooltip({ handleOnClick }) {
    return(
        <button className="bg-xuntaNaranja-100 hover:bg-xuntaNaranja-50 font-bold border border-xuntaNaranja-300 px-2 lg:px-3 rounded-md" onClick={handleOnClick}>?</button>
    );
}