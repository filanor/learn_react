export default class Services {
    getDate = () => {
        const date = new Date();
        return `${date.getDay()}:${date.getMonth()}:${date.getFullYear()}`
    }
}