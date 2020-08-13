const Mask = {
    apply(input, func){
        setTimeout(function(){
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatBRL(value){
        value = value.replace(/\D/g, "");
        return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value/100)
   
    }
}


const photosUpload ={
    preview:  document.querySelector('#photos-preview'),
    uploadLimit: 6,
    handleFileInput(event){        
        const {files: fileList} = event.target
        
        if(photosUpload.hasLimit(event)) return

        Array.from(fileList).forEach(file => {
           const reader = new FileReader()
           
           reader.onload = () =>{
                const image = new Image()
                image.src = String(reader.result) 

                const div = photosUpload.getContainer(image)
                photosUpload.preview.appendChild(div)               
           }
           reader.readAsDataURL(file)
        })
    },

    hasLimit(event){
        const {uploadLimit} = photosUpload
        const {files: fileList} = event.target
        if(fileList > uploadLimit){
            alert(`Envie no máximp ${uploadLimit} fotos`)
            event.preventDefault()
            return true
        }

        return false
    },

    getContainer(image){
        const div = document.createElement('div')
                div.classList.add('photo')

                div.onclick = photosUpload.removePhoto

                div.appendChild(image)

                div.appendChild(photosUpload.getRemoveButton())

                return div
    },
    getRemoveButton(){
        const button = document.createElement('i')
        button.classList.add('material-icons')
        button.innerHTML = "close"
        return button
    },
    removePhoto(event){
        const photoDiv = event.target.parentNode
        const photosArray = Array.from(photosUpload.preview.children)
        const index = photosArray.indexOf(photoDiv)

        photoDiv.remove();

    }
}
