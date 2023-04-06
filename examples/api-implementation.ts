async function getRandomJoke(): Promise<Joke> {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            return response.json()
        })
    return null
}

async function onClickGet() {
    const joke = await getRandomJoke()
    const ul = document.getElementById("list");
    const li1 = document.createElement("li");
    li1.appendChild(document.createTextNode(joke.setup))
    const li2 = document.createElement("li");
    li2.appendChild(document.createTextNode(joke.punchLine))
    ul.appendChild(li1)
    ul.appendChild(li2)
}

interface Joke {
    type : string
    setup : string
    punchLine : string
}