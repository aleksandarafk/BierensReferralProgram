export const UsersData = { // Exporting the database for the users enrolled in the referral program
    getProductsData() {
        return [
            {
                id: '1',
                name: 'Steve Janssen',
                company: 'Corporate',
                joindate: '03/02/2024',
                email: 'stevejanssen@corporate.com',
                referralsmade: '15',
            },

            {
                id: '2',
                name: 'Tom Johnstone',
                company: 'Corporate',
                joindate: '01/05/2024',
                email: 'tomjohnstone@corporate.com',
                referralsmade: '12',
            },

            {
                id: '3',
                name: 'Ivan Stoyanov',
                company: 'Corporate',
                joindate: '24/03/2024',
                email: 'ivanstoyanov@corporate.com',
                referralsmade: '11',
            },

            {
                id: '4',
                name: 'Ioan Prepelita',
                company: 'Corporate',
                joindate: '01/02/2024',
                email: 'ioanprepelita@corporate.com',
                referralsmade: '8',
            },

            {
                id: '5',
                name: 'Javier Villa',
                company: 'Corporate',
                joindate: '15/04/2024',
                email: 'javiervilla@corporate.com',
                referralsmade: '8',
            },

            {
                id: '6',
                name: 'Declan Peterson',
                company: 'Corporate',
                joindate: '06/10/2023',
                email: 'declanpeterson@corporate.com',
                referralsmade: '6',
            },

            {
                id: '7',
                name: 'Boyan Stoyanov',
                company: 'Corporate',
                joindate: '07/05/2024',
                email: 'boyanstoyanov@corporate.com',
                referralsmade: '6',
            },

            {
                id: '8',
                name: 'Kiril Ivanov',
                company: 'Corporate',
                joindate: '30/06/2022',
                email: 'kirilivanov@corporate.com',
                referralsmade: '5',
            },

            {
                id: '9',
                name: 'Peter Robson',
                company: 'Corporate',
                joindate: '07/05/202',
                email: 'peterrobson@corporate.com',
                referralsmade: '5',
            },

            {
                id: '10',
                name: 'Richard Smith',
                company: 'Corporate',
                joindate: '07/05/202',
                email: 'richardsmith@corporate.com',
                referralsmade: '5',
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
