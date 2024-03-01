import React from 'react'
import { Accordion } from 'flowbite-react';
import faqs from '../assets/faqs.png'
import homebgsm from '../assets/homebgsm.png'

function FAQs() {
  return (
  <div className='pt-20'>
  <div style={{ backgroundImage: `url(${homebgsm})` }} className="pr-0 md:pr-52 bg-cover bg-center bg-no-repeat flex justify-center items-center pb-16">
   <div className='flex flex-col md:flex-row md:ml-52 items-center text-center'>
    <h1 className='text-5xl'>
      <span>We are here to </span> 
      <br />
      <span >help. Ask us </span> 
      <br/>
      <span >anything!</span>
    </h1>
    <img src={faqs} alt="" className='max-h-96 mx-auto mt-5' />
  </div>
  </div>
    <h1 className='mx-auto text-3xl font-bold  text-center p-5'>Frequently Asked Questions</h1>
      <Accordion collapseAll className='mr-5 ml-5'>
      <Accordion.Panel >
        <Accordion.Title >What is Unithink?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque amet sint id dolore harum nihil aliquid non totam eaque sequi. Delectus illum cumque a earum suscipit ex autem, accusamus maxime.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-700">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-700">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-700">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-700">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  )
}

export default FAQs