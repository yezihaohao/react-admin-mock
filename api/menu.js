module.exports = (req, res) => {
    res.json([
        {
            key: '/app/smenu',
            title: '异步菜单',
            icon: 'api',
            subs: [
                {
                    key: '/app/smenu/sub1',
                    title: '异步子菜单1',
                    component: 'Sub1',
                },
                {
                    key: '/app/smenu/sub2',
                    title: '异步子菜单2',
                    component: 'Sub2',
                },
            ],
        },
    ]);
};
