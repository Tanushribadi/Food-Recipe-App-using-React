import React from 'react'
import {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'       //used to access parameters of current URL
import styled from 'styled-components'
export default function Searched () {
   
        const [searcheditem,setSearchedItem] = useState([]);
        let params = useParams();
    
            const getSearched = async (name) => {
                const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
                const data = await resp.json();
                setSearchedItem(data.results)
            };
        
            useEffect(() => {
              getSearched (params.search)                   //useeffect is used to invoke function (getcuisine)
                                             //params is used just to fetch all types(indian,italian,japanese...)
            },[params.search]);
            return (
                <Grid>
                    {searcheditem.map ((item) => {
                        return <Card key={item.id}>
                            <Link to = {'/recipe/'+item.id}>
                            <img src={item.image} alt=""/>
                            <h4>{item.title}</h4>
                            </Link>
                        </Card>
                        
                    })}
                </Grid>
    )
}

const Grid =styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
 
  grid-gap:20px;
  margin-top:250px;
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
