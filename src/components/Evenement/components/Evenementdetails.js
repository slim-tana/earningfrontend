import React,{useState,useEffect} from "react";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import {useParams} from "react-router"

import {NavLink} from "react-router-dom";
import axios from 'axios';
import './Evenement.css'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;



const Image = styled.img`
  height: 300px;
  width: 300px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Evenementdetails = () => {
    const {id}=useParams()
    const [item,setEvent] = useState({});

    useEffect(async () => {
        await axios.get('http://localhost:5000/api/event/' + id)
            .then(function (res) {
                setEvent(res.data);
                console.log("data", res.data);
            })
    },[])    
    return (
      
        //<Container>

            
          //  <div> {item.nom} </div>
            
                        //<Image  crossOrigin="anonymous"  src={item.picture} alt="#"/>
                            
                        
          
          //<div> {item.description} </div>
                      
    
          <div style={{background: "rgba(60,13,153)"}}>
          <br/>
          <div className="container-fluid">
              <section className="tm-mb-1" id="about">
                  <div className="tm-row tm-about-row">
                  <div className="tm-section-1-l">
                <div className="mapouter">
                	<div className="gmap_canvas">
                    	<iframe width="600" height="500" id="gmap_canvas" src={"https://maps.google.com/maps?q="+item.Address+"&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
                </div>
                      <article className="tm-section-1-r tm-bg-color-8">
                          <h2 className="tm-mb-2 tm-title-color">{item.nom}</h2>
                          <p></p>
                          <Image  crossOrigin="anonymous"  src={item.picture} alt="#"/>
                          <p style={{color:"darkblue"}}>Description : {item.description}</p>
                          <p style={{color:"darkblue"}}>type :  {item.type}</p>
                          <p style={{color:"darkblue"}}>nbrpalacedispo : {item.nbrpalacedispo}</p>
                          <p style={{color:"darkblue"}}>Phone : {item.Phone}</p>
                          <p style={{color:"darkblue"}}>Address : {item.Address}</p>
                          <p style={{color:"darkblue"}}>DateDebut : {item.DateDebut}</p>
                          <p style={{color:"darkblue"}}>DateFin : {item.DateFin}</p>
                         
                      </article>
                  </div>
              </section>
              </div>
      
      </div>
        
    );
};

export default Evenementdetails;