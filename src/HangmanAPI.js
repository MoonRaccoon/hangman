const api = "https://app.linkedin-reach.io/words"

export const getWord = (difficulty) => {

    const diffLevel = "?difficulty=" + difficulty
    const start = "&start=" + Math.floor(Math.random() * 16141)
    const count = "&count=1"

    return fetch(api + diffLevel + count + start)
        .then(res => res.text())
}