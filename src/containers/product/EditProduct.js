import React, {Component} from 'react';
import './EditProduct.css';
import {editProduct} from '../../actions/product.actions';
import { connect } from 'react-redux';


class EditProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            product_name: "",
            weight: "",
            availability: "",
            price_range: "",
            price_tier: "",
            unit_cost: "",
            url: ""
        }

    }

    componentDidMount() {
        const props = this.props;
        if (props.location && props.location.state) {
            const product = props.location.state.product;
            
            this.setState({
                id: product._id,
                product_name: product.product_name,
                weight: product.weight,
                availability: product.availability,
                price_range: product.price_range,
                price_tier: product.price_tier,
                unit_cost: product.unit_cost,
                url: product.url
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onEdit(this.state);
    }

    handleOnValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="edit-product">
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.product_name} onChange={this.handleOnValueChange.bind(this)} name="product_name" placeholder="Enter product name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.weight} onChange={this.handleOnValueChange.bind(this)} name="weight" placeholder="Enter weight" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.availability} onChange={this.handleOnValueChange.bind(this)} name="availability" placeholder="Enter availability" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.price_tier} onChange={this.handleOnValueChange.bind(this)} name="price_tier" placeholder="Enter price tier" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.price_range} onChange={this.handleOnValueChange.bind(this)} name="price_range" placeholder="Enter price range" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.unit_cost} onChange={this.handleOnValueChange.bind(this)} name="unit_cost" placeholder="Enter unit cost" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.url} onChange={this.handleOnValueChange.bind(this)} name="url" placeholder="Enter unit url" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <button type="button" className="btn btn-danger">
                            Cancel
                        </button>
                    </div>
                </form>
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
        onEdit: (product) => {
            dispatch(editProduct(product));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (EditProduct);

