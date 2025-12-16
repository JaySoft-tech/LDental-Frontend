// server/api/services.ts
import { defineEventHandler, createError } from '#imports';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    try {
        const url = `${config.public.api}/service-categories?populate=service_items&sort=order:asc`;
        console.log(`[Strapi Request] URL: ${url}`);

        const response = await $fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.public.token}`,
            },
        });

        console.log(
            '[Strapi Data Received]:',
            JSON.stringify(response, null, 2),
        );

        return response;
    } catch (err: any) {
        console.error('Strapi API Error:', err.message, err.statusCode);
        throw createError({
            statusCode: err?.statusCode ?? 500,
            statusMessage: err?.statusMessage ?? 'Failed to fetch services',
        });
    }
});
