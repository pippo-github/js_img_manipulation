window.addEventListener("load", () =>{
    document.getElementById("dnwLink").style['pointer-events'] = 'none';       

    
    imgEl = document.createElement("img")
    imgEl.id  = "imgID"
    imgEl.src =  "./def_img.jpg"
    document.getElementById("img_container").append(imgEl)
    
    img = document.getElementById("imgID")


    img.addEventListener("load", () =>{
        const w = img.width
        const h = img.height
        console.log(w,h);
    
        canvas.width  = w
        canvas.height = h
                
                id_range_sepia.addEventListener("change", (event) =>{
                    const { s_val, o_val, b_val, hr_val } = getAllControllsValues()
                    console.log(s_val);
                    ctx.filter = `sepia(${s_val}) blur(${b_val}px) hue-rotate(${hr_val}deg)`;
                    ctx.drawImage(imgEl, 0, 0 , w, h);
                    setOpacity(ctx, w, h);
                    getBlobData("imgOut_sepia");
                    document.getElementById("dnwLink").setAttribute("style", "color: green!important");                   
                    document.querySelector("#dnwLink").style.pointerEvents = "auto";       
                })
    
                id_range_hue_rotation.addEventListener("change", (event) =>{
                    const { s_val, o_val, b_val, hr_val } = getAllControllsValues()
                    console.log(hr_val);
                    ctx.filter = `sepia(${s_val}) blur(${b_val}px) hue-rotate(${hr_val}deg)`;
                    ctx.drawImage(imgEl, 0, 0 , w, h);
                    setOpacity(ctx, w, h);
                    getBlobData("imgOut_hRot");
                    document.getElementById("dnwLink").setAttribute("style", "color: green!important");                   
                    document.querySelector("#dnwLink").style.pointerEvents = "auto";       
                })
    
                id_range_blur.addEventListener("change", (event) =>{
                    const { s_val, o_val, b_val, hr_val } = getAllControllsValues()
                    console.log(b_val);
                    ctx.clearRect(0, 0, w, h);
                    ctx.filter = `sepia(${s_val}) blur(${b_val}px) hue-rotate(${hr_val}deg)`;
                    ctx.drawImage(imgEl, 0, 0 , w, h);
                    setOpacity(ctx, w, h);
                    getBlobData("imgOut_blur");
                    document.getElementById("dnwLink").setAttribute("style", "color: green!important");                   
                    document.querySelector("#dnwLink").style.pointerEvents = "auto";       

                })
    
                id_range_opacity.addEventListener("change", (event) =>{
                    const { s_val, o_val, b_val, hr_val } = getAllControllsValues()

                    ctx.filter = `sepia(${s_val}) blur(${b_val}px) hue-rotate(${hr_val}deg)`;
                    ctx.drawImage(imgEl, 0, 0 , w, h);
                    setOpacity(ctx, w, h);

                    ctx.filter = `sepia(${s_val}) blur(${b_val}px)`;

                    getBlobData("imgOut_opacity");
                    document.getElementById("dnwLink").setAttribute("style", "color: green!important");                   
                    document.querySelector("#dnwLink").style.pointerEvents = "auto";       

                })
                ctx.drawImage(imgEl, 0, 0 , w, h); 
            })
    
    
})

