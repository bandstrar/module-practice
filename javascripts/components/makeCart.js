import {cartDom} from './cartDOM.js';
import {modalDom, chargeIt, showCartItems} from './modalDOM.js';
import {setCart} from './../helpers/data/cartData.js';

const makeCart = () => {
    $("#cart").html(
      `${cartDom()}
      ${modalDom()}`
      );
      $('#charge-it').click(() => {
        const ccNum = $('#credit-card').val();
        chargeIt(ccNum);
      })
  
      showCartItems();
  }
  
  const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
  
    cartButton.on('click', () => {
      setCart(array[index]);
      makeCart();
    })
  }

  export {addToCart};