export const FeedbackData = {
    getProductsData() {
        return [
            {
                id: '1',
                email: 'john1@gmail.com',
                date: '14/04/2024',
                location: 'Eindhoven',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 5
            },
            {
                id: '2',
                email: 'john1@gmail.com',
                date: '12/04/2024',
                location: 'Amsterdam',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 4
            },
            {
                id: '3',
                email: 'john1@gmail.com',
                date: '15/03/2024',
                location: 'Amsterdam',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 3
            },
            {
                id: '4',
                email: 'john1@gmail.com',
                date: '11/10/2023',
                location: 'Utrecht',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 3.5
            },
            {
                id: '5',
                email: 'john1@gmail.com',
                date: '14/05/2024',
                location: 'Tilburg',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 3.5
            },
            {
                id: '6',
                email: 'john1@gmail.com',
                date: '11/01/2024',
                location: 'Venlo',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 5
            },
            {
                id: '7',
                email: 'john1@gmail.com',
                date: '26/02/2024',
                location: 'Veldhoven',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 3.5
            },
            {
                id: '8',
                email: 'john1@gmail.com',
                date: '30/03/2024',
                location: 'The Hague',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 4
            },
            {
                id: '9',
                email: 'john1@gmail.com',
                date: '30/04/2024',
                location: 'Veghen',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 4
            },
            {
                id: '10',
                email: 'john1@gmail.com',
                date: '18/03/2024',
                location: 'Den Bosch',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 4
            },
            {
                id: '11',
                email: 'john1@gmail.com',
                date: '23/03/2024',
                location: 'The Hague',
                feedbackShort: 'Lololololol test test test test test test test'.substring(0, 25) +  "\u2026" ,
                rating: 4
            }
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