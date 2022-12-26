const adviceNumber = document.getElementById('adviceNumber')
const advice = document.getElementById('advice')
const msg = document.getElementById('msg');
function ShowMsg() {
    const para = document.createElement('p');
    para.innerText = "Click below Neon Button";
    para.style.color = ' hsl(150, 100%, 66%)';
    para.style.margin = '0.4rem 0';
    para.style.fontSize = '17px';
    para.style.textAlign = 'center';
    msg.appendChild(para);
    setTimeout(() => {
        msg.removeChild(para)
    }, 3000);
}

const generator = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then(response => {
            console.log(response.data.slip)
            adviceNumber.textContent = 'ADVICE #' + response.data.slip.id;
            advice.textContent = '"' + response.data.slip.advice + '"'
        }), error => {
            console.log(error);
        }
}