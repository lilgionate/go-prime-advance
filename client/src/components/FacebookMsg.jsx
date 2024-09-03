"use client";
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';


const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1859226754482792" chatSupport>
        <CustomChat pageId="101423728451383" minimized={true}/>
    </FacebookProvider> 
  )
}

export default FacebookMsg
