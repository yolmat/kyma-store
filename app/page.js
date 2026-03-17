'use client'

import { initMercadoPago } from '@mercadopago/sdk-react'
import { Payment } from '@mercadopago/sdk-react';
import { initialization, customization, onSubmit, onError, onReady } from './configs'
import logoDark from '@/public/kymaLight.png'
import Image from 'next/image';

const publicKey = process.env.NEXT_PUBLIC_KEY_TESTE

initMercadoPago(publicKey)

export default function MochileirosCheckout() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4 md:p-0">
      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 py-3 z-50">
        <Image src={logoDark} className='w-1/5' alt='Logo' />
        <div className="text-center font-semibold">Mochileiros 2.0</div>
        <div className="w-10" />
      </div>

      <div className="pt-16 md:pt-0 mx-auto">
        <div className="flex flex-col md:flex-row gap-6">

          {/* LEFT SIDE */}
          <div className="hidden md:flex md:w-[30%] md:h-screen bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 flex-col justify-center items-center text-center shadow-lg">
            <Image src={logoDark} alt='Logo' />
            <h1 className="text-2xl font-semibold">Mochileiros 2.0</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Evento exclusivo para exploradores modernos.
            </p>
          </div>

          {/* RIGHT SIDE - CHECKOUT */}
          <div className='w-full'>
            <Payment
              initialization={initialization}
              customization={customization}
              onSubmit={onSubmit}
              onReady={onReady}
              onError={onError}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

