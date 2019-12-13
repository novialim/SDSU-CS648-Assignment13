import React, { Component } from 'react'

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        }
    }
        
    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name
    
        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }

    handleSave(e) {
        this.props.onSave(this.state.product);
        // reset the form values to blank after submitting
        this.setState({
            product: Object.assign({}, RESET_VALUES), 
            errors: {}
        })
        // prevent the form submit event from triggering an HTTP Post
        e.preventDefault()
    }

    render () {
        return (
            <form>
                <h4>Add a new product</h4>
                <p>
                    <label>Name <br /> 
                    <input type="text" class="form-control" name="name" onChange={this.handleChange} value={this.state.product.name} /></label>
                </p>
                <p>
                    <label>Category <br /> 
                    <input type="text" class="form-control" name="category" onChange={this.handleChange} value={this.state.product.category} /></label>
                </p>
                <p>
                    <label>Price <br /> 
                    <input type="text" class="form-control" name="price" onChange={this.handleChange} value={this.state.product.price} /></label>
                </p>
                <input type="submit" class="btn btn-info" value="Save" onClick={this.handleSave}></input>
            </form>
        )
    }
}

export default ProductForm