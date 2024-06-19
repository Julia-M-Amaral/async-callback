function User(name) {
    this.name = name;
}

const julia = new User("Julia");

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(julia.name);
        }, 2000);
    });
}

function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Failed to fetch posaaaaaaaaaaaaaaaaats.'));
        }, 3000);
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Comment 1');
        }, 5000);
    });
}

async function loadData() {
    const user = await fetchUser();

    try {
        console.log("Fetching user...");
        console.log(`User: ${user}.`);
    }
    catch (error) {
        console.error('Error fetching user:', error.message);
    }

    console.log(`___________________________________________________`);

    try {
        console.log(`Fetching posts from ${user}...`);
        const posts = await fetchPosts();
        console.log(`Posts from ${user}: ${posts}`);
    }
    catch (error) {
        console.error('Error fetching posts:', error.message);
    }

    console.log(`___________________________________________________`);

    try {
        console.log(`Fetching comments from ${user}...`);
        const comments = await fetchComments();
        console.log(`Comments from ${user}: ${comments}`);
    }
    catch (error) {
        console.error('Error fetching comments', error.message);
    }



}

loadData();