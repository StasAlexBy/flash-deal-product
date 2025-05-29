## 🧩 Flash Deal Product (Shopify Theme App Extension)

This Shopify theme extension renders a "deal of the day" section with customizable visuals and interactive behavior.

### 🎯 Features

- Displays a selected **product** with:
  - Image, title, and price
  - "Add to Cart" button with custom JS handling (`/cart/add.js`)
  - Optional background image (`discount_bg`) with adjustable **opacity**
  - Custom **metafield** `discount_note` shown as rich text
- Clicking the discount note **copies** its contents to clipboard
- Automatically updates the **mini-cart bubble count** after adding to cart
- Uses custom **Tailwind CSS** styling via `tailwind.css` asset

### ⚙️ Section Settings

| Setting ID              | Type            | Description                                 |
|-------------------------|-----------------|---------------------------------------------|
| `product`               | `product`       | Choose the product to promote               |
| `discount_bg`           | `image_picker`  | Optional background image                   |
| `discount_bg_opacity`   | `range`         | Background overlay opacity (0–100)          |

### 📦 Requirements

- Metafield `product.metafields.custom.discount_note` (type: `rich_text`)
- Tailwind CSS must be compiled into `assets/tailwind.css`
- Cart icon element with id `#cart-icon-bubble` must exist in theme layout

### 📜 Example Liquid Usage

The section renders conditionally if a product is selected, and the JS handles:
- Copying text on click
- Adding to cart via fetch
- Updating the mini-cart bubble (even if it doesn't yet exist in DOM)

> All JavaScript is inline within the section for simplicity.

