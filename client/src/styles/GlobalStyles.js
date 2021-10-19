import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

/*
themes
*/

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    list-style: none;
    text-decoration: none;
}

body {
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
}

a {
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1 {
    font-size: 3rem;
    color: var(--white-color);
    span {
        font-size: 3rem;
        @media screen and(max-width:502px) {
            font-size: 80%;
    }


  }
}

span {
    color: var(--primary-color);
}

h6 {
    color: var(---white-color);
    font-size: 1.2rem;
    padding-bottom: 0.6rem;
}

// utilities
.u-margin-bottom {
    margin-bottom: 4rem;
}

// floatiing toggler
.theme {
    position: fixed;
    right: 0;
    top: 5%;
    z-index: 500;

}


//Floating Toggler
.light-dark-mode{
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

// hamburger menu
  .hamburger-menu{
      position: absolute;
      right: 10%;
      display: none;
      top: 3%; 
      display: none;
      z-index: 15;
      svg{
          font-size: 3rem;
      }
    }
    .navToggle{
        transform: translateX(0);
        z-index: 20;
    }
  @media screen and (max-width:1200px){
    .hamburger-menu{
        display: block;
    }
  }

body::-webkit-scrollbar {
width: 9px;
background-color: #383838;
}

body::-webkit-scrollbar-thumb {
border-radius: 10px;
background-color: #6b6b6b;
}

body::-webkit-scrollbar-track {
border-radius: 10px;
background-color: #383838;
}


`;

export default GlobalStyle;
