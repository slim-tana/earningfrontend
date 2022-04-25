import React, { useState, useEffect } from "react"
import styled from "styled-components";
import Evenement from "./Evenement";
import { popularProducts } from "../data";


const Container = styled.div`
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export default function Evenements() {   

	const [Evenements, setEvenements] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

useEffect(async () => {

    await fetch("http://127.0.0.1:5000/api/event/")


        .then(res => res.json())
        .then(
            (data) => {
                console.log(data)
                setIsLoaded(true);
                setEvenements(data);
                console.log(data)

            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )

}, [setIsLoaded == true])
    return (
        <Container>
            {Evenements.map((item) => (
                <Evenement item={item} key={item._id}   />
            ))}
        </Container>
    );
};

