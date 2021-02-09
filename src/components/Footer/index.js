import React from 'react'

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">

  <div className="text-center p-3">
    © {new Date().getFullYear()} Copyright: {"   "}
    <a className="text-dark" href="http://adambirgenheier.com/">AdamBirgenheier.com</a>
  </div>
</footer>
    )
}

export default Footer
