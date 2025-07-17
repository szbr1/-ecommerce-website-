import { Coins, Headset, MapPinCheck } from 'lucide-react'
import React from 'react'

function PoliciesHighlight() {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-16 gap-6 ">

        <div className="flex justify-center flex-col items-center">
            <Coins className="size-10 lg:size-14" />
            <h3 className="text-black">Easy Exhchange Policy</h3>
            <span className="text-gray-500">We offer hassle free exchange policy</span>
        </div>

        <div className="flex justify-center flex-col items-center">
            <MapPinCheck className="size-10 lg:size-14" />
            <h3 className="text-black">7 Day Return Policy </h3>
            <span className="text-gray-500">We provide 7 days free return policy</span>
        </div>

        <div className="flex justify-center flex-col items-center">
            <Headset className="size-10 lg:size-14" />
            <h3 className="text-black">Best customer support</h3>
            <span className="text-gray-500">we provide 24/7 customer support</span>
        </div>
        </div>
      </div>
  )
}

export default PoliciesHighlight