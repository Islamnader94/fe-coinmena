import React , { Component } from 'react';
import ProductsList from '../../components/product/ListProduct'
import {connect} from 'react-redux';

class ListProduct extends Component {
    constructor(props) {
        super(props);
    }

    handleEditProduct(product) {
        this.props.history.push({
            pathname: `/edit-products/${product._id}`,
            state: {
                product: product,
            }
        });
    } 

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Weight</th>
                            <th>Availability</th>
                            <th>URL</th>
                            <th>Price Tier</th>
                            <th>Price Range</th>
                            <th>Unit Cost</th>
                            <th>Is Editable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => {
                                return (
                                    <ProductsList 
                                    key={product._id} 
                                    product={product} 
                                    onEdit={this.handleEditProduct.bind(this)}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        products: state.productsData.products || [],
    };
};

export default connect(mapStateToProps, null)(ListProduct);