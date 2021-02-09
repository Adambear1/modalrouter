import React from 'react'
import {Cart} from "react-bootstrap-icons"
function Jumbotron() {
    return (
        <div class="p-5 text-center bg-light">
        <h1 class="mb-3">Personal Collection</h1>
        <h4 class="mb-3">Create A Collection of Your Personal Favorites!</h4>
        <a class="btn btn-primary" href="" role="button"><Cart width="40" height="40" /></a>
      </div>
    )
}

export default Jumbotron
