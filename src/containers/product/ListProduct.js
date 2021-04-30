import React , { Component } from 'react';
import ProductsList from '../../components/product/ListProduct';
import {connect} from 'react-redux';
import {history} from '../../components/RouterComponent';
import {fetchProducts} from '../../actions/product.actions';

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: []
        }
    }

    componentDidMount() {
        let sessionProducts = sessionStorage.getItem('products') || ''
        let productsParse = ''
        if (sessionProducts !== '') {
            productsParse = JSON.parse(sessionProducts);
        }
        if (productsParse !== '') {
            this.setState({listProducts: productsParse})
        } else {
            this.props.onFetch();
            this.setState({listProducts: this.props.products})
        }
    }

    handleEditProduct(product) {
        history.push({
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
                            this.state.listProducts.map(product => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchProducts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);