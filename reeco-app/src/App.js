import './App.css';
import Header from './Component/Header';
import OrderStatus from './Component/OrderStatus';
import OrderDetails from './Component/OrderDetails';
import DataCard from './Component/DataCard';

function App() {

  return (
    <>
    <Header/>
    <OrderStatus orderId="32457ABC" />
    <div className='data-area'>
    <OrderDetails />
    <DataCard/>
    </div>
    </>
  );
}

export default App;
