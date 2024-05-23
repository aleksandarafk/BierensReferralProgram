export const FeedbackData = {
    getProductsData() {
        return [
            {
                id: '1',
                email: 'john1@gmail.com',
                date: '14/04/2024',
                location: 'Eindhoven',
                feedback: 'Lololololol test test test test test test test',
                rating: 5
            },
            {
                id: '2',
                email: 'john1@gmail.com',
                date: '12/04/2024',
                location: 'Amsterdam',
                feedback: 'Accessories',
                rating: 4
            },
            {
                id: '3',
                email: 'john1@gmail.com',
                date: '15/03/2024',
                location: 'Amsterdam',
                feedback: 'Accessories',
                rating: 3
            },
            {
                id: '4',
                email: 'john1@gmail.com',
                date: '11/10/2023',
                location: 'Utrecht',
                feedback: 'Accessories',
                rating: 3.5
            },
            {
                id: '5',
                email: 'john1@gmail.com',
                date: '14/05/2024',
                location: 'Tilburg',
                feedback: 'Not ',
                rating: 3.5
            },
            {
                id: '6',
                email: 'john1@gmail.com',
                date: '11/01/2024',
                location: 'Venlo',
                feedback: 'Accessories',
                rating: 5
            },
            {
                id: '7',
                email: 'john1@gmail.com',
                date: '26/02/2024',
                location: 'Veldhoven',
                feedback: 'Accessories',
                rating: 3.5
            },
            {
                id: '8',
                email: 'john1@gmail.com',
                date: '30/03/2024',
                location: 'The Hague',
                feedback: 'Accessories',
                rating: 4
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};