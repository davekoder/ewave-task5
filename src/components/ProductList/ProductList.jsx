import React from 'react'
import products from '../../json/products.json'

const ProductList = () => {
  const prices = []

  const reduce = (total, num) => {
    return total + num
  }

  const computeTotalCost = () => {
    products.products.map((p, i) => prices.push(p.price))
  }
  computeTotalCost()

  return (
    <div>
      <h2>This is the listing</h2>

      <div className='breakdown'>
        <h3>Total Quantity: {products.products.length} Items</h3>
        <h3>Total Cost: ${prices.reduce(reduce, 0)}</h3>
      </div>

      <div className='table'>
        <table>
          <thead>
            <th>
              <h5>ID</h5>
            </th>
            <th>
              <h5>Item Name</h5>
            </th>
            <th>
              <h5>Category</h5>
            </th>
            <th>
              <h5>Price</h5>
            </th>
            <th>
              <h5>Manufacturer</h5>
            </th>
            <th>
              <h5>Production Date</h5>
            </th>
          </thead>
          <tbody>
            {products.products.map((p, i) => (
              <tr key={i}>
                <td>
                  <p>{p.id}</p>
                </td>
                <td>
                  <p>{p.itemName}</p>
                </td>
                <td>
                  <p>{p.category}</p>
                </td>
                <td>
                  <p>${p.price}</p>
                </td>
                <td>
                  <p>{p.manufacturer}</p>
                </td>
                <td>
                  <p>{p.productionDate}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductList
