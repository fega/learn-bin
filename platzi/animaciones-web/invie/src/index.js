import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import './index.css'
import './css/animation.css'
import logo from './logo.svg'
import logoVue from './logo-vue.png'
import crash from './images/crash.png'
import klavier from './images/klavier.gif'



import cheet from 'cheet.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const initialState = {
  props: {
    menu: [
      {
        href: 'index.html',
        title: 'Home'
      },
      {
        href: '#guitarras',
        title: 'Guitarras'
      },
      {
        href: 'precios.html',
        title: 'Precios'
      }
    ],
    logo,
    guitarras: [
      {
        image: 'images/invie-acustica.png',
        alt: 'Guitarra Invie Acustica',
        name: 'Invie Acustica',
        features: [
          'Estilo vintage',
          'Madera pura',
          'Incluye estuche invisible de aluminio'
        ]
      },
      {
        image: 'images/invie-classic.png',
        alt: 'Guitarra Invie classic',
        name: 'Invie Classic',
        features: [
          'Estilo vintage',
          'Liviana',
          'Inicia tu camino como Rockstar'
        ]
      }
    ]
  }
}
function reducer (state, action) {
  switch (action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload
      return {...state,...newProps}
    }
    default: {
      return state
    }
  }
}
const store = createStore(reducer, initialState)
const vueState ={
  logo:logoVue,
  guitarras:[
    {
      image: crash,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio'
      ]
    },
    {
      image: klavier,
      alt: 'Guitarra Invie classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como Rockstar'
      ]
    }
  ],
  menu: []
}

cheet('r e a c t', () => {
  console.log('HEY')
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: initialState
  })
})
cheet('v u e', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload:{
      props: vueState
    }
  })
})

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
)
