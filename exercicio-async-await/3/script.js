class SocialMedia{
    constructor(posts, comments){
        this.posts = posts;
        this.comments = comments;
    }
}

const posts = ["Post 1 Sunday", "Post 2 Thursday"];
const comments = ["Cool! I've watched this series before and I love it.", "Congratulations, Ana!"];

class Person extends SocialMedia{
    constructor(name,age,profession){
        super(posts, comments)
        this.name = name;
        this.age = age;
        this.profession = profession
    }
}

const p1 = new Person("Julia", 21, "Intern");

function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (`Name: ${p1.name}, ${p1.age} years old, ${p1.profession} at Avanade.`);
        }, 8000);
    });
}

function fetchUserPosts(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${p1.posts.join(", ")}`);
        }, 3000);
    });
}

function fetchUserComments(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${p1.comments.join(", ")}`);
        }, 5000);
    });
}

async function loadUserDetails(){
    const resultUserData = await fetchUserData();
    console.log(`Personal data: ${resultUserData}`);

    const resultUserPosts = await fetchUserPosts();
    console.log(`Posts: ${resultUserPosts}`);

    const resultUserComments = await fetchUserComments(); 
    console.log(`Comments: ${resultUserComments}`);
}

loadUserDetails();