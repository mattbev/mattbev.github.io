class BlurryImageLoad{
    supportsCSSFilters(t){
        void 0===t&&(t=!1);
        const e=document.createElement("test");
        e.style.cssText=(t?"-webkit-":"")+"filter: blur(2px)";
        const s=0!=e.style.length,r=void 0===document.documentMode||document.documentMode>9;
        return s&&r
    }
    
    load(t=document.querySelectorAll(".blurry-load")){
        if(!this.supportsCSSFilters(!0)&&!this.supportsCSSFilters(!1))for(let e of t)e.src="",e.classList.add("no-blur"),e.classList.remove("blurry-load");
        for(let e of t){
            const t=new Image;t.src=e.getAttribute("data-large"),t.onload=()=>{e.src=t.src,e.classList.add("blur-out"),e.classList.remove("blurry-load")
                                                                              }
        }
    }
}

