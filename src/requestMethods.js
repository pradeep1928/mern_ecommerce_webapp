import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDk2ZTRmZDYyNmQ2ZjY3NjQ4YTlkYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDkzNzg2MiwiZXhwIjoxNjU1MTEwNjYyfQ.QScLuwIibFxhsvi7wd9HqUP9Bgg6l_Je9gabuPG3O0o";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
