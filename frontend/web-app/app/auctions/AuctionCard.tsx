import Image from 'next/image';
import React from 'react'
import CountdownTimer from './CountdownTimer';
import CarImage from './CarImage';
import { Auction } from '../types';

type Props={
    auction:Auction
}

export default function AuctionCard(props:Props) {
  return (
    <a href='#' className='group'>
      <div className='relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden'>
         <CarImage imageUrl={props.auction.imageUrl}></CarImage>
         <div className='absolute bottom-2 left-2'>
          {/* <CountdownTimer auctionEnd={props.auction.auctionEnd}></CountdownTimer> */}
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <h3 className='text-gray-700'>
          {props.auction.make} {props.auction.model}</h3>
        <p>{props.auction.year}</p>
      </div>
    </a>
  )
}
