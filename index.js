const editor = grapesjs.init({
    container: "#editor",
    fromElement: true,
    width: "auto",
    StorageManager: false,

    blockManager: {
        appendTo: "#block"
    },

    layerManager: {
        appendTo: '#layers-container'
    },
    styleManager: {
        appendTo: "#style-view"
    },
    panels: {
        defaults: [{
            id: "basic-actions",
            el: ".panel__basic-actions",
            buttons: [{
                id: "visibility",
                active: true,
                className: "btn-toggle-borders",
                label: "<i class='bi bi-border'></i>",
                command: "sw-visibility"
            }]
        }, {
            id: "panel-devices",
            el: ".panel__devices", // Added dot before the class name
            buttons: [{
                id: "device-desktop",
                label: "<i class='bi bi-laptop'></i>", // Added a closing quote for the class name
                command: "set-device-desktop",
                active: true,
                togglable: false
            }, {
                id: "device-mobile",
                label: "<i class='bi bi-phone'></i>", // Added a closing quote for the class name
                command: "set-device-mobile",
                active: true,
                togglable: false
            }]
        }]
    },
    deviceManager: {
        devices: [{
            name: "Desktop",
            width: ""
        }, {
            name: "Mobile", // Changed "Desktop" to "Mobile" for the second device
            width: "320px",
            widthMedia: "480px"
        }]
    }
});


editor.BlockManager.add('Heading', {
    label: 'Heading',
    category: 'Typography',
    content: `<section>
          <h1 style="">paragraph</h1>
          </section>`
  })
  
  editor.BlockManager.add('Paragraph', {
    label: 'paragraph',
    category: 'Typography',
    content: `<section>
          <p style="">paragraph</p>
          </section>`
  })
  
  editor.BlockManager.add('Image', {
    label: 'Image',
    category: 'Media',
    content: {type:'image'}
  })
  
  editor.BlockManager.add('Video', {
    label: 'Video',
    category: 'Media',
    content: {type:'video'}
  })
  
  editor.BlockManager.add('Audio', {
    label: 'Audio',
    category: 'Media',
    content: `
              <audio controls>
                 <source src="" type="audio/ogg">
                 <source src="" type="audio/mpeg">
                 Your browser does not support the audio tag.
              </audio>
              `,
  })
  
  editor.BlockManager.add('Navbar', {
    label: 'Navbar',
    category: 'Navigation',
    content: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
      </span>
    </div>
  </nav>`
  })
  
  editor.BlockManager.add('Button', {
    label: 'Button',
    category: 'Navigation',
    content: `
    <button type="button" class="btn">Button</button>
    `,
  })