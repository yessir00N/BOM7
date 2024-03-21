document.addEventListener("DOMContentLoaded", function() {
    const contentContainer = document.getElementById("content");
    let currentPostCount = 0;
    const totalPosts = 1000;

    function addInstagramPosts() {
        const instagramData = getMoreInstagramPosts(currentPostCount);

        instagramData.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("instagram-post");

            const imageElement = document.createElement("img");
            imageElement.src = post.image;

            const captionElement = document.createElement("p");
            captionElement.textContent = post.caption;

            const userElement = document.createElement("p");
            userElement.textContent = "User: " + post.user;

            const dateElement = document.createElement("p");
            dateElement.textContent = "Date: " + post.date;

            postElement.appendChild(imageElement);
            postElement.appendChild(captionElement);
            postElement.appendChild(userElement);
            postElement.appendChild(dateElement);

            contentContainer.appendChild(postElement);

            currentPostCount++;
        });
    }

    function getMoreInstagramPosts(startIndex) {
        const posts = [];
        for (let i = startIndex; i < Math.min(startIndex + 10, totalPosts); i++) {
            const randomUser = getRandomUser();
            const randomDate = getRandomDate();
            const randomImage = `https://thispersondoesnotexist.com/image?${Date.now()}`;
            posts.push({ 
                image: randomImage, 
                caption: `Caption ${i+1}`, 
                user: randomUser,
                date: randomDate 
            });
        }
        return posts;
    }

    function getRandomUser() {
        const users = ["user1", "user2", "user3", "user4", "user5"]; 
        return users[Math.floor(Math.random() * users.length)];
    }

    function getRandomDate() {
        const startDate = new Date(2020, 0, 1);
        const endDate = new Date(); 
        const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        return randomDate.toDateString();
    }

    addInstagramPosts();

    window.addEventListener("scroll", function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addInstagramPosts();
        }
    });
});