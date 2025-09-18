/* eslint-disable prefer-const */
import { type AxiosRequestConfig } from "axios";

import { requestBackend } from "../utils/requests";

export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
    const config: AxiosRequestConfig = {
        url: "/products",
        params: {
            page,
            name,
            size,
            sort

        }
    }

    return requestBackend(config);
}

export function findById(id: number) {
    return requestBackend({ url: `products/${id}` })
}

export function deleteById(id: number) {
    const config: AxiosRequestConfig = {
        method: "Delete",
        url: `/products/${id}`,
        withCredentials: true
    }

    return requestBackend(config)
}