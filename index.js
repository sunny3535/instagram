// const express = require('express')
// const app = express()
// app.listen(8080, function() {
//   console.log('server start on 8080')
// })

// app.get('/', function(req, res) {
//   res.send('Hello')
// })

// document.writeln('ddd')

import { initializeDb} from './database.js'
import Bio from './modules/bio/Bio.js'
import addBioEventListeners from './modules/bio/events.js';
import Gallery from './modules/gallery/Gallery.js'
import { addGalleryEventListeners, addImagesToGallery }  from './modules/gallery/events.js'
import Nav from './modules/nav/Nav.js'

const App = async () => {
  return `
    ${Nav()}
    <div class="container">
      ${await Bio()}
      ${Gallery()}
    </div>
  `
}

initializeDb.onsuccess = async () => {
  document.getElementById('root').innerHTML = await App()
  addBioEventListeners()
  addGalleryEventListeners()
  addImagesToGallery()
}
