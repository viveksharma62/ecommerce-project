import './App.css';
import Footer from './customer/components/Footer/Footer';
import  Navigation  from './customer/components/Navigation/Navigation';
// import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
// import HomePage from './customer/pages/HomePage/HomePage';

const App =() => {
    return (
      <div className="">
       <Navigation />
       <div>
         {/* <HomePage/> */}
         {/* <HomeSectionCorouseldemo /> */}
        <ProductDetails />
        {/* <Product/> */}
       </div>
       <Footer/>
        </div>
    );
  }

  export default App;

  //03:28