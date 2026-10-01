const books = {
    horror1: {
        title: "Horror Book 1",
        description: "This is the description for Horror Book 1."
    },

    horror2: {
        title: "Horror Book 2",
        description: "This is the description for Horror Book 2."
    },

    horror3: {
        title: "Horror Book 3",
        description: "This is the description for Horror Book 3."
    },

    horror4: {
        title: "Horror Book 4",
        description: "This is the description for Horror Book 4."
    },

    scifi1: {
        title: "Science Fiction Book 1",
        description: "This is the description for Science Fiction Book 1."
    },

    scifi2: {
        title: "Science Fiction Book 2",
        description: "This is the description for Science Fiction Book 2."
    },

    scifi3: {
        title: "Science Fiction Book 3",
        description: "This is the description for Science Fiction Book 3."
    },

    scifi4: {
        title: "Science Fiction Book 4",
        description: "This is the description for Science Fiction Book 4."
    }
};

const params = new URLSearchParams(window.location.search);
const bookId = params.get("book");

if (bookId && books[bookId]) {
    document.getElementById("bookTitle").textContent = books[bookId].title;
    document.getElementById("bookDescription").textContent =
        books[bookId].description;
}
