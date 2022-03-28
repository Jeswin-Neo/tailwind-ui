module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        bg_screen: "#1f1f1f",
        bg_button: "#262626",
        text_color: "#B8B8B8",
        body_bg: "#C0C0C0	",
        gradient_color:
          "linear-gradient(320.66deg, #437ED6 14.75%, #33A6DF 84.81%)",
      },
      boxShadow: {
        button_shadow: "4px 4px 12px rgba(0, 0, 0, 0.301983)",
      },
      width: {
        screen_width: "414px",
        item_image_width: "121px",
        small_box_width: "58px",
      },
      height: {
        screen_height: "896px",
        item_image_height: "111px",
        small_box_height: "58px",
      },
      borderRadius: {
        br_30: "30px",
        br_10: "10px",
        br_3: "3px",
      },
      borderColor: {
        borderOneSide: "2px solid rgba(65, 64, 64, 0.356)",
      },
    },
    fontFamily: {
      Barlow: ["Barlow", "cursive"],
    },
  },
  plugins: [],
};
