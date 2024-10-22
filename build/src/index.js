const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.bar-menu')
const phoneIcon = document.querySelector('#phone-icon')
const emailIcon = document.querySelector('#email-icon')
const html = document.documentElement
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
document.querySelectorAll('.bar-menu a').forEach((link) =>
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
)
document.querySelector('.bar-menu img').addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
})

const theme = document.querySelectorAll('.theme')
const icons = document.querySelectorAll('.theme-icon')
let localStorageTheme = localStorage.getItem('theme')
if (localStorageTheme) {
    html.classList.remove('lg:no-scrollbar')
    html.classList.add('lg:scrollbar-thumb-slate-950')
    html.classList.add('lg:scrollbar-track-slate-400')
    html.classList.add('lg:scrollbar-thin')
    html.classList.add(localStorageTheme)
    document.querySelector('body').style.backgroundColor = '#1e293b'
    phoneIcon.setAttribute('src', './../public/phone-light.svg')
    emailIcon.setAttribute('src', './../public/gmail-light.svg')
} else {
    html.classList.add('lg:no-scrollbar')
    html.classList.remove('lg:scrollbar-thumb-slate-950')
    html.classList.remove('lg:scrollbar-track-slate-400')
    html.classList.remove('lg:scrollbar-thin')
    document.querySelector('body').style.backgroundColor = '#f0fdfa'
    phoneIcon.setAttribute('src', './../public/phone.svg')
    emailIcon.setAttribute('src', './../public/gmail-svgrepo-com.svg')
}
if (localStorageTheme)
    icons.forEach((icon) => icon.setAttribute('src', './../public/light.svg'))
theme.forEach((Theme) =>
    Theme.addEventListener('click', () => {
        const img = Array.from(Theme.children).at(0)
        if (html.classList.contains('dark')) {
            html.classList.remove('lg:scrollbar-thumb-slate-950')
            html.classList.add('lg:no-scrollbar')
            html.classList.remove('lg:scrollbar-track-slate-400')
            html.classList.remove('lg:scrollbar-thin')

            document.querySelector('body').style.backgroundColor = '#f0fdfa'
            localStorage.setItem('theme', '')
            phoneIcon.setAttribute('src', './../public/phone.svg')
            emailIcon.setAttribute('src', './../public/gmail-svgrepo-com.svg')
            img.setAttribute('src', './../public/dark.svg')
        } else {
            html.classList.remove('lg:no-scrollbar')
            html.classList.add('lg:scrollbar-thumb-slate-950')
            html.classList.add('lg:scrollbar-track-slate-400')
            html.classList.add('lg:scrollbar-thin')
            localStorage.setItem('theme', 'dark')
            document.querySelector('body').style.backgroundColor = '#1e293b'

            phoneIcon.setAttribute('src', './../public/phone-light.svg')
            emailIcon.setAttribute('src', './../public/gmail-light.svg')
            img.setAttribute('src', './../public/light.svg')
        }
        html.classList.toggle('dark')
    })
)
const hero = document.querySelector('#home')
const service = document.querySelector('#service')
const skill = document.querySelector('#skill')
const contact = document.querySelector('#contact')
const imgContainer = document.querySelector('#hero-img-c')
const heroStuff = document.querySelector('#hero-stuff')
const dev = document.querySelector('#dev')
const svgCircle1 = document.querySelector('#c1')
const svgCircle2 = document.querySelector('#c2')
const svgCircle3 = document.querySelector('#c3')
const svgCircle4 = document.querySelector('#c4')
const circleLabels = document.querySelectorAll('.circle-label')
const progressBar = document.querySelectorAll('.progressRep')
const pecentageValue = document.querySelectorAll('.percentage')
pecentageValue.forEach((percentV) => (percentV.textContent = '0%'))
circleLabels.forEach((label) => (label.textContent = '0%'))
const figmaPercentage = 65
const graphicsPercentage = 85
const photoPercentage = 92
const circle1 = 0.75
const circle2 = 0.5
const circle3 = 0.8
const circle4 = 1
const sheet = document.styleSheets[0]

function updateKeyframeVariable(newWidthPercentage, id) {
    const element = document.getElementById(id)

    element?.style.setProperty('--dynamic-width', `${newWidthPercentage}%`)
}
function updateKeyframeVariable2(circleValue, id) {
    const element = document.getElementById(id)
    const newValue = 472 - 472 * circleValue
    element?.style.setProperty('--dynamic-offset', `${newValue}%`)
}
updateKeyframeVariable(figmaPercentage, 'figma-progress-rep--Value')
updateKeyframeVariable(graphicsPercentage, 'graphics-progress-rep--value')
updateKeyframeVariable(photoPercentage, 'photo-progress-rep--value')
updateKeyframeVariable2(circle1, 'c1')
updateKeyframeVariable2(circle2, 'c2')
updateKeyframeVariable2(circle3, 'c3')
updateKeyframeVariable2(circle4, 'c4')
function counter() {
    let counter1 = 0,
        counter2 = 0,
        counter3 = 0
    const figamTimer = setInterval(
        () => {
            counter1++
            pecentageValue[0].textContent = `${counter1}%`
            counter1 === figmaPercentage && clearInterval(figamTimer)
        },
        Math.round(2000 / figmaPercentage)
    )
    const graphicsTimer = setInterval(
        () => {
            counter2++
            pecentageValue[1].textContent = `${counter2}%`
            counter2 === graphicsPercentage && clearInterval(graphicsTimer)
        },
        Math.round(2000 / graphicsPercentage)
    )
    const photoTimer = setInterval(
        () => {
            counter3++
            pecentageValue[2].textContent = `${counter3}%`
            counter3 === photoPercentage && clearInterval(photoTimer)
        },
        Math.round(2000 / photoPercentage)
    )
}
function counter2() {
    let counter1 = 0,
        counter2 = 0,
        counter3 = 0,
        counter4 = 0
    const circle1Counter = setInterval(
        () => {
            counter1++
            circleLabels[0].textContent = `${counter1}%`
            counter1 === circle1 * 100 && clearInterval(circle1Counter)
        },
        Math.round(2000 / (circle1 * 100))
    )
    const circle2Counter = setInterval(
        () => {
            counter2++
            circleLabels[1].textContent = `${counter2}%`
            counter2 === circle2 * 100 && clearInterval(circle2Counter)
        },
        Math.round(2000 / (circle2 * 100))
    )
    const circle3Counter = setInterval(
        () => {
            counter3++
            circleLabels[2].textContent = `${counter3}%`
            counter3 === circle3 * 100 && clearInterval(circle3Counter)
        },
        Math.round(2000 / (circle3 * 100))
    )
    const circle4Counter = setInterval(
        () => {
            counter4++
            circleLabels[3].textContent = `${counter4}%`
            counter4 === circle4 * 100 && clearInterval(circle4Counter)
        },
        Math.round(2000 / (circle4 * 100))
    )
}
function callBackFun(bars) {
    if (bars[0].isIntersecting) {
        counter()
        counter2()
        skill.classList.add('show')
        bars.forEach((bar) => barObserver.unobserve(bar.target))
    }
}
const opt = {
    root: null,
    threshold: 0.2,
    rootMargin: '0px',
}
const barObserver = new IntersectionObserver(callBackFun, opt)
barObserver.observe(progressBar[0])

function callBack(entries) {
    entries.forEach((entry) => {
        console.log(entry.target.id)
        if (entry.isIntersecting) {
            if (entry.target.id === 'home') {
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
            }
            if (entry.target.id === 'contact') {
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
            }
            if (entry.target.id === 'service') {
                entry.target.classList.add('loaded')
                serviceObserver.unobserve(entry.target)
            }
            if (entry.target.id === 'dev') {
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
            }
        }
    })
}
const options = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px',
}
const option2 = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
}
const observer = new IntersectionObserver(callBack, options)
const serviceObserver = new IntersectionObserver(callBack, option2)
observer.observe(hero)
observer.observe(contact)
serviceObserver.observe(service)

const smallArr = []
const lgArr = []
Array.from(document.querySelector('#small-nav-menu').children).forEach((list) =>
    smallArr.push(Array.from(list.children).at(0))
)
Array.from(document.querySelector('#nav-menu').children).forEach((list) =>
    lgArr.push(Array.from(list.children).at(0))
)

const sections = Array.from(document.querySelector('main').children)
function callBackSec(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            lgArr
                .find(
                    (link) =>
                        link.getAttribute('href') ===
                        '#' + entry.target.getAttribute('id')
                )
                ?.closest('li')
                .classList.add('activeLg')
            smallArr
                .find(
                    (link) =>
                        link.getAttribute('href') ===
                        '#' + entry.target.getAttribute('id')
                )
                ?.closest('li')
                .classList.add('activeLg')
        } else {
            smallArr
                .find(
                    (link) =>
                        link.getAttribute('href') ===
                        '#' + entry.target.getAttribute('id')
                )
                ?.closest('li')
                .classList.remove('activeLg')
            lgArr
                .find(
                    (link) =>
                        link.getAttribute('href') ===
                        '#' + entry.target.getAttribute('id')
                )
                ?.closest('li')
                .classList.remove('activeLg')
        }
    })
}
const optionsSec = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px',
}
const sectionObserver = new IntersectionObserver(callBackSec, optionsSec)
sections.forEach((section) => sectionObserver.observe(section))
const developer = 'Joe Alex'
function sendEmail() {
    // Get form values
    const fullName = document.getElementById('full-name').value
    const phoneNumber = document.getElementById('phone-number').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello ${developer},\n\nI am ${fullName} ${message}\nMy phone number is ${phoneNumber}`)}`

    window.location.href = mailtoLink
}
document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    sendEmail()
})
