import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
//import {motion} from 'framer-motion'             //for animations
import {Link,useParams} from 'react-router-dom'         //useparams is used to pull out the keyword from url(upwards)

const Cuisine = () => {
    const [cuisine,setCuisine] = useState([]);
const params = useParams ();

    const getCuisine = async (name) => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const data = await resp.json();
        setCuisine(data.results)
    };

    useEffect(() => {
      getCuisine (params.type)                   //useeffect is used to invoke function (getcuisine)
     console.log(params.type)                    //params is used just to fetch all types(indian,italian,japanese...)
    },[params.type]);
    return (
        <>
       <Grid>
        {cuisine.map((item) => {
            return <Card key={item.id}>
                <Link to = {'/recipe/'+item.id}>
                <img src={item.image} alt=""/>
                <h4>{item.title}</h4>
                </Link>
                </Card>

        })}
       </Grid>
       </>
    )
}

const Grid =styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-gap:15px;
 margin-top:200px;
`;

const Card = styled.div`
img{
    width:100%;
    
}
a{
    text-decoration:none;
}
h4{
    text-align:center;
    padding:1rem;
}
`

export default Cuisine;