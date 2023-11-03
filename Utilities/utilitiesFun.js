function getAllControllsValues(){        
        return {
            s_val:  id_range_sepia.value, 
            o_val:  id_range_opacity.value,
            b_val:  parseInt(id_range_blur.value),
            hr_val: parseInt(id_range_hue_rotation.value),
        }
    }
    
    function getBlobData(fileName){
        return canvas.toBlob((blob) =>{
            const data = URL.createObjectURL(blob)
            tagA.href = data
            tagA.download = fileName
            URL.revokeObjectURL(data)
        })
    
    }    
    
    function getFileName(event){
        event.preventDefault();
        const file_name = document.getElementById("theFILE")
        const c_url = URL.createObjectURL(file_name.files[0])
        imgEl.src = c_url
        URL.revokeObjectURL(c_url)
    }
    
    function setOpacity(ctx, w, h){
    
        const { o_val } = getAllControllsValues()
        const image = ctx.getImageData(0, 0, w, h);
        let imageData =  {};
        imageData =  image.data,
        length = imageData.length;
        for(var i=3; i < length; i+=4){
            imageData[i] = (Math.floor(o_val));
        }
        image.data = imageData;
        ctx.clearRect(0, 0, w, h);
        ctx.putImageData(image, 0, 0);
    }

    function reset_filter(){
        const canvas = document.getElementById("root")
        let ctx = canvas.getContext("2d")

        const imgEl = document.createElement("img")
        const img = document.getElementById("imgID")
        document.getElementById("dnwLink").setAttribute("style", "color: red;")

        const w = img.width
        const h = img.height
        console.log(w,h);
    
        canvas.width  = w
        canvas.height = h

        document.getElementById("range_sepia").value = 0
        document.getElementById("range_blur").value = 0
        document.getElementById("range_opacity").value = 255
        document.getElementById("range_rotation").value = 0
        
        ctx.clearRect(0, 0, w, h)
        ctx.filter = `sepia(${0}) blur(${0}px) hue-rotate(${0}deg)`;
        ctx.drawImage(img, 0, 0, w, h)
    }