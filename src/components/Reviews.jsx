import React from 'react'
import SectionTitle from './SectionTitle'
import Review from './Review'
import elonMuskImg from '../assets/elonMusk.jpeg';
import narendraModiImg from '../assets/narendraModi.jpeg';
import shahRukhKhanImg from '../assets/shahRukhKhan.jpeg';

const Reviews = (props) => {
  return (
    <div className="container">
        <SectionTitle mode={props.mode} title="Reviews" />
        <div className="container py-4 marketing">
            <div className="row">
                <Review mode={props.mode} imgSrc={elonMuskImg} name="Elon Musk" review="Just used the To Do List app to plan my day. Now, instead of just 'Buy milk,' I have 'Build hyperloop,' 'Colonize Mars,' and 'Buy flamethrowers for fun.' Highly recommend for aspiring space explorers!" />
                <Review mode={props.mode} imgSrc={narendraModiImg} name="Narendra Modi" review="Used this app to inaugurate 5 infrastructure projects, do 3 world tours, stop two World Wars and have a 🍵 chai with my BFF Gautum Adani. I was able to work 18 hours a day without any tonic due to this To-Do App." />
                <Review mode={props.mode} imgSrc={shahRukhKhanImg} name="Shah Rukh Khan" review="Used the To Do List app and suddenly my tasks are 'Romance in Switzerland before lunch,' 'Dance on a train roof by evening,' and 'Deliver an emotional monologue at night.' Truly makes every day a blockbuster!" />
            </div>
        </div>
    </div>
  )
}

export default Reviews
