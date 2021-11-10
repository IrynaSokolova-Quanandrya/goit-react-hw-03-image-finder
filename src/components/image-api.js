export default function fetchImg(mainURL, query, page, myKey, secondaryURL) {
    fetch(`${mainURL}?q=${query}&page=${page}&key=${myKey}${secondaryURL}`)
    .then(response => {
            if (response.ok) {
                return console.log(response.json());
            }
            return Promise.reject(new Error(`Can not find ${query}!`));
        })
}

