var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Peiyin Zhu",
    sex: "Male",
    age: "19",
    phone: "19181345150",
    email: "peiyinzhu@std.uestc.edu.cn",
    address: "Chengdu",
    qq: "1308104487",
    log: "HappyEric",
    excpect_work: "AI",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "Variety is the spice of life.",
        "Doubt is the key to knowledge.",
        "The greatest test of courage on earth is to bear defeat without losing heart.",
        "Life is the art of drawing sufficient conclusions form insufficient premises.",
        "Death comes to all, but great achievements raise a monument which shall endure until the sun grows old.",

    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "Hello<br>"
            +"You can call me Eric<br>"
            +"I am from China and major in AI<br>"
            +"Now, I study in UESTC",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>I am eric, welcome</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Python", 80, "red"],
        ["C++", 77, "blue"],
        ["Statistics", 75, "#1abc9c"],
        ["Neural network architectures", 85, "rgba(0,0,0)"],
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Develop AI ,sometimes some web program .</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["https://img2.baidu.com/it/u=1358785797,2148029077&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=420", "https://github.com/Eric-is-good/cpu-compilation", "32 bit cpu ", "32 bit cpu which I designed"],
        ["https://img2.baidu.com/it/u=2779292739,1863885052&fm=253&fmt=auto&app=138&f=JPEG?w=756&h=500", "https://github.com/Eric-is-good/yolov5_with_ncnn", "yolo for phone", "Deploy yolo v5 to the mobile terminal, providing yolo's python training code and mobile phone Android code"],
        ["https://img0.baidu.com/it/u=2406573353,2552754895&fm=253&fmt=auto&app=138&f=JPG?w=658&h=494", "https://github.com/Eric-is-good/uestc-Course-Design", "Chat app", "Chat software based on springboot and Android development"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2021/7/1 — 2021/8/10", "<br>AAAAAA",
            "<p><strong>bbbbbbb</strong></p>" +
            "<p>I am great!</p>" +
            "<p>I am great!</p>"
        ],

        ["2020/7/1 — 2020/8/10", "<br>AAAAAA",
        "<p><strong>bbbbbbb</strong></p>" +
        "<p>I am great!</p>" +
        "<p>I am great!</p>"
    ],


    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2021-06-15", "good job", "good job",],
        ["2020-06-15", "good job", "good job",],
        
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/github.svg", "https://github.com/Eric-is-good", "My GitHub"],
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}