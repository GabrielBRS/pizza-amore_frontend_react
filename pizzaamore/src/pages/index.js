import * as React from "react"
import "./index.scss"
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Icon from "../images/pizza.png";
import { useIntl, Link, FormattedMessage, navigate, changeLocale } from "gatsby-plugin-intl";


function NavBar() {
  const intl = useIntl()
  return (
    <div className="navbar">
      <div className="container-navbar-logo">
        <div id="home" className="id-rastreador-home"></div>
        <div className="navbar-logo-title"><a href="#home">PIZZA AM <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="red" fill="red"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" /></svg> RE</a></div>
      </div>
      <div className="container-navbar-itens">
        <div className="navbar-itens"><a href="#sabores">{intl.formatMessage({ id: "Sabores" })}</a></div>
        <div className="navbar-itens"><a href="#sobre">{intl.formatMessage({ id: "Quem Somos" })}</a></div>
        <div className="navbar-itens"><a href="#contato">{intl.formatMessage({ id: "Contate-nos" })}</a></div>
      </div>
      <div id="select-lang-id">
        <div className="container-navbar-itens-language" onClick={() => { booleanOpenSelectedMenu() }}>
          <div className="navbar-itens-title-menu"><a>{intl.formatMessage({ id: "Selecionar Idioma" })}</a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M320 224H416c17.67 0 32-14.33 32-32s-14.33-32-32-32h-95.1c-17.67 0-32 14.33-32 32S302.3 224 320 224zM320 352H480c17.67 0 32-14.33 32-32s-14.33-32-32-32h-159.1c-17.67 0-32 14.33-32 32S302.3 352 320 352zM320 96h32c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32h-32c-17.67 0-32 14.33-32 32S302.3 96 320 96zM544 416h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 416 544 416zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z" /></svg></div>
          <div className="navbar-itens-lang-selected"><a>{langSelected}</a></div>
        </div>
      </div>
    </div>
  )
}

function BodyContent() {
  const intl = useIntl()
  useEffect(() => {
    //hoverLeftPizza();
  });
  return (
    <>
      <div id="sabores" className="bodyContent">
        <div className="id-rastreador-sabor"></div>
        <div className="title">{intl.formatMessage({ id: "Sabores" })}</div>
        <div className="borderLine"></div>
        <div className="title-container">{intl.formatMessage({ id: "Mais Vendidas" })}</div>
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
        <div className="pizza-especial-expanded"><div className="title-container" onClick={() => changeBooleanExpandedPizzaEspecial()}><div className="expanded-menu-off">[Ver Mais <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="rgb(128, 104, 27)"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></svg> ]</div></div></div>
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
              <div className="ingredientes-container" onClick={() => booleanHoverPizza(21)}>
                <div id="render-price-21">
                  <div className="ingredientes" onClick={() => booleanHoverPizza(21)}>Ingredientes</div>
                  <div className="ingredientes-list" onClick={() => booleanHoverPizza(21)}>
                    <div>Queijo</div>
                    <div>Banana com Canela</div>
                    <div></div>
                    <div className="ver-preco">[Ver Preço]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-center">
            <div className="content-card">
              <div className="title-content-card">Pizza de Chocolate Branco com Nutela</div>
              <div className="borderLine-card"></div>
              <div className="circle-image">
                <img className="image-manipulation" src={Icon} />
              </div>
              <div className="borderLine-card-bottom">
                <div className="borderLine-card"></div>
              </div>
              <div className="ingredientes-container" onClick={() => booleanHoverPizza(22)}>
                <div id="render-price-22">
                  <div className="ingredientes" onClick={() => booleanHoverPizza(22)}>Ingredientes</div>
                  <div className="ingredientes-list" onClick={() => booleanHoverPizza(22)}>
                    <div>Queijo</div>
                    <div>Chocolate Branco</div>
                    <div>Nutela</div>
                    <div className="ver-preco">[Ver Preço]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-right">
            <div className="content-card">
              <div className="title-content-card">Pizza Chocolate Branco com Nozes</div>
              <div className="borderLine-card"></div>
              <div className="circle-image">
                <img className="image-manipulation" src={Icon} />
              </div>
              <div className="borderLine-card-bottom">
                <div className="borderLine-card"></div>
              </div>
              <div className="ingredientes-container" onClick={() => booleanHoverPizza(23)}>
                <div id="render-price-23">
                  <div className="ingredientes" onClick={() => booleanHoverPizza(23)}>Ingredientes</div>
                  <div className="ingredientes-list" onClick={() => booleanHoverPizza(23)}>
                    <div>Queijo</div>
                    <div>Chocolate Branco</div>
                    <div>Nozes</div>
                    <div className="ver-preco">[Ver Preço]</div>
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
      <div className="title-container">Pizzas de Doces</div>
      <div className="containerImages">
        <div className="image-left">
          <div className="content-card">
            <div className="title-content-card">Pizza de Banana</div>
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
                  <div></div>
                  <div className="ver-preco">[Ver Preço]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-center">
          <div className="content-card">
            <div className="title-content-card">Pizza de Chocolate</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onClick={() => booleanHoverPizza(32)}>
              <div id="render-price-32">
                <div className="ingredientes" onClick={() => booleanHoverPizza(32)}>Ingredientes</div>
                <div className="ingredientes-list" onClick={() => booleanHoverPizza(32)}>
                  <div>Queijo</div>
                  <div>Chocolate</div>
                  <div></div>
                  <div className="ver-preco">[Ver Preço]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-right">
          <div className="content-card">
            <div className="title-content-card">Pizza de Doce de Leite</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onClick={() => booleanHoverPizza(33)}>
              <div id="render-price-33">
                <div className="ingredientes" onClick={() => booleanHoverPizza(33)}>Ingredientes</div>
                <div className="ingredientes-list" onClick={() => booleanHoverPizza(33)}>
                  <div>Queijo</div>
                  <div>Doce de Leite</div>
                  <div></div>
                  <div className="ver-preco">[Ver Preço]</div>
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
            <div className="title-content-card">Pizza de Portuguesa</div>
            <div className="borderLine-card"></div>
            <div className="circle-image">
              <img className="image-manipulation" src={Icon} />
            </div>
            <div className="borderLine-card-bottom">
              <div className="borderLine-card"></div>
            </div>
            <div className="ingredientes-container" onClick={() => booleanHoverPizza(41)}>
              <div id="render-price-41">
                <div className="ingredientes" onClick={() => booleanHoverPizza(41)}>Ingredientes</div>
                <div className="ingredientes-list" onClick={() => booleanHoverPizza(41)}>
                  <div>Queijo, Presunto</div>
                  <div>Ovo, Calabresa</div>
                  <div>Pimentão, Tomate, Azeitona</div>
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
      <div className="title-container">Quem Somos</div>
      <div className="container-why-are">
        <div className="left-container">

        </div>
        <div className="right-container">

        </div>
      </div>
    </div>
  )
}

function ContactUs() {
  return (
    <div className="contactContent">
      <div id="contato" className="id-rastreador-sobre"></div>
      <div className="title-container">Contate-nos</div>
      <div className="container-contact">
        <div className="left-container">

        </div>
        <div className="middle-container">

        </div>
        <div className="right-container">

        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footerContent">
      <div id="contato" className="id-rastreador-sobre"></div>
      <div className="title-container">Pizza Amore</div>
      <div>Powered by Zion Mount Technology</div>
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
      <Footer></Footer>
    </main>
  )
}

export default IndexPage

let hoverObserver = true;
let booleanExpandedPizzaEspecial = false;
let booleanExpandedMenuLanguage = false;
let langSelected = "Português";

function booleanOpenSelectedMenu() {
  booleanExpandedMenuLanguage = !booleanExpandedMenuLanguage;

  if (booleanExpandedMenuLanguage === true) {
    ReactDOM.render(
      <div id="select-lang-id">
        <div className="container-navbar-itens-language" onClick={() => { booleanOpenSelectedMenu() }}>
          <div className="navbar-itens-title-menu-true"><a>Selecionar Idioma</a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M416 288h-95.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H416c17.67 0 32-14.33 32-32S433.7 288 416 288zM352 416h-32c-17.67 0-32 14.33-32 32s14.33 32 32 32h32c17.67 0 31.1-14.33 31.1-32S369.7 416 352 416zM480 160h-159.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H480c17.67 0 32-14.33 32-32S497.7 160 480 160zM544 32h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 32 544 32zM151.6 41.95c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.475 151.1 5.35 171.4 18.38 183.3c6.141 5.629 13.89 8.414 21.61 8.414c8.672 0 17.3-3.504 23.61-10.39L96 145.9v302C96 465.7 110.3 480 128 480s32-14.33 32-32.03V145.9L192.4 181.3C204.4 194.3 224.6 195.3 237.6 183.3c13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.95z" /></svg></div>
          <div className="open-menu-lang">
            {langSelected === "Português" &&
              <>
                <div className="navbar-itens-lang-selected"><a className="focus-lang" onClick={() => { setLanguageSelected("Português", "pt") }}>Português</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("English", "en") }}>English</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Español", "es") }}>Español</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Français", "fr") }}>Français</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Italiano", "it") }}>Italiano</a></div>
              </>
            }
            {langSelected === "English" &&
              <>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Português", "pt") }}>Português</a></div>
                <div className="navbar-itens-lang-selected"><a className="focus-lang" onClick={() => { setLanguageSelected("English", "en") }}>English</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Español", "es") }}>Español</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Français", "fr") }}>Français</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Italiano", "it") }}>Italiano</a></div>
              </>
            }
            {langSelected === "Español" &&
              <>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Português", "pt") }}>Português</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("English", "en") }}>English</a></div>
                <div className="navbar-itens-lang-selected"><a className="focus-lang" onClick={() => { setLanguageSelected("Español", "es") }}>Español</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Français", "fr") }}>Français</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Italiano", "it") }}>Italiano</a></div>
              </>
            }
            {langSelected === "Français" &&
              <>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Português", "pt") }}>Português</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("English", "en") }}>English</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Español", "es") }}>Español</a></div>
                <div className="navbar-itens-lang-selected"><a className="focus-lang" onClick={() => { setLanguageSelected("Français", "fr") }}>Français</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Italiano", "it") }}>Italiano</a></div>
              </>
            }
            {langSelected === "Italiano" &&
              <>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Português", "pt") }}>Português</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("English", "en") }}>English</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Español", "es") }}>Español</a></div>
                <div className="navbar-itens-lang-selected"><a onClick={() => { setLanguageSelected("Français", "fr") }}>Français</a></div>
                <div className="navbar-itens-lang-selected"><a className="focus-lang" onClick={() => { setLanguageSelected("Italiano", "it") }}>Italiano</a></div>
              </>
            }
          </div>

        </div>
      </div>
      ,
      document.getElementById('select-lang-id')
    );
  }

  if (booleanExpandedMenuLanguage === false) {
    ReactDOM.render(
      <div id="select-lang-id">
        <div className="container-navbar-itens-language" onClick={() => { booleanOpenSelectedMenu() }}>
          <div className="navbar-itens-title-menu"><a>Selecionar Idioma</a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M320 224H416c17.67 0 32-14.33 32-32s-14.33-32-32-32h-95.1c-17.67 0-32 14.33-32 32S302.3 224 320 224zM320 352H480c17.67 0 32-14.33 32-32s-14.33-32-32-32h-159.1c-17.67 0-32 14.33-32 32S302.3 352 320 352zM320 96h32c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32h-32c-17.67 0-32 14.33-32 32S302.3 96 320 96zM544 416h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 416 544 416zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z" /></svg></div>
          <div className="navbar-itens-lang-selected"><a>{langSelected}</a></div>
        </div>
      </div>
      ,
      document.getElementById('select-lang-id')
    );
  }
}

function openSelectedMenu() {

}

function setLanguageSelected(lang, pathLang) {
  langSelected = lang;
  changeLocale(pathLang)
}

function booleanHoverPizza(id) {
  hoverObserver = !hoverObserver;
  hoverPizza(id);
}
function hoverPizza(id) {
  if (hoverObserver === true) {
    if (id === 21) {
      ReactDOM.render(
        <div id="render-price-21" className="ingredientes-container" onClick={() => booleanHoverPizza(21)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(21)}>Preço</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(21)}>
            <div>De</div>
            <div className="promocao-pizza">R$ 45,00</div>
            <div>Por</div>
            <div>R$ 35,00</div>
            <div className="ver-preco">[Ver Ingredientes]</div>
          </div>
        </div>,
        document.getElementById('render-price-21')
      );
    }
    if (id === 22) {
      ReactDOM.render(
        <div id="render-price-22" className="ingredientes-container" onClick={() => booleanHoverPizza(22)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(22)}>Preço</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(22)}>
            <div>De</div>
            <div className="promocao-pizza">R$ 40,00</div>
            <div>Por</div>
            <div>R$ 34,00</div>
            <div className="ver-preco">[Ver Ingredientes]</div>
          </div>
        </div>,
        document.getElementById('render-price-22')
      );
    }
    if (id === 23) {
      ReactDOM.render(
        <div id="render-price-23" className="ingredientes-container" onClick={() => booleanHoverPizza(23)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(23)}>Preço</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(23)}>
            <div>De</div>
            <div className="promocao-pizza">R$ 45,00</div>
            <div>Por</div>
            <div>R$ 39,00</div>
            <div className="ver-preco">[Ver Ingredientes]</div>
          </div>
        </div>,
        document.getElementById('render-price-23')
      );
    }
    if (id === 31) {
      ReactDOM.render(
        <div id="render-price-31" className="ingredientes-container" onClick={() => booleanHoverPizza(31)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(31)}>Preço</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(31)}>
            <div>De</div>
            <div className="promocao-pizza">R$ 25,00</div>
            <div>Por</div>
            <div>R$ 20,00</div>
            <div className="ver-preco">[Ver Ingredientes]</div>
          </div>
        </div>,
        document.getElementById('render-price-31')
      );
    }
    if (id === 32) {
      ReactDOM.render(
        <div id="render-price-32" className="ingredientes-container" onClick={() => booleanHoverPizza(32)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(32)}>Preço</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(32)}>
            <div>De</div>
            <div className="promocao-pizza">R$ 30,00</div>
            <div>Por</div>
            <div>R$ 27,00</div>
            <div className="ver-preco">[Ver Ingredientes]</div>
          </div>
        </div>,
        document.getElementById('render-price-32')
      );
    }
    if (id === 33) {
      ReactDOM.render(
        <div id="render-price-33" className="ingredientes-container" onClick={() => booleanHoverPizza(33)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(33)}>Preço</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(33)}>
            <div>De</div>
            <div className="promocao-pizza">R$ 33,00</div>
            <div>Por</div>
            <div>R$ 28,00</div>
            <div className="ver-preco">[Ver Ingredientes]</div>
          </div>
        </div>,
        document.getElementById('render-price-33')
      );
    }
    if (id === 41) {
      ReactDOM.render(
        <div id="render-price-41" className="ingredientes-container" onClick={() => booleanHoverPizza(41)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(41)}>Preço</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(41)}>
            <div>De</div>
            <div className="promocao-pizza">R$ 20,00</div>
            <div>Por</div>
            <div>R$ 18,00</div>
            <div className="ver-preco">[Ver Ingredientes]</div>
          </div>
        </div>,
        document.getElementById('render-price-41')
      );
    }
  }

  if (hoverObserver === false) {
    if (id === 21) {
      ReactDOM.render(
        <div id="render-price-21" className="ingredientes-container" onClick={() => booleanHoverPizza(21)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(21)}>Ingredientes</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(21)}>
            <div>Queijo</div>
            <div>Banana com Canela</div>
            <div>Nutela</div>
            <div className="ver-preco">[Ver Preço]</div>
          </div>
        </div>,
        document.getElementById('render-price-21')
      );
    }
    if (id === 22) {
      ReactDOM.render(
        <div id="render-price-22">
          <div className="ingredientes" onClick={() => booleanHoverPizza(22)}>Ingredientes</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(22)}>
            <div>Queijo</div>
            <div>Chocolate Branco</div>
            <div>Nutela</div>
            <div className="ver-preco">[Ver Preço]</div>
          </div>
        </div>,
        document.getElementById('render-price-22')
      );
    }
    if (id === 23) {
      ReactDOM.render(
        <div id="render-price-23">
          <div className="ingredientes" onClick={() => booleanHoverPizza(23)}>Ingredientes</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(23)}>
            <div>Queijo</div>
            <div>Chocolate Branco</div>
            <div>Nutela</div>
            <div className="ver-preco">[Ver Preço]</div>
          </div>
        </div>,
        document.getElementById('render-price-23')
      );
    }
    if (id === 31) {
      ReactDOM.render(
        <div id="render-price-31" className="ingredientes-container" onClick={() => booleanHoverPizza(31)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(31)}>Ingredientes</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(31)}>
            <div>Queijo</div>
            <div>Banana com Canela</div>
            <div></div>
            <div className="ver-preco">[Ver Preço]</div>
          </div>
        </div>,
        document.getElementById('render-price-31')
      );
    }
    if (id === 32) {
      ReactDOM.render(
        <div id="render-price-32" className="ingredientes-container" onClick={() => booleanHoverPizza(32)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(32)}>Ingredientes</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(32)}>
            <div>Queijo</div>
            <div>Chocolate</div>
            <div></div>
            <div className="ver-preco">[Ver Preço]</div>
          </div>
        </div>,
        document.getElementById('render-price-32')
      );
    }
    if (id === 33) {
      ReactDOM.render(
        <div id="render-price-33" className="ingredientes-container" onClick={() => booleanHoverPizza(33)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(33)}>Ingredientes</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(33)}>
            <div>Queijo</div>
            <div>Doce de Leite</div>
            <div></div>
            <div className="ver-preco">[Ver Preço]</div>
          </div>
        </div>,
        document.getElementById('render-price-33')
      );
    }
    if (id === 41) {
      ReactDOM.render(
        <div id="render-price-41" className="ingredientes-container" onClick={() => booleanHoverPizza(41)}>
          <div className="ingredientes" onClick={() => booleanHoverPizza(41)}>Ingredientes</div>
          <div className="ingredientes-list" onClick={() => booleanHoverPizza(41)}>
            <div>Queijo, Presunto</div>
            <div>Ovo, Calabresa</div>
            <div>Pimentão, Tomate, Azeitona</div>
            <div className="ver-preco">[Ver Preço]</div>
          </div>
        </div>,
        document.getElementById('render-price-41')
      );
    }
  }
}

function changeBooleanExpandedPizzaEspecial() {
  let i = 0;
  booleanExpandedPizzaEspecial = !booleanExpandedPizzaEspecial;
  expandedPizzaEspecial();
}

function expandedPizzaEspecial() {
  let i = 0;
  var pizza_array_columns = document.getElementsByClassName("pizza-especial-expanded");

  if (booleanExpandedPizzaEspecial === false) {
    for (i; i < pizza_array_columns.length; i++) {
      ReactDOM.render(<div className="pizza-especial-expanded"><div className="title-container" onClick={() => changeBooleanExpandedPizzaEspecial()}><div className="expanded-menu-off">[Ver Mais <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="rgb(128, 104, 27)"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></svg> ]</div></div></div>
        , pizza_array_columns[i]);
    }
  }

  if (booleanExpandedPizzaEspecial === true) {
    for (i; i < pizza_array_columns.length; i++) {
      ReactDOM.render(showMorePizzasEpeciais
        , pizza_array_columns[i]);
    }
  }

  /*
    if(i < comparisonIteration){
  
      if (booleanExpandedPizzaEspecial === false) {
        for (i; i < document.getElementsByClassName("pizza-especial-expanded").length; i++) {
          ReactDOM.render(<div className="pizza-especial-expanded"><div className="title-container" onClick={() => changeBooleanExpandedPizzaEspecial()}><div className="expanded-menu-off">[Ver Mais <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="rgb(128, 104, 27)"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></svg> ]</div></div></div>
            , document.getElementsByClassName("pizza-especial-expanded")[i]);
          comparisonIteration = i;
          return i--;
        }
      }
    
      if (booleanExpandedPizzaEspecial === true) {
        for (i; i < document.getElementsByClassName("pizza-especial-expanded").length; i++) {
          ReactDOM.render(showMorePizzasEpeciais
            , document.getElementsByClassName("pizza-especial-expanded")[i]);
          comparisonIteration = i;
          //return i++;
        }
      }
    }
    */
}

const showMorePizzasEpeciais = (
  <>
    <div>

    </div>
    <div id="pizza-especial-expanded"><div className="title-container" onClick={() => changeBooleanExpandedPizzaEspecial()}><div className="expanded-menu-off">[Ver Menos <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="rgb(128, 104, 27)"><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" /></svg> ]</div></div></div>
  </>
)