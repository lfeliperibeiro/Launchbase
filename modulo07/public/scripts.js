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
   
    },
    cpfCnpj(value) {
        if(value.length > 17)
            value = value.slice(0, -1)
        value = value.replace(/\D/g, "")
        // ckeck if is cpf or cnpj
        if(value.length > 11){
            value = value.replace(/(\d{2})(\d)/, "$1.$2")

            value = value.replace(/(\d{3})(\d)/, "$1.$2")

            value = value.replace(/(\d{3})(\d)/, "$1/$2")
            
            value = value.replace(/(\d{4})(\d)/, "$1-$2")

        } else {
            value = value.replace(/(\d{3})(\d)/, "$1.$2")
            
            value = value.replace(/(\d{3})(\d)/, "$1.$2")
            
            value = value.replace(/(\d{3})(\d)/, "$1-$2")
        }
        return value
    },
    cep(value) {
        if(value.length > 9)
            value = value.slice(0, -1);

        value = value.replace(/\D/g, "")
        value = value.replace(/(\d{5})(\d)/, "$1-$2")

        return value
    }
}


const photosUpload ={
    input: "",
    preview:  document.querySelector('#photos-preview'),
    uploadLimit: 6,
    files: [],
    handleFileInput(event){        
        const {files: fileList} = event.target
        photosUpload.input = event.target
        
        if(photosUpload.hasLimit(event)) return

        Array.from(fileList).forEach(file => {
            photosUpload.files.push(file)
           const reader = new FileReader()
           
           reader.onload = () =>{
                const image = new Image()
                image.src = String(reader.result) 

                const div = photosUpload.getContainer(image)
                photosUpload.preview.appendChild(div)               
           }
           reader.readAsDataURL(file)
        })
        photosUpload.input.files = photosUpload.getAllFiles()
    },

    hasLimit(event){
        const {uploadLimit, input, preview} = photosUpload
        const {files: fileList} = input
        
        if(fileList > uploadLimit){
            alert(`Envie no máximp ${uploadLimit} fotos`)
            event.preventDefault()
            return true
        }

        const photosDiv = []
        preview.childNodes.forEach(item =>{
            if(item.classList && item.classList.value == 'photo')
                photosDiv.push(item)
        })

        const totalPhotos = fileList.length + photosDiv.length

        if(totalPhotos > uploadLimit){
            alert("Você atingiu o limite máximo de fotos")
            event.preventDefault()
            return true
        }

        return false
    },
    getAllFiles(){
        const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer()

        photosUpload.files.forEach(file => dataTransfer.items.add(file))

        return dataTransfer.files
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

        photosUpload.files.splice(index, 1)
        photosUpload.input.files = photosUpload.getAllFiles()

        photoDiv.remove();
    },
    removeOldPhoto(event){
        const photoDiv = event.target.parentNode
        if(photoDiv.id){
            const removedFiles = document.querySelector('input[name="removed_files"]')
            if(removedFiles){
                removedFiles.value += `${photoDiv.id},`
            }
        }

        photoDiv.remove()
    }
}

const ImageGallery = {
    highlight: document.querySelector(".gallery .highlight > img"),
    previews: document.querySelectorAll('.gallery-preview img'),
    setImage(e){
        const { target } = e
        ImageGallery.previews.forEach(preview => preview.classList.remove("active"))
        target.classList.add("active")

        ImageGallery.highlight.src = target.src
        Lightbox.image.src = target.src
    }
}

const Lightbox = {
    target: document.querySelector('.lightbox-target'),
    image: document.querySelector('.lightbox-target img'),
    closeButton: document.querySelector('.lightbox-target a .lightbox-close'),
    open(){
        Lightbox.target.style.opacity = 1
        Lightbox.target.style.top = 0
        Lightbox.target.style.botton = 0
        Lightbox.closeButton.style.top = 0
    },
    close(){
        Lightbox.target.style.opacity = 0
        Lightbox.target.style.top = "-100%"
        Lightbox.target.style.botton = "initial"
        Lightbox.closeButton.style.top = "-80px"
    }


}

const Validate = {
    apply(input, func) {
        Validate.clearError(input)
        let results = Validate[func](input.value)
        input.value = results.value

        if(results.error)
            Validate.displayError(input, results.error)            
    },
    displayError(input, error) {
      const div = document.createElement('div')
      div.classList.add('error')
      div.innerHTML = error
      input.parentNode.appendChild(div)
      input.focus()
    },
    clearError(input) {
        const errorDiv = input.parentNode.querySelector(".error")
        if(errorDiv) 
        errorDiv.remove()
    },
    isEmail(value) {
        let error = null
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(!value.match(mailFormat))
        error = "Email invalido!"
        return {
            error,
            value
        }
    },
    isCpfCnpj(value){
        let error = null
        const cleanValues = value.replace(/\D/g, "")
        // 11.111.111/1111-1
        if(cleanValues.length > 11 && cleanValues.length !== 13) {
            error = "CNPJ incorreto!"
        }else if(cleanValues.length < 11 && cleanValues.length !== 15){
            error = "CPF incorreto"
        }
        return {
            error,
            value
        }
    },
    isCep(value) {
        let error = null
        const cleanValues = value.replace(/\D/g, "")
        if(cleanValues.length !== 8){
            error = "CEP incorreto"
        }
        return {
            error,
            value
        }
    }
}