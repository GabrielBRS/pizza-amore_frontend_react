import * as React from "react"
import "./index.scss"
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Icon from "../images/pizza.png";


function NavBar() {
  return (
    <div className="navbar">
      <div className="container-navbar-logo">
        <div id="home" className="id-rastreador-home"></div>
        <div className="navbar-logo-title"><a href="#home">PIZZA AM <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="red" fill="red"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" /></svg> RE</a></div>
      </div>
      <div className="container-navbar-itens">
        <div className="navbar-itens"><a href="#sabores">Sabores</a></div>
        <div className="navbar-itens"><a href="#sobre">Quem Somos</a></div>
        <div className="navbar-itens"><a href="#contato">Contate-nos</a></div>
      </div>
    </div>
  )
}

function BodyContent() {
  useEffect(() => {
    //hoverLeftPizza();
  });
  return (
    <>
      <div id="sabores" className="bodyContent">
        <div className="id-rastreador-sabor"></div>
        <div className="title">Sabores</div>
        <div className="borderLine"></div>
        <div className="title-container">Mais Vendidas</div>
        <div className="containerImages">
          <div className="image-left">
            <div className="content-card">
              <div className="title-content-card">Pizza Banana com Nutela</div>
              <div className="borderLine-card"></div>
              <div className="circle-image">
                <img className="image-manipulation" src={Icon} />
              </div>
              <div className="borderLine-card-bottom">
                <div className="borderLine-card"></div>
              </div>
              <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 11)} onMouseLeave={() => hoverPizza("left", 11)}>
                <div id="render-price">
                  <div className="ingredientes">Ingredientes</div>
                  <div className="ingredientes-list">
                    <div>Queijo</div>
                    <div>Banana com Canela</div>
                    <div>Nutela</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-center">
            <div className="content-card">
              <div className="title-content-card">Pizza Banana com Nutela</div>
              <div className="borderLine-card"></div>
              <div className="circle-image">
                <img className="image-manipulation" src={Icon} />
              </div>
              <div className="borderLine-card-bottom">
                <div className="borderLine-card"></div>
              </div>
              <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 12)} onMouseLeave={() => hoverPizza("left", 12)}>
                <div id="render-price">
                  <div className="ingredientes">Ingredientes</div>
                  <div className="ingredientes-list">
                    <div>Queijo</div>
                    <div>Banana com Canela</div>
                    <div>Nutela</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-right">
            <div className="content-card">
              <div className="title-content-card">Pizza Banana com Nutela</div>
              <div className="borderLine-card"></div>
              <div className="circle-image">
                <img className="image-manipulation" src={Icon} />
              </div>
              <div className="borderLine-card-bottom">
                <div className="borderLine-card"></div>
              </div>
              <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 13)} onMouseLeave={() => hoverPizza("left", 13)}>
                <div id="render-price">
                  <div className="ingredientes">Ingredientes</div>
                  <div className="ingredientes-list">
                    <div>Queijo</div>
                    <div>Banana com Canela</div>
                    <div>Nutela</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function PizzaEspeciaisSessao() {
  useEffect(() => {
    //expandedPizzaEspecial();
  });
  return (
    <>
      <div id="sabores" className="bodyContent">
        <div className="id-rastreador-sabor"></div>
        <div className="title-container">Pizzas Especiais </div>
        <div className="pizza-especial-expanded"><div className="expanded-menu-off" onClick={() => changeBooleanExpandedPizzaEspecial()}>[Ver Mais <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="rgb(128, 104, 27)"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></svg> ]</div></div>
        <div className="containerImages">
          <div className="image-left">
            <div className="content-card">
              <div className="title-content-card">Pizza Banana com Nutela</div>
              <div className="borderLine-card"></div>
              <div className="circle-image">
                <img className="image-manipulation" src={Icon} />
              </div>
              <div className="borderLine-card-bottom">
                <div className="borderLine-card"></div>
              </div>
              <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 21)} onMouseLeave={() => hoverPizza("left", 21)}>
                <div id="render-price">
                  <div className="ingredientes">Ingredientes</div>
                  <div className="ingredientes-list">
                    <div>Queijo</div>
                    <div>Banana com Canela</div>
                    <div>Nutela</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-center">
            <div className="content-card">
              <div className="title-content-card">Pizza Banana com Nutela</div>
              <div className="borderLine-card"></div>
              <div className="circle-image">
                <img className="image-manipulation" src={Icon} />
              </div>
              <div className="borderLine-card-bottom">
                <div className="borderLine-card"></div>
              </div>
              <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 22)} onMouseLeave={() => hoverPizza("left", 22)}>
                <div id="render-price">
                  <div className="ingredientes">Ingredientes</div>
                  <div className="ingredientes-list">
                    <div>Queijo</div>
                    <div>Banana com Canela</div>
                    <div>Nutela</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-right">
            <div className="content-card">
              <div className="title-content-card">Pizza Banana com Nutela</div>
              <div className="borderLine-card"></div>
              <div className="circle-image">
                <img className="image-manipulation" src={Icon} />
              </div>
              <div className="borderLine-card-bottom">
                <div className="borderLine-card"></div>
              </div>
              <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 23)} onMouseLeave={() => hoverPizza("left", 23)}>
                <div id="render-price">
                  <div className="ingredientes">Ingredientes</div>
                  <div className="ingredientes-list">
                    <div>Queijo</div>
                    <div>Banana com Canela</div>
                    <div>Nutela</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pizza-especial-expanded"><div className="title-container" onClick={() => changeBooleanExpandedPizzaEspecial()}><div className="expanded-menu-off">[Ver Mais <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="rgb(128, 104, 27)"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></svg> ]</div></div></div>
    </>
  );
}

function PizzaDoceSessao() {

  return (
    <div id="sabores" className="bodyContent">
      <div className="id-rastreador-sabor"></div>
      <div className="title-container">Pizzas Doces</div>
      <div className="containerImages">
        <div className="image-left">
          <div className="content-card">
            <div className="title-content-card">Pizza Banana com Nutela</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onClick={() => booleanHoverPizza(31)}>
              <div id="render-price-31">
                <div className="ingredientes" onClick={() => booleanHoverPizza(31)}>Ingredientes</div>
                <div className="ingredientes-list" onClick={() => booleanHoverPizza(31)}>
                  <div>Queijo</div>
                  <div>Banana com Canela</div>
                  <div>Nutela</div>
                  <div className="ver-preco">[Ver Preço]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-center">
          <div className="content-card">
            <div className="title-content-card">Pizza Banana com Nutela</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 32)} onMouseLeave={() => hoverPizza("left", 32)}>
              <div id="render-price">
                <div className="ingredientes">Ingredientes</div>
                <div className="ingredientes-list">
                  <div>Queijo</div>
                  <div>Banana com Canela</div>
                  <div>Nutela</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-right">
          <div className="content-card">
            <div className="title-content-card">Pizza Banana com Nutela</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 33)} onMouseLeave={() => hoverPizza("left", 33)}>
              <div id="render-price">
                <div className="ingredientes">Ingredientes</div>
                <div className="ingredientes-list">
                  <div>Queijo</div>
                  <div>Banana com Canela</div>
                  <div>Nutela</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PizzaSalgadasSessao() {

  return (
    <div id="sabores" className="bodyContent">
      <div className="id-rastreador-sabor"></div>
      <div className="title-container">Pizzas Salgadas</div>
      <div className="containerImages">
        <div className="image-left">
          <div className="content-card">
            <div className="title-content-card">Pizza Banana com Nutela</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 41)} onMouseLeave={() => hoverPizza("left", 41)}>
              <div id="render-price">
                <div className="ingredientes">Ingredientes</div>
                <div className="ingredientes-list">
                  <div>Queijo</div>
                  <div>Banana com Canela</div>
                  <div>Nutela</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-center">
          <div className="content-card">
            <div className="title-content-card">Pizza Banana com Nutela</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 42)} onMouseLeave={() => hoverPizza("left", 42)}>
              <div id="render-price">
                <div className="ingredientes">Ingredientes</div>
                <div className="ingredientes-list">
                  <div>Queijo</div>
                  <div>Banana com Canela</div>
                  <div>Nutela</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-right">
          <div className="content-card">
            <div className="title-content-card">Pizza Banana com Nutela</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onMouseEnter={() => hoverPizza("enter", 43)} onMouseLeave={() => hoverPizza("left", 43)}>
              <div id="render-price">
                <div className="ingredientes">Ingredientes</div>
                <div className="ingredientes-list">
                  <div>Queijo</div>
                  <div>Banana com Canela</div>
                  <div>Nutela</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyAre() {
  return (
    <div className="whyContent">
      <div id="sobre" className="id-rastreador-sobre"></div>
      <div>Quem Somos</div>
    </div>
  )
}

function ContactUs() {
  return (
    <div className="contacContent">
      <div id="contato" className="id-rastreador-sobre"></div>
      <div>Contate-nos</div>
    </div>
  )
}

// markup
const IndexPage = () => {
  //let image = require()
  return (
    <main style={{ body: 0, div: 0 }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pizzaria Amore</title>
        <link rel="canonical" href={require('../images/pizza.png')} />
      </Helmet>
      <NavBar></NavBar>
      <BodyContent></BodyContent>
      <PizzaEspeciaisSessao></PizzaEspeciaisSessao>
      <PizzaDoceSessao></PizzaDoceSessao>
      <PizzaSalgadasSessao></PizzaSalgadasSessao>
      <WhyAre></WhyAre>
      <ContactUs></ContactUs>
    </main>
  )
}

export default IndexPage

let hoverObserver = true;
let booleanExpandedPizzaEspecial = false

function booleanHoverPizza(id) {
  hoverObserver = !hoverObserver;
  hoverPizza(id);
}
function hoverPizza(id) {
  //window.alert("Mouse Enter " + hoverObserver + " " + id)

  if (hoverObserver === true) {
    if (id === 31) {
      ReactDOM.render(
        <div id="render-price-31" className="ingredientes-container" onClick={() => booleanHoverPizza(31)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(31)}>Preço</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(31)}>
            <div>De</div>
            <div className="promocao-pizza">R$ 25,00</div>
            <div>Por</div>
            <div>R$ 20,00</div>
          </div>
        </div>,
        document.getElementById('render-price-31')
      );
    }
  }

  if (hoverObserver === false) {
    if (id === 31) {
      ReactDOM.render(
        <div id="render-price-31" className="ingredientes-container" onClick={() => booleanHoverPizza(31)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(31)}>Ingredientes</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(31)}>
            <div>Queijo</div>
            <div>Banana com Canela</div>
            <div>Nutela</div>
            <div className="ver-preco">[Ver Preço]</div>
          </div>
        </div>,
        document.getElementById('render-price-31')
      );
    }
  }
}

function changeBooleanExpandedPizzaEspecial() {
  booleanExpandedPizzaEspecial = !booleanExpandedPizzaEspecial;
  expandedPizzaEspecial();
}

function expandedPizzaEspecial() {
  let i = 0
  if (booleanExpandedPizzaEspecial === false) {
    for (i; i < document.getElementsByClassName("pizza-especial-expanded").length; i++) {
      ReactDOM.render(<div className="pizza-especial-expanded"><div className="title-container" onClick={() => changeBooleanExpandedPizzaEspecial()}><div className="expanded-menu-off">[Ver Mais <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="rgb(128, 104, 27)"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></svg> ]</div></div></div>
        , document.getElementsByClassName("pizza-especial-expanded")[i]);
        i = 2;
    }
  }

  if (booleanExpandedPizzaEspecial === true) {
    for (i; i < document.getElementsByClassName("pizza-especial-expanded").length; i++) {
      ReactDOM.render(<div id="pizza-especial-expanded"><div className="title-container" onClick={() => changeBooleanExpandedPizzaEspecial()}><div className="expanded-menu-off">[Ver Menos <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="rgb(128, 104, 27)"><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" /></svg> ]</div></div></div>
        , document.getElementsByClassName("pizza-especial-expanded")[i]);
        i = 2;
    }
  }

}


/*
function Carousel(numberSelectItem) {

  if (numberSelectItem === 1) {
    ReactDOM.render(
      <div className="select-bar" onClick={() => Carousel(1)}></div>,
      document.getElementById('select-bar-one')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(2)}></div>,
      document.getElementById('select-bar-two')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(3)}></div>,
      document.getElementById('select-bar-three')
    );

    const selectOne = (
      <div id="selec-box-change" className="container-column-box">
        <div className="card card-one">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 5</span>
              <span className="content">Conteúdo Card 5</span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
        <div className="card card-middle">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 1</span>
              <span className="content">Conteúdo Card 1 </span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
        <div className="card card-two">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 2</span>
              <span className="content">Conteúdo Card 2</span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
      </div>
    )

    ReactDOM.render(
      selectOne, document.getElementById('selec-box-change')
    );
  }

  if (numberSelectItem === 2) {
    ReactDOM.render(
      <div className="select-bar" onClick={() => Carousel(2)}></div>,
      document.getElementById('select-bar-two')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(1)}></div>,
      document.getElementById('select-bar-one')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(3)}></div>,
      document.getElementById('select-bar-three')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(4)}></div>,
      document.getElementById('select-bar-four')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(5)}></div>,
      document.getElementById('select-bar-five')
    );

    const selectTwo = (
      <div id="selec-box-change" className="container-column-box">
        <div className="card card-one">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 1</span>
              <span className="content">Conteúdo Card 1 </span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
        <div className="card card-middle">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 2</span>
              <span className="content">Conteúdo Card 2</span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
        <div className="card card-two">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 3</span>
              <span className="content">Conteúdo Card 3</span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
      </div>
    )

    ReactDOM.render(
      selectTwo, document.getElementById('selec-box-change')
    );
  }

  if (numberSelectItem === 3) {
    ReactDOM.render(
      <div className="select-bar" onClick={() => Carousel(3)}></div>,
      document.getElementById('select-bar-three')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(1)}></div>,
      document.getElementById('select-bar-one')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(2)}></div>,
      document.getElementById('select-bar-two')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(4)}></div>,
      document.getElementById('select-bar-four')
    );
    ReactDOM.render(
      <div className="not-select-bar" onClick={() => Carousel(5)}></div>,
      document.getElementById('select-bar-five')
    );

    const selectThree = (
      <div id="selec-box-change" className="container-column-box">
        <div className="card card-one">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 2</span>
              <span className="content">Conteúdo Card 2</span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
        <div className="card card-middle">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 3</span>
              <span className="content">Conteúdo Card 3</span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
        <div className="card card-two">
          <div className="column-one">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08856 15.9926C1.44856 14.9846 0.968557 13.9846 0.648557 12.9926C0.344557 11.9846 0.192557 10.9846 0.192557 9.99255C0.192557 8.28055 0.640557 6.64055 1.53656 5.07255C2.43256 3.48855 3.75256 2.03255 5.49656 0.704553L7.84856 2.09655C8.04056 2.22455 8.17656 2.36855 8.25656 2.52855C8.35256 2.67255 8.40056 2.82455 8.40056 2.98455C8.40056 3.16055 8.36056 3.32855 8.28056 3.48855C8.20056 3.64855 8.10456 3.78455 7.99256 3.89655C7.81656 4.08855 7.61656 4.32855 7.39256 4.61655C7.18456 4.88855 6.98456 5.21655 6.79256 5.60055C6.60056 5.96855 6.43256 6.38455 6.28856 6.84855C6.16056 7.29655 6.09656 7.78455 6.09656 8.31255C6.09656 8.88855 6.19256 9.50455 6.38456 10.1606C6.59256 10.8166 6.92856 11.5206 7.39256 12.2726C7.55256 12.5286 7.63256 12.7846 7.63256 13.0406C7.63256 13.3286 7.53656 13.5846 7.34456 13.8086C7.15256 14.0326 6.88856 14.2086 6.55256 14.3366L2.08856 15.9926ZM10.6806 15.9926C10.0406 14.9846 9.56056 13.9846 9.24056 12.9926C8.93656 11.9846 8.78456 10.9846 8.78456 9.99255C8.78456 8.28055 9.23256 6.64055 10.1286 5.07255C11.0246 3.48855 12.3446 2.03255 14.0886 0.704553L16.4406 2.09655C16.6326 2.22455 16.7686 2.36855 16.8486 2.52855C16.9446 2.67255 16.9926 2.82455 16.9926 2.98455C16.9926 3.16055 16.9526 3.32855 16.8726 3.48855C16.7926 3.64855 16.6966 3.78455 16.5846 3.89655C16.4086 4.08855 16.2086 4.32855 15.9846 4.61655C15.7766 4.88855 15.5766 5.21655 15.3846 5.60055C15.1926 5.96855 15.0246 6.38455 14.8806 6.84855C14.7526 7.29655 14.6886 7.78455 14.6886 8.31255C14.6886 8.88855 14.7846 9.50455 14.9766 10.1606C15.1846 10.8166 15.5206 11.5206 15.9846 12.2726C16.1446 12.5286 16.2246 12.7846 16.2246 13.0406C16.2246 13.3286 16.1286 13.5846 15.9366 13.8086C15.7446 14.0326 15.4806 14.2086 15.1446 14.3366L10.6806 15.9926Z" fill="#090949" />
            </svg>
          </div>
          <div className="column-two">
            <div className="row-content">
              <span className="title">Card 4</span>
              <span className="content">Conteúdo Card 4</span>
            </div>
            <div className="row-image">

            </div>
          </div>
          <div className="column-three">
            <span>SOURCE: Harvard Business Review</span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.064 16.224C15.704 15.216 16.184 14.216 16.504 13.224C16.808 12.216 16.96 11.216 16.96 10.224C16.96 8.512 16.512 6.872 15.616 5.304C14.72 3.72 13.4 2.264 11.656 0.935998L9.304 2.328C9.112 2.456 8.976 2.6 8.896 2.76C8.8 2.904 8.752 3.056 8.752 3.216C8.752 3.392 8.792 3.56 8.872 3.72C8.952 3.88 9.048 4.016 9.16 4.128C9.336 4.32 9.536 4.56 9.76 4.848C9.968 5.12 10.168 5.448 10.36 5.832C10.552 6.2 10.72 6.616 10.864 7.08C10.992 7.528 11.056 8.016 11.056 8.544C11.056 9.12 10.96 9.736 10.768 10.392C10.56 11.048 10.224 11.752 9.76 12.504C9.6 12.76 9.52 13.016 9.52 13.272C9.52 13.56 9.616 13.816 9.808 14.04C10 14.264 10.264 14.44 10.6 14.568L15.064 16.224ZM6.472 16.224C7.112 15.216 7.592 14.216 7.912 13.224C8.216 12.216 8.368 11.216 8.368 10.224C8.368 8.512 7.92 6.872 7.024 5.304C6.128 3.72 4.808 2.264 3.064 0.935998L0.711999 2.328C0.519999 2.456 0.383999 2.6 0.303999 2.76C0.207999 2.904 0.159999 3.056 0.159999 3.216C0.159999 3.392 0.199999 3.56 0.279999 3.72C0.359999 3.88 0.455999 4.016 0.568 4.128C0.743999 4.32 0.943999 4.56 1.168 4.848C1.376 5.12 1.576 5.448 1.768 5.832C1.96 6.2 2.128 6.616 2.272 7.08C2.4 7.528 2.464 8.016 2.464 8.544C2.464 9.12 2.368 9.736 2.176 10.392C1.968 11.048 1.632 11.752 1.168 12.504C1.008 12.76 0.927999 13.016 0.927999 13.272C0.927999 13.56 1.024 13.816 1.216 14.04C1.408 14.264 1.672 14.44 2.008 14.568L6.472 16.224Z" fill="#090949" />
            </svg>
          </div>
        </div>
      </div>
    )

    ReactDOM.render(
      selectThree, document.getElementById('selec-box-change')
    );
  }

  // return numberSelectItem;
}
*/