import React from 'react'
import Image from 'next/image'

function Blog() {
  return (
    <>
    <div className="blogs space-y-8 pt-24">
      <section className="blogs px-4 py-6 space-y-6 lg:px-24">
        <div className="title">
          <h1 className="text-neutral-200 text-xl font-semibold lg:text-4xl">To all Readers from my Experiences</h1>
          <p className="text-neutral-500 text-xs lg:text-lg">Just sharing and i hope useful for everyone</p>
        </div>

        <div className="list-card space-y-6 lg:flex lg:flex-row lg:space-y-0 lg:space-x-8">
          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>

          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail2.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200 text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>

          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail3.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200 text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>
        </div>

        <div className="list-card space-y-6 lg:flex lg:flex-row lg:space-y-0 lg:space-x-8">
          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>

          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail2.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200 text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>

          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail3.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200 text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>
        </div>

        <div className="list-card space-y-6 lg:flex lg:flex-row lg:space-y-0 lg:space-x-8">
          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>

          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail2.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200 text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>

          <div className="card space-y-3">
            <div className="cover-card rounded-xl overflow-hidden"><Image src="/thumbnail3.png" width={1000} height={1000} alt="Logo Salkarsa" /></div>
            <div className="footer-card leading-normal text-neutral-200 text-regular space-y-3">
              <div className="body-footer">
                <h1 className="text-neutral-200 font-semibold lg:text-2xl">Lorem Ipsum</h1>
                <p className="text-xs lg:text-base text-neutral-500 tracking-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure quia reprehenderit rerum. Quibusdam, id!</p>
              </div>
              <div className="container-footer-button flex">
                <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Continue Read</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer px-4 py-4 text-neutral-500 text-center bg-neutral-800"><p className="text-xs font-ligh tracking-widest">Salahudin Al Ayubi©2023</p></footer>
    </div>
    </>
      
  )
}

export default Blog

