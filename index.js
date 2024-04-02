const animate = (el, animationIn, animationOut, position) => {
    el.addEventListener('click', () => {
        el.style[position] = "0";
        el.classList.add(animationIn)
        setTimeout(() => {
            el.classList.add(animationOut)
            el.classList.remove(animationIn)
            setTimeout(() => {
                el.classList.remove(animationOut)
                el.style[position] = "-27%";
            }, 1200)
        }, 900)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const stepasLeft = document.querySelectorAll('.stepa-left');
    const stepasRight = document.querySelectorAll('.stepa-right');

    stepasLeft.forEach((stepaLeft) => {
        animate(stepaLeft, 'animate__slideInLeft', 'animate__slideOutLeft', 'left')
    })

    stepasRight.forEach((stepaRight) => {
        animate(stepaRight, 'animate__slideInRight', 'animate__slideOutRight', 'right')
    })


    // stepaLeft.addEventListener('click', () => {
    //     stepaLeft.style.left = "0";
    //     stepaLeft.classList.add('animate__slideInLeft')
    //     setTimeout(() => {
    //         stepaLeft.classList.add('animate__slideOutLeft')
    //         stepaLeft.classList.remove('animate__slideInLeft')
    //         setTimeout(() => {
    //             stepaLeft.classList.remove('animate__slideOutLeft')
    //             stepaLeft.style.left = "-27%";
    //         }, 1200)
    //     }, 900)
    // })

    // stepaRight.addEventListener('click', () => {
    //     stepaRight.style.left = "0";
    //     stepaRight.classList.add('animate__slideInLeft')
    //     setTimeout(() => {
    //         stepaRight.classList.add('animate__slideOutLeft')
    //         stepaRight.classList.remove('animate__slideInLeft')
    //         setTimeout(() => {
    //             stepaRight.classList.remove('animate__slideOutLeft')
    //             stepaRight.style.left = "-27%";
    //         }, 1200)
    //     }, 900)
    // })
})