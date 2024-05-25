import React from 'react';
import Card from '@/components/ui/card';

export default function CardDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <Card title="Math Resources" image="https://via.placeholder.com/150" className="card-primary">
        <p>Explore a variety of math resources, including lesson plans, worksheets, and interactive activities.</p>
      </Card>
      <Card title="Science Projects" image="https://via.placeholder.com/150" className="card-primary">
        <p>Discover exciting science projects and experiments to engage your homeschoolers.</p>
      </Card>
    </div>
  )
}