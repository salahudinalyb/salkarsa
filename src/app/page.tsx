import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="banner px-4 py-6 text-center lg:px-24 bg-z pt-24 justify-end space-y-12">
        <div className="container-banner lg:flex lg:flex-row  lg:text-left lg:items-center space-y-6">
          <div className="container-leading flex-1 space-y-6 lg:space-y-12">
            <div className="greetings">
              <p className="text-neutral-200 text-sm font-semibold lg:text-xl">Salahudin Al Ayubi,</p>
              <p className="text-xs  text-neutral-500 font-light lg:text-lg tracking-widest">UX and Interface Designer</p>
            </div>
            <div className="tagline text-neutral-200 text-2xl font-semibold lg:text-6xl tracking-norma">
              <h1>Unveil by Leveraging Design for your Business</h1>
            </div>
            <div className="container-button flex flex-col space-y-2 lg:lg lg:space-y-0 lg:space-x-4 lg:flex lg:flex-row">
              <button className="button text-xs px-4 py-3 rounded-lg text-doff transition duration-150 lg:text-lg lg:rounded-2xl flex-1 tracking-wider lg:flex-1 bg-neutral-200">My Works</button>
              <button className="button text-xs px-4 py-3 border border-neutral-200 hover:bg-neutral-200 rounded-lg text-neutral-200 hover:text-neutral-950 transition duration-150 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Contact Me</button>
            </div>
          </div>
          <div className="mockup lg:flex lg:flex-col">
            <Image src="/mock.png" width={3000} height={3000} alt="Logo Salkarsa" className=" lg:w-[600px]" />
          </div>
        </div>
      </section>

      <section className="works px-4 py-6 space-y-6 lg:px-24">
        <div className="title">
          <h1 className="text-neutral-200 text-xl font-semibold lg:text-4xl">Featured Project</h1>
          <p className="text-neutral-500 text-xs lg:text-lg">I drop here my selected project</p>
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
      </section>


      <section className="closing px-4 py-6 space-y-4 lg:flex lg:flex-row lg:items-center lg:px-24 lg:py-24">
        <div className="mockup lg:flex-1">
          <Image src="/mock.png" width={3000} height={3000} alt="Logo Salkarsa" className=" lg:w-[600px]" />
        </div>
        <h1 className="text-neutral-200 font-semibold lg:text-6xl tracking-normal lg:text-left text-center lg:flex-1 text-sm">Everything your objective the trully main goals is create a Useful, Usable, Desirable products</h1>
      </section>

      <section className="banner text-center text-neutral-900 py-6 space-y-6 lg:py-24 bg-neutral-900">
        <div className="body-banner px-4 lg:space-y-6">
          <h1 className="text-neutral-200 text-2xl font-semibold lg:text-6xl tracking-normal text-center lg:py-1">Looking for intriguing ideas to collaborate on?</h1>
          <p className="text-neutral-500 text-xs font-light lg:text-lg tracking-widest">Connect and let’s we collaborate now!</p>
        </div>
        <div className="container-button space-y-2 px-4">
          <button className="button text-xs bg-neutral-200 px-4 py-3 rounded-lg text-neutral-950 transition duration-150 lg:px-6 lg:py-4 lg:text-lg lg:rounded-2xl flex-1 tracking-wider">Contact Me</button>
        </div>
      </section>

      <footer className="footer px-4 py-4 text-neutral-500 text-center bg-neutral-800"><p className="text-xs font-ligh tracking-widest">Salahudin Al Ayubi©2023</p></footer>
    </>
  )
}