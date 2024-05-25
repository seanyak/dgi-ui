'use client'

import { useState } from 'react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '../ui/select'

export default function SelectDemo() {
  const [selectVal, setSelectVal] = useState('')

  return (
    <Select onValueChange={setSelectVal}>
      <SelectTrigger className='select-trigger'>
        <SelectValue placeholder='Select a homeschooling topic...' />
      </SelectTrigger>
      <SelectContent className='select-content'>
        <SelectGroup>
          <SelectLabel>Reasons for Homeschooling</SelectLabel>
          <SelectItem value='Personalized Education'>
            Personalized Education
          </SelectItem>
          <SelectItem value='Flexible Schedule'>
            Flexible Schedule
          </SelectItem>
          <SelectItem value='Safer Environment'>
            Safer Environment
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Methods of Homeschooling</SelectLabel>
          <SelectItem value='Classical Education'>
            Classical Education
          </SelectItem>
          <SelectItem value='Montessori Method'>
            Montessori Method
          </SelectItem>
          <SelectItem value='Unschooling'>
            Unschooling
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Popular Curriculum</SelectLabel>
          <SelectItem value='Abeka'>
            Abeka
          </SelectItem>
          <SelectItem value='Sonlight'>
            Sonlight
          </SelectItem>
          <SelectItem value='The Good and the Beautiful'>
            The Good and the Beautiful
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
