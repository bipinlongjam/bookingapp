import { Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>} />
          <Route path='/login' element={<LoginPage/>}/> 
        </Route>
      </Routes>
    </div>
  
  );
}

export default App;
