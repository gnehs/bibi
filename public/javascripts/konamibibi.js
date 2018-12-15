(function () {
    //https://codepen.io/epilande/pen/owAnm?editors=0100#0
    let qty = 128
    let random = i => Math.floor(Math.random() * i)
    let containerClass = Math.random().toString(36).substring(2).replace(/\d+/g, '')
    let objectClass = Math.random().toString(36).substring(2).replace(/\d+/g, '')
    let keyframesName1 = Math.random().toString(36).substring(2).replace(/\d+/g, '')
    let keyframesName2 = Math.random().toString(36).substring(2).replace(/\d+/g, '')
    let injectCss = `
    .${containerClass} {
        position: fixed;
        z-index: 9999;
        width: 100vw;
        height: 100vh;
        top: 0;
        pointer-events: none;
    }
    .${objectClass} {
        width: var(--bibi-size);
        height: var(--bibi-size);
        line-height: var(--bibi-size);
        text-align: center;
        font-size: calc(var(--bibi-size) * .7);
        color: #F79513;
        border: calc(var(--bibi-size) * .06) solid #F79513;
        border-radius: 500em;
        font-family: noto;
        font-weight: bold;
        z-index: -1;
        bottom: 0;
        right: 0;
        position: fixed;
        box-shadow: 0 0 0 calc(var(--bibi-size) * .06) #f5b91d;
        background-color: #f5b91d;
        text-shadow: none;
        user-select: none;
        position: absolute;
        border-radius: 50%;
        transform: translateY(0) rotateX(0) rotateY(0);
    }
    @keyframes ${keyframesName1} {
        100% {
            transform: translateY(1000px) rotate(38deg);
            opacity: 0;
        }
    }
    @keyframes ${keyframesName2} {
        100% {
            transform: translateY(1000px) rotate(-38deg);
            opacity: 0;
        }
    }
    `
    for (i = 0; i < qty; i++) {
        let keyframes = () => {
            const r = [keyframesName1, keyframesName2]
            return r[Math.floor(Math.random() * r.length)]
        }
        injectCss += `.${objectClass}:nth-child(${i+1}){
         --bibi-size:  ${15+random(30)}px;
                 top:  ${-700+random(700)}px;
                left:  ${random(100)}%;
             opacity:  ${(random(50)+50)*0.01};
           animation:  ${15+random(55)}s ${keyframes()} linear infinite;
	    }`
    }
    var styleElem = document.createElement('style');
    styleElem.type = 'text/css';
    styleElem.appendChild(document.createTextNode(injectCss));
    document.getElementsByTagName('head')[0].appendChild(styleElem);

    var snow = document.createElement("div");
    snow.className = containerClass
    for (var i = 0; i < qty; i++) {
        let flake = document.createElement("div")
        let text = document.createTextNode('$');
        flake.appendChild(text)
        flake.className = objectClass
        snow.appendChild(flake)
    }
    document.body.appendChild(snow);
})();