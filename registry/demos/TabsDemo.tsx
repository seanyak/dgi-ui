'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function TabsDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <h2>Tabs Component</h2>
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1" variant="underline">Resources</TabsTrigger>
          <TabsTrigger value="tab2" variant="underline">Groups</TabsTrigger>
          <TabsTrigger value="tab3" variant="underline">Events</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p>Find a variety of homeschooling resources.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p>Connect with local and online homeschooling groups.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p>Check out upcoming homeschooling events and activities.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
