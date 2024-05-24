export const FeedbackData = {
    getProductsData() {
        return [
            {
                id: '1',
                email: 'john1@gmail.com',
                date: '14/04/2024',
                location: 'Eindhoven',
                feedbackShort: 'The referral system is very user-friendly and easy to navigate. I was able to refer my friends with just a few clicks.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'The referral system is very user-friendly and easy to navigate. I was able to refer my friends with just a few clicks.',
                rating: 5
            },
            {
                id: '2',
                email: 'john1@gmail.com',
                date: '12/04/2024',
                location: 'Amsterdam',
                feedbackShort: 'The incentives for referring friends are attractive and motivated me to participate. The rewards program is well thought out.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'The incentives for referring friends are attractive and motivate users to participate. The rewards program is well thought out.',
                rating: 4
            },
            {
                id: '3',
                email: 'john1@gmail.com',
                date: '15/03/2024',
                location: 'Amsterdam',
                feedbackShort: 'The steps for making a referral are clearly outlined, which makes the process straightforward and hassle-free.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'The steps for making a referral are clearly outlined, which makes the process straightforward and hassle-free.',
                rating: 3
            },
            {
                id: '4',
                email: 'john1@gmail.com',
                date: '11/10/2023',
                location: 'Utrecht',
                feedbackShort: 'I appreciated the quick turnaround time for receiving rewards after a successful referral. It encourages me to continue using the system.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'I appreciated the quick turnaround time for receiving rewards after a successful referral. It encourages me to continue using the system.',
                rating: 3.5
            },
            {
                id: '5',
                email: 'john1@gmail.com',
                date: '14/05/2024',
                location: 'Tilburg',
                feedbackShort: 'The ability to track the status of my referrals and points till next level is really clear. It keeps me informed and engaged.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'The ability to track the status of my referrals and points till next level is really clear. It keeps me informed and engaged.',
                rating: 3.5
            },
            {
                id: '6',
                email: 'john1@gmail.com',
                date: '11/01/2024',
                location: 'Venlo',
                feedbackShort: 'The fact that I can choose between two rewards makes my experience very pleasing. Will definetly recommend to more people.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'The fact that I can choose between two rewards makes my experience very pleasing. Will definetly recommend to more people.',
                rating: 5
            },
            {
                id: '7',
                email: 'john1@gmail.com',
                date: '26/02/2024',
                location: 'Veldhoven',
                feedbackShort: 'The referral system integrates seamlessly with the main website, making it a cohesive part of the user experience.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'The referral system integrates seamlessly with the main website, making it a cohesive part of the user experience.',
                rating: 3.5
            },
            {
                id: '8',
                email: 'john1@gmail.com',
                date: '30/03/2024',
                location: 'The Hague',
                feedbackShort: 'Receiving feedback and updates on how my referrals are benefiting the company is a nice touch. It makes me feel like my contributions are valued.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'Receiving feedback and updates on how my referrals are benefiting the company is a nice touch. It makes me feel like my contributions are valued.',
                rating: 4
            },
            {
                id: '9',
                email: 'john1@gmail.com',
                date: '30/04/2024',
                location: 'Veghen',
                feedbackShort: 'The referral campaigns are engaging and well-promoted, making it easy to share with my network. The social media integration is particularly useful.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'The referral campaigns are engaging and well-promoted, making it easy to share with my network. The social media integration is particularly useful.',
                rating: 4
            },
            {
                id: '10',
                email: 'john1@gmail.com',
                date: '18/03/2024',
                location: 'Den Bosch',
                feedbackShort: 'I like that the system allows me to customize my referral link, which makes it more personal and appealing when I share it with friends.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'I like that the system allows me to customize my referral link, which makes it more personal and appealing when I share it with friends.',
                rating: 4
            },
            {
                id: '11',
                email: 'john1@gmail.com',
                date: '23/03/2024',
                location: 'The Hague',
                feedbackShort: 'The system offers various ways to share my referral link, including email, which is very convenient.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'The system offers various ways to share my referral link, including email, which is very convenient.',
                rating: 4
            },
            {
                id: '12',
                email: 'john1@gmail.com',
                date: '23/03/2024',
                location: 'The Hague',
                feedbackShort: 'I like that the rewards have a little description makes it a bit easier for me too choose.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'I like that the rewards have a little description makes it a bit easier for me too choose.',
                rating: 4
            },
            {
                id: '13',
                email: 'john1@gmail.com',
                date: '23/03/2024',
                location: 'The Hague',
                feedbackShort: 'It is really well-thought that the rewards are season based and they just fit my needs for the current season.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'It is really well-thought that the rewards are season based and they just fit my needs for the current season.',
                rating: 5
            },
            {
                id: '14',
                email: 'john1@gmail.com',
                date: '23/03/2024',
                location: 'The Hague',
                feedbackShort: 'I found the spin mechanic really useful as I had trouble selecting one of the tier rewards.'.substring(0, 25) +  "\u2026" ,
                feedbackAll: 'I found the spin mechanic really useful as I had trouble selecting one of the tier rewards.',
                rating: 5
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