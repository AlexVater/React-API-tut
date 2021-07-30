export function getUserList() {
    return fetch('https://randomuser.me/api/?results=6')
        .then(response => response.json())
}