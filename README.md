# Inventory Management System


## Table of Contents
- [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Installation

### Prerequisites
- Node.js: [Install Node.js](https://nodejs.org/)
- express.js: [Install express.js](https://expressjs.com/)
- prisma: [Install Prisma](https://www.prisma.io/)
- postgresql: [Install Postgresql](https://www.postgresql.org/)

### Steps

1. **Connect the postgre DB to servers .env file**
2. **Clone the repository:**
   ```bash
   git clone https://github.com/SadeeMsr/inventory-management-system
   cd server
   npm install
   npm start
## API Endpoints
### Products
- Create a product
  (Method: POST, 
  Endpoint: `/products` , 
  Handler: createProduct)
  
- Fetch All Products
  (Method: GET, 
 Endpoint: `/products`, 
 Handler: fetchProducts)

- Fetch a Product by ID
  (Method: GET, 
 Endpoint: `/products/:id` , 
 Handler: fetchProducts)


 - Update a Product by ID
  (Method: PUT, 
 Endpoint:` /products/:id`, 
 Handler: updateProduct)

  - Delete a Product by ID
  (Method: DELETE, 
 Endpoint: `/products/:id`, 
 Handler: deleteProduct)
