import environment from "@/config/environment";
import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

// Extends Session milik nextauth
interface CustomSession extends Session {
    accessToken?: string;
}

const headers = {
    "Content-Type": "application/json",
};

const instance = axios.create({
    baseURL: environment.API_URL,
    headers: headers,
    timeout: 60 * 1000,
});

// Dokumentasi: https://axios-http.com/docs/interceptors
// Bisa intercept setiap requests/response sebelum dihandle
// Harus pake interceptors karena nantinya akan cek error & session
// Kalau-kalau butuh token untuk request ke API
instance.interceptors.request.use(
    async (request) => {
        // Apabila ada Session dan pada session tersebut terdapat akses token maka set header Authorization
        const session: CustomSession | null = await getSession();
        if (session && session.accessToken) {
            request.headers.Authorization = `Bearer ${session.accessToken}`;
        }
        return request;
    },
    (error) => Promise.reject(error),
);

instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

export default instance;