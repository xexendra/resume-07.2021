const partsOfAnimation = document.querySelectorAll('.svg__animation');
const partsOfAnimationHidden = document.querySelectorAll('.svg__hover');
const partsOfMainText = document.querySelectorAll('.main div:not(:last-child)');
const main = document.querySelector('.main');
const tapes = document.querySelectorAll('.tapes g');

function checkIfHidden () {
    partsOfAnimation.forEach(e => {
        if (!e.classList.contains('hidden')) {
            e.classList.add('hidden')
        } else {
            e.classList.remove('hidden')
        };
    });
}

partsOfAnimationHidden.forEach(e => {
    e.addEventListener('mouseenter', checkIfHidden);
    e.addEventListener('mouseleave', checkIfHidden);
})

function openText (i) {
    if (partsOfMainText[i].classList.contains('hidden')) {
        partsOfMainText[i].classList.remove('hidden')
    };
}

function closeText (i) {
    if (!partsOfMainText[i].classList.contains('hidden')) {
        partsOfMainText[i].classList.add('hidden')
    };
}

tapes.forEach(tape => {
    tape[i].addEventListener('click', openText(i))
})
