const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')


const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]

function runColor() {
    function randomColor() {
        let color ='#'
        for (let i = 0; i < 6; i++ ){
            const randomNumber = Math.floor(Math.random() * values.length)
            const result = values[randomNumber]
            color += result
        }
        return color
    }
    randomColor()
    let color1 = randomColor()
    let color2 = randomColor()
    document.body.style.background = `linear-gradient(${220}deg, ${color1}, ${color2})`
}


runColor()

container.addEventListener('click', runColor)