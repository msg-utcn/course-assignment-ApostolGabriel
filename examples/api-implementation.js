async function getRandomJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    return response.json();
}
async function onClickGet() {
    const joke = await getRandomJoke();
    const ul = document.getElementById("list");
    const li1 = document.createElement("li");
    li1.appendChild(document.createTextNode(joke.setup));
    const li2 = document.createElement("li");
    li2.appendChild(document.createTextNode(joke.punchline));
    ul.appendChild(li1);
    ul.appendChild(li2);
}
