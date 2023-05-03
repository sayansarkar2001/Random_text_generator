const input = document.getElementById("numberofwords");
const container = document.querySelector(".container")
let noOfwords;

const generateword = (n) => {

    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTWXYZ"

    for (let i = 0; i < n; i++) {

        let random = (Math.random() * letters.length).toFixed(0);

        text += letters[random]
    }

    return text;
}



const getdata = () => {

    noOfwords = Number(input.value)

    const para = document.createElement("P")

    let data = "";
    for (let i = 0; i < noOfwords; i++) {

        const randomNumber = (Math.random() * 15).toFixed(0)
        data += generateword(randomNumber)
        data += " ";
    }
    

    para.innerText = data

    para.setAttribute("class", "paras")

    container.append(para);
}

