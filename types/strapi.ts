export interface StrapiRichTextBlock {
    type: string;
    children: {
        type: string;
        text: string;
    }[];
}

export interface ServiceItem {
    id: number;
    documentId: string;
    name: string;
    Price: string | null;
    description: string | StrapiRichTextBlock[] | null;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface ServiceCategory {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    service_items: ServiceItem[];
}

export interface StrapiResponse {
    data: ServiceCategory[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
