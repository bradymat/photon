import { createStore } from 'redux'
import { update } from 'yo-yo'
import Router from 'sheet-router'

import reducer from './reducer'

import Home from './components'

const initView = document.createElement('div')
document.querySelector('main').appendChild(initView)

const initState = {
  title: 'Dimension Yoyo',
  route: '/',
  routeHistory: [],
  menu: [
    {route: '/intro', label: 'Intro'},
    {route: '/work', label: 'Work'},
    {route: '/about', label: 'About'},
    {route: '/contact', label: 'Contact'},
    {route: '/elements', label: 'Elements'}
  ],
  bg: 'https://images.unsplash.com/photo-1511835395240-60717c19396e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d61a2b8d1cfc425c81699d4d25ce8e83&auto=format&fit=crop&w=1350&q=80',
  bgs: [
    'https://images.unsplash.com/photo-1511835395240-60717c19396e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d61a2b8d1cfc425c81699d4d25ce8e83&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40287777c70341ddb8e2f708a114c6f1&auto=format&fit=crop&w=1356&q=80'
  ]
}

const { getState, dispatch, subscribe } = createStore(reducer, initState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home]
])

subscribe(() => {
  const state = getState()
  const newView = route(state.route)(state, dispatch)
  update(initView, newView)
})

dispatch({type: 'lemon'})
