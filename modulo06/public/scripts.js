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
    uploadLimit: 6,
    handleFileInput(event){        
        const {files: fileList} = event.target
        const {uploadLimit} = photosUpload
        if(fileList.length > uploadLimit){
            alert(`Envie no máximp ${uploadLimit} fotos`)
            event.preventDefault()
            return
        }

        
    }
}
