import React from 'react'
import bedroom from "../assets/bedroom.jpg"
import groupofpeople from "../assets/groupofpeople.jpg"
import guyinred from "../assets/guyinred.jpg"
import spray from "../assets/spray.jpg"

function grid() {
    return (
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
            <img src={bedroom} class="col-start-1 row-start-1 rounded-lg" />
            <img src={guyinred} class="col-start-2 row-start-1 rounded-lg" />
            <img src={spray} class="col-start-1 row-start-2 rounded-lg" />
            <img src={groupofpeople} class="col-start-2 row-start-2 rounded-lg" />
        </div>

    )
}

export default grid