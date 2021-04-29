import React from 'react';


const ListProduct = ({product, onEdit}) => {
    return (
        <tr key={product.id}>
        <td>{product._id}</td>
        <td>{product.product_name}</td>
        <td>{product.weight}</td>
        <td>{product.availability}</td>
        <td>{product.url}</td>
        <td>{product.price_tier}</td>
        <td>{product.price_range}</td>
        <td>{product.unit_cost}</td>
        {product.isEditable ? (
            <td>
                <button type="button" className='btn btn-success' onClick={() => onEdit(product)}>Edit</button>
            </td>
        ) : (
            <td></td>
        )}
    </tr>
    )
}
export default ListProduct