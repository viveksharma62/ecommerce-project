import './App.css';
import Footer from './customer/components/Footer/Footer';
import  Navigation  from './customer/components/Navigation/Navigation';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';
// import HomePage from './customer/pages/HomePage/HomePage';
// import Card from './customer/components/Card/Card';
import Checkout from './customer/components/Checkout/Checkout';

const App =() => {
    return (
      <div className="">
       <Navigation />
       <div>
         {/* <HomePage/> */}
         {/* <HomeSectionCorouseldemo /> */}
        {/* <ProductDetails /> */}
        {/* <Product/> */}
        {/* <Card/> */}
        <Checkout/>
       </div>
       <Footer/>
        </div>
    );
  }

  export default App;

  //05:16