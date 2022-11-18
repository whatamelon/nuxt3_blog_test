const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  media: false,
  theme: {
    screens:{
      sm: "768px",
      md: "1024px",
    },
    container: {
      center:true,
      padding: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0'
      },
      screens: {
        sm: "480px",
        md: "1024px",
      }
    },
    colors:{
      coolgray:colors.gray,
      orange:colors.orange,
      blue:colors.blue,
      green:colors.green,
      red:colors.red,
      yellow:colors.yellow,
      primary:'#1eb087',
      reformOrange:'#ff9a3c',
      white:'#ffffff',
      black:'#000000',
      transparent:'transparent',
      kakao:'#f9e000'
    },
    fontSize: {
      'xxs': '8px',
      'xs': '10px',
      'sm': '12px',
      'tiny': '14px',
      'base': '16px',
      'lg': '18px',
      '20xl': '20px',
      '24xl': '24px',
      '27xl': '27px',
      '28xl': '28px',
      '30xl': '30px',
      '32xl': '32px',
      '36xl': '36px',
      '40xl': '40px',
      '45xl': '45px',
      '55xl': '55px',
    },
    letterSpacing: {
      base: '-.3px',
      mcaption: '-.6px',
      mcaption2: '-1px',
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    configViewer: {
      typographyExample: '다람쥐 헌 쳇바퀴에 타고파'
    },
    extend:{
      lineHeight:{
        'label':'8px',
        '16':'16px',
        '18':'18px',
        '20':'20px',
        '22':'22px',
        '24':'24px',
        '25':'25px',
        '26':'26px',
        '28':'28px',
        '30':'30px',
        '34':'34px',
        '35':'35px',
        '36':'36px',
        '38':'38px',
        '40':'40px',
        '42':'42px',
        '44':'44px',
        '45':'45px',
        '46':'46px',
        '52':'52px',
        '53':'53px',
        '60':'60px',
        '68':'68px',
        '70':'70px',
        '80':'80px !important',
        '250':'250px !important',
        '300':'300px !important',
      },
      height:{
        '75':'300px',
        '100':'400px',
        '125':'500px',
        '130':'520px',
        '150':'600px'
      },
      width:{
        '75':'300px',
        '97.5':'390px',
        '100':'400px',
        '35':'560px',
        '45':'720px',
      },
      maxWidth:{
        'sm2':'414px',
        'sm3':'645px',
        '3.5xl':'842px',
        '5.5xl':'1062px'
      },
      lineClamp:{
        15:'15'
      },
    }
  },
  variants: {
    extend: {},
  },
}