import Pages from './Pages/Pages'
import Category  from './Components/Category'
import Search from './Components/Search'
import { BrowserRouter } from 'react-router-dom';
function App(){
 
  return (
   <div className="app">
 <BrowserRouter>
  <Category/>
  <Pages/>
  <Search/>
  </BrowserRouter>
   </div>
    
  )
}
export default App;
