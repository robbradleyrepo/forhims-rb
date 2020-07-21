# PDP Hero

This module exports a connected component responsible for retrieving the current price of the indicated product and dispatching actions for adding the product to the cart where appropriate.

## Props

`titlePartOne` (String) - First part of the styled heading
`titlePartTwo` (String) - Second part of the styled heading
`productDetails` (Array) - List of product detail items

- `label` (String) - Label for the product detail
  `images`: (Array) - List of images for each breakpoint for the Hero image
  `description` (String) - Product description
  `addToCartButtonLabel` (String) - Label used on the buy button, accepts some placeholders for interpolation
- `{{price}}` - Current price of the product
  `productId` (String) - Product id for fetching price and adding to cartt
