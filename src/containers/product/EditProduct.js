import React, {Component} from 'react';
import {editProduct} from '../../actions/product.actions';
import { connect } from 'react-redux';
import './EditProduct.css'


class EditProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            product_name: "",
            weight: "",
            availability: "",
            price_range: "",
            price_tier: "",
            unit_cost: "",
            url: "",
            isEditable: false
        }

    }

    componentDidMount() {
        const props = this.props;
        if (props.location && props.location.state) {
            const product = props.location.state.product;
            this.setState({
                _id: product._id,
                product_name: product.product_name,
                weight: product.weight,
                availability: product.availability,
                price_range: product.price_range,
                price_tier: product.price_tier,
                unit_cost: product.unit_cost,
                url: product.url,
                isEditable: product.isEditable
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

    onRadioChange(e) {
        this.setState({
            price_tier: e.target.value
        });
      }

    onCheckBoxChange(e) {
        this.setState({isEditable: !this.state.isEditable})
    }

    render() {
        return (
            <div className="edit-product">
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.product_name} onChange={this.handleOnValueChange.bind(this)} name="product_name" placeholder="Enter product name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.weight} onChange={this.handleOnValueChange.bind(this)} name="weight" placeholder="Enter weight" required />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" value={this.state.availability} onChange={this.handleOnValueChange.bind(this)} name="availability" placeholder="Enter availability" />
                    </div>
                    <div className="form-group switch-field">
                        <ul>
                            <li>
                            <label>
                                <input
                                type="radio"
                                value="budget"
                                checked={this.state.price_tier === "budget"}
                                onChange={this.onRadioChange.bind(this)}
                                />
                                <span>Budget</span>
                            </label>
                            </li>

                            <li>
                            <label>
                                <input
                                type="radio"
                                value="premium"
                                checked={this.state.price_tier === "premium"}
                                onChange={this.onRadioChange.bind(this)}
                                />
                                <span>Premier</span>
                            </label>
                            </li>
                        </ul>
                    </div>
                    <div className="form-group">
                    {this.state.price_tier ===  'budget' ?(
                    <select  className="form-control" value={this.state.price_range} onChange={this.handleOnValueChange.bind(this)} name="price_range" required>
                        <option value="$1-10">$1-10</option>
                        <option value="$11-20">$11-20</option>
                        <option value="$20-50">$20-50</option>
                    </select>
                        ) : (
                        <select  className="form-control" value={this.state.price_range} onChange={this.handleOnValueChange.bind(this)} name="price_range" required>
                            <option value="$50-99">$50-99</option>
                            <option value="$100-199">$100-199</option>
                            <option value="$200+">$200+</option>
                        </select>
                    )}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.unit_cost} onChange={this.handleOnValueChange.bind(this)} name="unit_cost" placeholder="Enter unit cost" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.url} onChange={this.handleOnValueChange.bind(this)} name="url" placeholder="Enter unit url" required />
                    </div>
                    <div>
                        <label>
                        Is Editable:
                        <input
                            name="isEditable"
                            type="checkbox"
                            className="check-box"
                            checked={this.state.isEditable}
                            value={this.state.isEditable}
                            onChange={this.onCheckBoxChange.bind(this)} />
                        </label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
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

