import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                    <p>Welcome to Pedro's Pizzeria, nestled in the heart of downtown and a beloved local gem known for its mouthwatering, handcrafted pizzas. Since opening our doors, we've been dedicated to providing a warm and inviting atmosphere where families and friends can come together to enjoy great food. Our diverse menu features classic favorites like the traditional Margherita and innovative creations such as our signature BBQ chicken pizza, all made with the freshest ingredients. At Pedro's Pizzeria, we pride ourselves on exceptional customer service and a dining experience that keeps our guests coming back for more. Join us at Pedro's, where every pizza is a slice of happiness.</p>
            </div>
        </div>
    );
}

export default About;