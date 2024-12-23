import axios from "axios";

export default class FetchData {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            _limit: limit,
            _page: page,
        });
        return response;
    }

    static async getPostById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response;
    }
}