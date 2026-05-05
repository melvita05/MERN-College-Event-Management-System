import React from 'react'
import EventCards from '../Component/EventCards'
import Swipers from '../Component/Swipers'
import Category from '../Component/Category'

export default function Events() {
  return (
    <div style={{background:"#2c3e50",overflow:"hidden"}}>
        <Swipers/>
        <Category/>
      <EventCards/>
    </div>
  )
}
