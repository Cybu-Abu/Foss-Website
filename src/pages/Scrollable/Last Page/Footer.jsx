import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="bg-[#153885] w-full">
          <div className="flex flex-row  justify-between px-30 py-15 my-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-sm font-medium">
                Foss Cell GECBH
              </h1>
              <p className="text-[10px] text-white font-light">
                At FOSS Cell GECBH, we empower <br />
                aspiring developers through <br />
                learning, collaboration, and <br />
                open-source contributions.{" "}
              </p>
              <div className="text-white flex flex-row gap-2">
                <Twitter size={15} />
                <Linkedin size={15} />
                <Github size={15} />
                <Instagram size={15} />
              </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <h1 className="text-white text-sm font-medium"> Quick Links</h1>
              <Link className="text-[10px] text-white font-light"> About</Link>
              <Link className="text-[10px] text-white font-light">
                {" "}
                Projects
              </Link>
              <Link className="text-[10px] text-white font-light"> Events</Link>
              <Link className="text-[10px] text-white font-light"> Join</Link>
              <Link className="text-[10px] text-white font-light">
                {" "}
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-sm font-medium"> Resources</h1>
              <p className="text-[10px] text-white font-light">
                Getting Started
              </p>
              <p className="text-[10px] text-white font-light">Documentation</p>
              <p className="text-[10px] text-white font-light">Guidlines</p>
              <p className="text-[10px] text-white font-light">
                Code of Conduct
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-sm font-medium"> Contact Info</h1>
              <p className="text-[10px] text-white font-light">
                Government Engineering College, Barton Hill, Barton Hill Colony,{" "}
                <br />
                Kunnukuzhy, Thiruvananthapuram, <br />
                Kerala 695035
              </p>

              <p className="text-[10px] text-white font-light">
                Phone: +91 00000 00000
              </p>

              <p className="text-[10px] text-white font-light">
                Email: fosscellgecbh@gmail.com
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
