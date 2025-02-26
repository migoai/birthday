
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Happy birthday",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Dear Kvirineya",  // 同上...
        "Sending warm wishes your way",
        "May this special day",
        "Bring you boundless joy",
        "And fill your heart with happiness",
        "I hope you find strength",
        "And healing in the days ahead",
        "Remember that you're not alone",
        "I'm here to support you",
        "Through thick and thin",
        "May this new year of your life",
        "Be filled with love",
        "Laughter",
        "And countless blessings",
        "Enjoy your day to the fullest!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "Dear Kvirineya": ".imgs/Kvirineya.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Dear Kvirineya": ".imgs/Kvirineya.jpg"
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Click To Begin",
        play: "Music",
        bannar_coming: "Color",
        balloons_flying: "Not Enough？",
        cake_fadein: "A Cake？",
        light_candle: "A Candle？",
        wish_message: "HAPPY BIRTHDAY",
        story: "A MESSAGE FOR YOU",
    }
};
