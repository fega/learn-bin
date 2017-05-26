import React, {Component} from 'react'
import {connect} from 'react-redux'

function mapState(state){
  console.log(state)
  return {
    logo: state.props.logo,
    menu: state.props.menu
  }
}
class Portada extends Component {
  render() {
    var menu = this.props.menu
    var logo = this.props.logo

    return (<section id="portada" className="portada background">
      <header id="header" className="header contenedor">
        <figure className="logotipo">
          <img src={logo}  width="186" height="60" alt="Invie logotipo"/>
        </figure>
        <span className="burguer-button icon-menu" id="burguer-button"></span>
        <nav className="menu" id="menu">
          <ul>
          {menu.map((el,i)=>(
            <li key={i}>
              <a href={el.href}>{el.title}</a>
            </li>
          ))}
          </ul>
        </nav>
      </header>
      <div className="contenedor">
        <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
        <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
        <a className="button" href="#guitarras">Conoce mas</a>
      </div>
    </section>)
  }
}
export default connect(mapState)(Portada)
