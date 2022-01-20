import Header from './components/Header';
import CustomerList from './components/CustomerList';
import Footer from './components/Footer';
import './App.css';
import CreateCustomer from './components/CreateCustomer';
import DetailCustomer from './components/DetailCustomer';
import {Route,Routes} from 'react-router-dom';
import UpdateCustomer from './components/UpdateCustomer';
function App() {
  const title="고객관리"
 
  return (
    <div className="App">
        <Header title={title}/>
        <div className='custents'>
        <Routes>
          <Route path="/" element={<CustomerList />}/>
          <Route path="/create" element={<CreateCustomer/>} />
          <Route path="/customer/:id" element={<DetailCustomer />} />
          <Route path="/edit/:id" element={<UpdateCustomer />} />
        </Routes>
        </div>
        
        <Footer title={title}/>
    </div>
  );
}

export default App;
