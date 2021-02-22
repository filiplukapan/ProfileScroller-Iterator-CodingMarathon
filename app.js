const data = [
    {
        name: 'Filip P.',
        age: 28,
        gender: 'male',
        lookingfor: 'female',
        location: 'Vienna',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    },

    {
        name: 'Tarik S.',
        age: 30,
        gender: 'male',
        lookingfor: 'female',
        location: 'Vienna',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },

    {
        name: 'Marko P.',
        age: 20,
        gender: 'male',
        lookingfor: 'female',
        location: 'Vienna',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },

    {
        name: 'Johannes B.',
        age: 24,
        gender: 'male',
        lookingfor: 'female',
        location: 'Vienna',
        image: 'https://randomuser.me/api/portraits/men/23.jpg'
    },

    {
        name: 'Sarah H.',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Vienna',
        image: 'https://randomuser.me/api/portraits/women/53.jpg'
    },

    {
        name: 'Denise S.',
        age: 24,
        gender: 'female',
        lookingfor: 'male',
        location: 'Vienna',
        image: 'https://randomuser.me/api/portraits/women/39.jpg'
    },

    {
        name: 'Jenny S.',
        age: 29,
        gender: 'female',
        lookingfor: 'male',
        location: 'Vienna',
        image: 'https://randomuser.me/api/portraits/women/94.jpg'
    },

    {
        name: 'Irene G.',
        age: 29,
        gender: 'female',
        lookingfor: 'male',
        location: 'Vienna',
        image: 'https://randomuser.me/api/portraits/women/84.jpg'
    },

];

const profiles = profileIterator(data);

nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile)

function nextProfile() {

    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-view">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
        </ul>
        
        `

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        window.location.reload();
    }
}

//Profile Iterator

function profileIterator(profile) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profile.length ? {value: profile [nextIndex++], done: false} : {done: true}
        }
    };
}