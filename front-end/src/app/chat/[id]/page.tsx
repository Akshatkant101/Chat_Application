import ChatBase from '@/components/chat/ChatBase'
import { Socket } from 'node:dgram'
import React from 'react'

const chat = ({params}:{params:{id:string}}) => {
    console.log("The group id is",params.id)


  return (
    <div>
        <h1>hello i m chat</h1>
        <ChatBase/> 
    </div>
  )
}

export default chat