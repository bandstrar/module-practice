const makeCart = () => {
    $("#cart").html(
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