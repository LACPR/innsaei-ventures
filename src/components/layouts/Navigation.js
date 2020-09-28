import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { NavHashLink } from 'react-router-hash-link'
import './Navigation.css'
import { menu } from './Menu'

export class Navigation extends Component {
  state = {
    toggleMenu: false,
    hash:'',
    transperancy: 0
  }
  componentDidMount(){
    this.setState({...this.state, hash:this.props.location.hash});
    window.addEventListener('scroll', this.onScroll)
  }
  btnClick = e => {
    this.setState({ ...this.state, toggleMenu:!this.state.toggleMenu})
  }
  componentDidUpdate(){
    if(this.state.hash !== this.props.location.hash ){
      this.setState({...this.state,toggleMenu:false,  hash:this.props.location.hash})
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  onScroll = () => {
    if(window.pageYOffset < 500){
      this.setState({...this.state, transperancy:(window.pageYOffset/500)})
    }else{
      this.setState({...this.state, transperancy:1})
    }
  }
  render() {
    const navStyle = {
      background:`rgba(36,36,36,${this.state.transperancy})`,
    }
    /* const fcScroll = el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const fcActive = id => this.state.hash === id ? 'active':'' */
    return (
      <nav style={navStyle}>
        <p className="nav-items">About Innsaei</p>
        <p className="nav-items">Investment Philosophy</p>  
      <div className={this.state.toggleMenu ? 'collapsable open': 'collapsable'} style={navStyle}>
      <ul id="menu-items">
        <li>Startups</li>
        <li>Insiders</li>
        <li>Insights</li>
        <li>AskRia</li>
      {/* <li><NavHashLink
        to="/#header"
        scroll={fcScroll}
        className={fcActive('#')}
        >Startups</NavHashLink></li>
        <li><NavHashLink
        to="/#"
        scroll={fcScroll}
        className={fcActive('#')}
        >Insiders</NavHashLink></li>
        <li><NavHashLink
        to="/#"
        scroll={fcScroll}
        className={fcActive('#')}
        >Insights</NavHashLink></li>
        <li><NavHashLink
        to="/#"
        scroll={fcScroll}
        className={fcActive('#')}
        >AskRia</NavHashLink></li>  */}
      </ul>
    </div>
    <button className="btn-toggle"
    onClick = { this.btnClick }
    >{menu}</button>
    </nav>
    )
  }
}

export default withRouter(Navigation)