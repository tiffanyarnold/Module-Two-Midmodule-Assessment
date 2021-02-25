document.addEventListener("DOMContentLoaded", () => {
    const roll = document.querySelector("#rollthedice");
    let rollTwo;
    let click = 0;
    roll.addEventListener("click", (event) => {
        click++;
        const list = [
            { dice: "&#9856", value: 1 },
            { dice: "&#9857", value: 2 },
            { dice: "&#9858", value: 3 },
            { dice: "&#9859", value: 4 },
            { dice: "&#9860", value: 5 },
            { dice: "&#9861", value: 6 },
        ];
        const diceNumber = Number(document.querySelector("#num-of-dice").value);
        const result = document.querySelector("#dice-para");
        const diceAdd = document.querySelector("#sum-para");
        const history = document.querySelector("div > ul");
        event.preventDefault();
        let rollOne = [];
        let currentAdd = 0;
        for (let i = 0; i < diceNumber; i++) {
            let random = Math.floor(Math.random() * Math.floor(list.length - 1));
            let dice = list[random]["dice"];
            rollOne.push(dice);
            currentAdd += list[random]["value"];
        }
        result.innerHTML = rollOne.join("");
        diceAdd.textContent = "Sum = " + currentAdd;
        if (click === 0) {
            newLi = document.createElement("li").style.visibility = "hidden";
            newLi.innerHTML = `${rollTwo}=${historyAdd}`;
            history.appendChild(newLi);
        } else if (click > 1) {
            newLi = document.createElement("li");
            newLi.innerHTML = `${rollTwo}=${historyAdd}`;
            history.appendChild(newLi);
        }
        rollTwo = rollOne.join("");
        historyAdd = currentAdd;
    });
});