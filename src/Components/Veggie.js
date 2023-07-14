import {Splide,SplideSlide} from "@splidejs/react-splide";
import styled from "styled-components"
import "@splidejs/splide/dist/css/splide.min.css"
import {useEffect,useState} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Veggie () {
    const [veggie,setVeggie] = useState([])

    useEffect (() => {
        getVeggie()
    },[])
    
        const getVeggie = async () => {
            
            const check = localStorage.getItem('veggie')                    //if there is nothing in localStorage we'll set it
             if(check){                                                       //if there is an item in LS,then save it no need to refetch
                setVeggie(JSON.parse(check))
             } else{                                                          //else fetch
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
                const data = await api.json();
                localStorage.setItem("veggie",JSON.stringify(data.recipes))
                setVeggie(data.recipes)
             }  
            
}                   
    return (
        <div>
        <Wrapper>
            <h4>Vegetarian</h4>
            <Splide options={{
                perPage:3,
                arrows:false,
                pagination:false, /*dots below image*/
                drag:'free',    /*we can move oe slide easily*/
                gap:'2rem'
            }}>
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                            <Link to = {'/recipe/'+recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt ={recipe.title}/>
                                <Gradient/>
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
       </div>
    );
 }
/*replacing div with a wraper*/ 
/* to get the title above image z index is used*/ 

 const Wrapper = styled.div`            
  margin: -10rem 0rem;
  `;
  const Card = styled.div`
  min-height:130px;
  position:relative;

  img{
    position:absolute;
    width:100%;
    height:100%;
    object-fit:cover;
    left:0;
  }
  p{
    position:absolute;
    z-index:10;            
   left:50%;
   bottom:0%;
   color:white;
   transform:translate(-50%,0%);
   width:100%;
   text-align:center;
   font-weight:500;
   height:40%;
   display:flex;
   justify-content:center;
   align-items:center;
  }
  `;
const Gradient = styled.div`
   z-index:3;
   position:absolute;
   width:100%;
   height:100%;
   background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`
