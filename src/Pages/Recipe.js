import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
//import '../App.css'

function Recipe () {
    
let params = useParams();
const [details,fetchDetails] = useState({});             //we are getting object not array,so {} is added
const [activeTab,setActiveTab] = useState("instructions");

const getDetails = async () => {
    const resp = await fetch(` https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await resp.json();
    fetchDetails(data)   
    console.log(data)             
};
 //dangerouslysetinnerhtml is used to remove the anchor tags
  useEffect (() => {
    getDetails();
  },[params.id])
  return (
    <Wrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}>Instructions</Button>

          <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}>Ingredients</Button>

          <Button
          className={activeTab === "summary" ? "active" : ""}
          onClick={() => setActiveTab("summary")}>Summary</Button>


        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map(({ id, original }) => (
              <li key={id}>{original}</li>
            ))}
          </ul>
        )}

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "summary" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          </div>
        )}
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10rem inherit 5rem;
  display: flex;

  
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  h2 {
    margin-top:210px;
    font-size:25px;
  }

  ul {
    margin-top: 150px;
  }
img{
  width:300px;
  height:300px;
  margin-top:20px;

}
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  p {
   position:relative;
   top:150px;
    font-size: 1.1rem;
    line-height: 1.5rem;

    &:first-child {
      margin-top: 2rem;
    }
  }
`;

const Button = styled.button`

  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  position:relative;
  top:150px;
`;

const Info = styled.div`
  margin-left: -15rem;
  position:relative;
 left:260px;
top:90px;
`;

export default Recipe;