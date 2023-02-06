import { useState } from 'react'
import reactLogo from './assets/react.svg'

function Hello() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

function Example() {
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src={reactLogo} alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  )
}

const Image = () => {
  return (
    <div className="max-w-sm">
      <img className="max-wide:hidden w-full rounded-l-md" src="image-product-desktop.jpg" alt="cologne" />
      <img className="wide:hidden h-full rounded-t-md" src="image-product-mobile.jpg" alt="cologne" />
    </div>
  )
}

const Header = () => {
  return (
    <div className='wide:space-y-8 space-y-5'>
      <div className="wide:text-lg font-montserrat text-gray-400 tracking-[.50em]">PERFUME</div>
      <div className="wide:text-5xl text-4xl font-fraunces text-black">Gabrielle Essence Eau De Parfum</div>
      <div>
        A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL
      </div>
    </div>
  )
}

const Prices = () => {
  return (
    <div className="grid grid-cols-2 items-center wide:space-x-6">
      <h1 className="font-fraunces text-darkCyan font-bold text-4xl">$149.99</h1>
      <h1 className="text-dGreyishBlue line-through text-sm">$169.99</h1>
    </div>
  )
}

const Button = () => {
  return (
    <button className="bg-darkCyan py-5 w-full rounded-md text-white max-wide:h-14 flex items-center justify-center font-semibold text-lg">
      <img className="w-lg mx-4" src="icon-cart.svg" alt="icon-cart" />
      <p>Add to cart</p>
    </button>
  )
}

const Info = () => {
  return (
    <div className="wide:p-8 py-7 px-5 max-w-sm space-y-6 wide:space-y-10">
      <Header />
      <Prices />
      <Button />
    </div>
  )
}

const Product = () => {
  return (
    <div className="bg-white rounded-md grid wide:grid-cols-2">
      <Image />
      <Info />
    </div>
  )
}

function App() {
  // h-screen sets the height of the div to the size of the screen, so it will be centered in the middle of it 
  return (
    <div className="min-h-screen bg-creams flex items-center justify-center py-6 px-3">
      <Product />
    </div>
  )
}

export default App
