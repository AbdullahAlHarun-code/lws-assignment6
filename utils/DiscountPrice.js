const discount_price = function discountPrice(originalPrice, discountPercentage) {
    // Calculate the discount amount
    const discountAmount = (originalPrice * discountPercentage) / 100;
    
    // Calculate the discounted price
    const discountedPrice = originalPrice - discountAmount;
    
    // Return the discounted price with two decimal places
    return discountedPrice.toFixed(2);
}


  export {discount_price}
  