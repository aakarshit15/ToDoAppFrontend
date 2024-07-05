import React from 'react'
import Feature from './Feature';
import SectionTitle from './SectionTitle';

const Features = (props) => {
  return (
    <div className="container px-4 py-5" id="hanging-icons">
        <SectionTitle mode={props.mode} title="Features" />
        <div className="row g-4 py-4 row-cols-1 row-cols-lg-3">
          <Feature mode={props.mode} title="Prioritize your tasks" description="Prioritize your tasks to enhance productivity and reduce stress. Focus on urgent and important activities first, ensuring efficient time management and achieving your goals effectively." />
          <Feature mode={props.mode} title="Stop Procastinating" description="Stop procrastinating to reclaim your time and boost productivity. Begin tasks immediately, break them into manageable parts, and set clear deadlines." />
          <Feature mode={props.mode} title="Boost Your Productivity" description="Boost your productivity by setting clear goals, prioritizing tasks, and minimizing distractions. Utilize time management techniques, take regular breaks, and stay organized." />
        </div>
      </div>
  );
}

export default Features
