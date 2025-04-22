import React from 'react';
import '../App.css'
class FoodItemTwo extends React.Component {
    render() {
        //const { title, price, img, desc,link } = this.props;

        return (
            
           <div className='foods-container'>
            <div className="single-food">
                <div className="img">
                    <img src={this.props.img} alt={this.props.title} />
                </div>
                <div className="title-price">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.price}</p>
                </div>
                <div className="food-desc">
                    <p>{this.props.desc}</p>
                   {this.props.link && <button>{this.props.link}</button>}
                </div>
            </div>
            </div>
        );
    }
}

export default FoodItemTwo;
