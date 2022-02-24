window.addEventListener('DOMContentLoaded', init);
const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
const spec = ['*', '/', '+', '-'];

function addOutput(e) {
    console.log(e.target);
    let char = e.target.val;
}

function init() {
    document.title = "JS Calculator"

    console.log('ready')
    let dec = false;
    let eva = false;
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);
    const output = document.createElement('input');
    output.setAttribute('type', 'text');
    output.classList.add('output');
    output.style.width = '100%';
    output.style.lineHeight = '50px';
    output.style.fontSize = '3em';
    output.style.textAlign = 'right';
    container.appendChild(output);
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = "100%";
    container.appendChild(main)
    opts.forEach(function(val) {
        // console.log(val);
        btnMaker(val, addOutput);
    })
    btnMaker('=', evalOutput);
    btnMaker('C', clrOutput);

    function evalOutput() {

        console.log('=');

        if (output.value === "") {
            output.style.border = 'red 1px solid';
        } else {
            output.value = eval(output.value);
            output.style.border = 'black 1px solid'
        }
    }

    function clrOutput() {
        output.value = ""
    }

    function btnMaker(txt, myFunction) {
        let btn = document.createElement('button')
        btn.setAttribute('type', 'button');
        btn.style.width = '23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = '1%';
        btn.style.fontSize = '2em'
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
        main.appendChild(btn);

    }


    function addOutput(e) {
        console.log(dec);
        console.log(e.target);
        let char = e.target.val;
        output.value += char;
        if (char == ".") {
            if (dec) {
                char = "";
                output.style.border = 'red 1px solid';
            } else if (eva) {
                output.style.border = 'red 1px solid';
            } else {
                dec = true;
                output.style.border = 'black 1px solid';
            }
            eva = spec.includes(char);

            if (eva) {
                dec = false;
            }
        }
    }


}