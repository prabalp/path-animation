
  let mapFile='map.svg'
  let mapSVG, mapImage

  ajaxGet(mapFile).then(response=>{ // Load the SVG with an Ajax request.
    mapSVG=Array.from( // Makes a new array from...
      new DOMParser()
        .parseFromString(response,'image/svg+xml')
        .childNodes      // ...the NodeList we get from the parsed SVG file.
      )                       // It returns a handful of nodes, like <!doctype,
      .filter(node=>{         // but we only need the svg element, so we filter that
        let tag=node.tagName  // array looking for any elements ...
        if(typeof tag=='undefined')
          return false
        return tag.toLowerCase()==='svg' // ...that have the tag name svg...
      })[0] // ...and we get the first (and usually only) one.

    loadImage(mapFile).then(img=>{ // Then we load the image again,
      mapImage=img                 // this time as an `img` element.

    ...
