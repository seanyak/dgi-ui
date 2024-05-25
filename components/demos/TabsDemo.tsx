'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function TabsDemo() {
  return (
    <div className='tabs-demo'>
      <h2 className='tabs-title'>Homeschooling Information</h2>
      <Tabs defaultValue="tab1">
        <TabsList className='tabs-list'>
          <TabsTrigger value="tab1" className='tabs-trigger'>Why Homeschool?</TabsTrigger>
          <TabsTrigger value="tab2" className='tabs-trigger'>Methods</TabsTrigger>
          <TabsTrigger value="tab3" className='tabs-trigger'>Curriculum</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className='tabs-content'>
          <p>Discover the reasons why families choose to homeschool, including flexibility, customized education, and closer family bonds.</p>
        </TabsContent>
        <TabsContent value="tab2" className='tabs-content'>
          <p>Learn about different homeschooling methods such as Classical, Charlotte Mason, Montessori, and Unschooling, and find what works best for your family.</p>
        </TabsContent>
        <TabsContent value="tab3" className='tabs-content'>
          <p>Explore popular homeschooling curricula, including resources for various subjects and grade levels to help you create a comprehensive educational plan.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
