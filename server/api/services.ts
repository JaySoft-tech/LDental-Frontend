import { defineEventHandler, createError } from '#imports';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    try {
        const url = `${config.public.api}/service-categories?populate=service_items&sort=order:asc`;

        const response = await $fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.public.token}`,
            },
        });

        return response;
    } catch (err: any) {
        throw createError({
            statusCode: err?.statusCode ?? 500,
            statusMessage: err?.statusMessage ?? 'Failed to fetch services',
        });
    }
});
