import { http, delay, HttpResponse, DefaultBodyType, passthrough } from 'msw';

async function response(delayTime: number, status: number, data: DefaultBodyType = {}) {
    await delay(delayTime);
    return HttpResponse.json(data, { status });
}

const loginResponse = {
    url: '/auth/login',
    delay: 100,
    status: 200,
    data: { idUser: 2546966, email: 'user@email.com', firstName: 'User', lastName: 'E2E' }
}

export default [
    http.post(loginResponse.url, ({ request }) =>
        response(loginResponse.delay, loginResponse.status, loginResponse.data)
    )
]

