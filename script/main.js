filler.style.height = nav.offsetHeight+'px'

lmenuIcon.addEventListener('click', ()=>{
    if(ckMenu.checked == true){
        if(screen.width > 800){
        main.style.width = 'calc(100% - 19rem)'
        footer.style.width = 'calc(100% - 19rem)'
        }
        lmenu.style.marginLeft = "0px"            
    }
    else{
        footer.style.width= '100%'
        main.style.width= '100%'
        lmenu.style.marginLeft = "-19rem"            
    }
})