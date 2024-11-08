import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contactos = () => {
	const { store, actions } = useContext(Context);
	let contactos = store.contactos


	return (
		<div className="container">
			{contactos.map((element) => {
            //Retornamos una carta por cada elemento del array
            return (
              <>
                <p>{element.name}</p>
              </>
            );
          })}
		</div>
	);
};
