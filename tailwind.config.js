/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  //content: ["./**/*.{html,css,js,hbs}"],
  content: ["./hbs/**/*.{html,css,js,hbs}"],
  theme: {
    extend: {
      inset: {
        "10px": "10px",
      },
      height: {
        "40px": "40px",
      },
      colors: {
        "transparent": "transparent",
        "current": "currentColor",
        "main-blue": "#00B5EE",
        "main-darkblue": "#2C2A6D",
        "main-lightblue": "#FAFBFC",
        "sub-blue-100": "#F1F2F7",
        "sub-blue-200": "#D6D9E6",
        "sub-blue-300": "#AEB3CD",
        "sub-blue-400": "#A4A7B7",
        "sub-blue-500": "#85899E",
        "sub-blue-700": "#535875",
        "sub-blue-900": "#0F1222",
        "red": "#DC3545",
      },
      backgroundPosition: {
        "left-center" : "left center",
        "right-center" : "right center",
        "right90-center" : "calc(100% - 10px) center",
      },
      backgroundImage: {
        "icon-download" : "url('../images/ico-download.svg')",
        "icon-download-on" : "url('../images/ico-download-on.svg')",
        "icon-calender" : "url('../images/ico-calendar.svg')",
        "icon-close-layer" : "url('../images/ico-close-layer.svg')",
        "icon-arrow-prev-first" : "url('../images/ico-arrow-prev-first.svg')",
        "icon-arrow-prev" : "url('../images/ico-arrow-prev.svg')",
        "icon-arrow-next" : "url('../images/ico-arrow-next.svg')",
        "icon-arrow-next-last" : "url('../images/ico-arrow-next-last.svg')",
        "icon-arrow-left2" : "url('../images/ico-arrow-left2.svg')",
        "icon-arrow-left2-white" : "url('../images/ico-arrow-left2-white.svg')",
        "icon-arrow-right2" : "url('../images/ico-arrow-right2.svg')",
        "icon-arrow-right2-white" : "url('../images/ico-arrow-right2-white.svg')",
        "select-arrow" : "url('../images/select-arrow2.svg')",
        "label-radio" : "url('../images/ico-radio-m.svg')",
        "label-radio-on" : "url('../images/ico-radio-m-on.svg')",
        "label-checkbox" : "url('../images/ico-checkbox-m.svg')",
        "label-checkbox-on" : "url('../images/ico-checkbox-m-on.svg')",
      }
    },
  },
  plugins: [],
};