const DataFetcher = {
    fetch(url) {
        return fetch(url).then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then((data) => {
            return JSON.stringify(data);
        });
    }
};

module.exports = DataFetcher;