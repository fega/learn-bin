import React,{Component} from 'react'
import {connect} from 'react-redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

function mapState(state){

  return {
    guitarras: state.props.guitarras
  }
}


class Guitarras extends Component{
  render(){
    const guitarras = this.props.guitarras
    return(
      <section id="guitarras" className="guitarras contenedor">
      <h2>Nuestra guitarras</h2>
      <div className="video-demo-contenedor">
        <div className="video-demo">
          <div className="video-responsive-contenedor">
            <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameBorder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      {guitarras.map((el,i)=>(
        <article className="guitarra" key={i}>
          <CSSTransitionGroup
           transitionName="cambio"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={500}
          >
            <img src={el.image} key={el.image}  alt={el.alt} width="350" className="cambio"/>
          </CSSTransitionGroup>
          <CSSTransitionGroup
           transitionName="fade"
           transitionEnterTimeout={500}
           transitionLeave={false}
          >
            <div className="contenedor-guitarra-a" key={el.image}>
              <h3 className="title-a">{el.name}</h3>
              <ol>
                {el.features.map((fe,i)=><li key={i}>{fe}</li>)}
              </ol>
            </div>
          </CSSTransitionGroup>
        </article>
      ))}
    </section>
    )
  }
}

export default connect(mapState)(Guitarras)
