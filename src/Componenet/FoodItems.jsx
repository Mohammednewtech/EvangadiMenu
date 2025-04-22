import React from 'react';
import Menu from '../commonResource/data';

class FoodItems extends React.Component {
    render() {
        return (
            <div className="all-container">
                <header className="title">
                    <h1>Evangadi Menu</h1>
                    <div></div>
                </header>
                <div className="foods-container">
                    {Menu.map((menuItems, index) => {
                        return (
                            <div key={index} className="single-food">
                                <div className="img">
                                    <img src={menuItems.img} alt={menuItems.title} />
                                </div>
                                <div className="title-price">
                                    <h3>{menuItems.title}</h3>
                                    <p>{menuItems.price}</p>
                                </div>
                                <div className="food-desc">
                                    <p>{menuItems.desc.substring(0,150)}</p> 
                                    {menuItems.link && <button>{menuItems.link}</button>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default FoodItems;