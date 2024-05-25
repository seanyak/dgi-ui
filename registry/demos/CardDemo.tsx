import React from 'react';
import Card from '@/components/ui/card';

const CardDemo = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-bold mb-6">Card Component</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card title="Math Resources" image="/images/dgiui_cardimg1.png" className="card-primary">
          <p>Explore a variety of math resources, including lesson plans, worksheets, and interactive activities.</p>
        </Card>
        <Card title="Science Projects" image="/images/dgiui_cardimg2.png" className="card-primary">
          <p>Discover exciting science projects and experiments to engage your homeschoolers.</p>
        </Card>
      </div>
    </div>
  );
};

export default CardDemo;
