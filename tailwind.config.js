/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'elmessiri': ['El Messiri', 'sans-serif'],
        'notosans': ['Noto Sans SC', 'sans-serif'],
      },
      backgroundImage: {
        'bg1': "url('/public/img/background/bg1.png')",
        'bg2': "url('/public/img/background/arabic1.png')",
        'bg4': "url('/public/img/background/arabic2.png')",
        'bg3': "url('/public/img/background/bg3.png')",
        'bgNumber': "url('/public/img/suraName/numberbg.svg')",
      },
      colors:{
        color1:'#001D1D',
        color2:'#043B3B',
        color3: '#E0D2B4',
        color4: '#B4B4B4',
        color5: '#022929',
        color6: '#C6C6C6',
        color7:'#053838',
        color8: '#F5F5F4',
        color9: '#D9D9D9',
        color10: '#3D3C3C',
        color11: '#055353',
      },
      fontSize: {
        text1: ['18px', '22px'],
        text2: ['50px', '50.15px'],
        text3: ['24px', '34.75px'],
        text4: ['22px', '34.17px'],
        text5: ['16px', '23.17px'],
        text6: ['20px', '24.2px'],
        text7: ['13px', '15.73px'],
        text8: ['15px', '18px'],
        text9: ['10px', '12.1px'],
        text10: ['16px', '19.36px'],
        text11: ['19px', '22 px'],
        text12: ['40px', '34.75px'],
        text13: ['14px', '16.94px'],
        text14: ['20px', '30px'],
      },
      boxShadow: {
        'shadowbtn': '0 4px 4px rgba(0, 0, 0, 0.7)',
        'shadowbox': '0px 4px 4px #000000',
        'shadowbg': 'inset 0px 4px 100px rgba(0, 0, 0, 0.5)',
        
      }

    },
  },
  plugins: [],
}
