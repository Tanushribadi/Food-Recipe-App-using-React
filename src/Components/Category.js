//import { FaHamburger } from "react-icons/fa";
import { GiChickenLeg,GiNoodles, GiFullPizza } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Category () {
  return (
    <List>
      <SLink to={"/cuisine/Indian"}>
        <GiChickenLeg />
        <h4>Indian</h4>
      </SLink>


      <SLink to={"/cuisine/Korean"}>
        <GiNoodles />
        <h4>Korean</h4>
      </SLink>

      <SLink to={"/cuisine/European"}>
        <GiFullPizza />
        <h4>European</h4>
      </SLink>
    </List>
  );
};
//here svg is used to make the changes in react icon 
const List = styled.div `
display:flex;
justify-content:center;
position:absolute;
top:98px;
right:550px;
margin:1rem 0rem;
`;
const SLink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin:1.5rem;
position:relative;
left:70px;
cursor:pointer;
text-decoration:none;
background:linear-gradient(35deg,#494949,#313131);
width:5rem;
height:5rem;
margin-top:0px;
transfrom:scale(0.8);

h4{
  color:white;
  font-size:0.8rem;
  margin-top:8px;
}
svg{
  color:white;
  font-size:1.5rem;
}
&.active{
  background:linear-gradient(to bottom ,#ff004f, #FFFF33);
}
`




//instead of using anchor tags to link,use navlink in react(it also gives the class called active)