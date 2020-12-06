import { Component, Fragment } from 'react';
import Chatbar from './Chatbar';
import Sidebar from './Sidebar';
import {connect} from 'react-redux'
import './App.css';
import Login from './Login';
import {auth} from './firebase'
import * as actionType from './store/actionTypes'
import db from './firebase'

class App extends Component {

  // componentDidUpdate(){
    
  // }

  componentDidMount(){
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        this.props.login({
          name:userAuth.displayName,
          email:userAuth.email,
          id:userAuth.uid,
          image:userAuth.photoURL
        })

        db.collection('channels').onSnapshot((snapshot)=>{
          if(snapshot.docs.length > 0){
          const data = snapshot.docs.map((doc)=>{
            return {
              id:doc.id,
              channelName:doc.data()
            }
          })
          this.props.addChannel(data)
        }
        })

      }else{
        this.props.logout()
      }
    })
  }

   logout = ()=>{
    auth.signOut()
  }

  addChannelHandler(){
    const channelName = prompt('Enter channel name')
    db.collection('channels').add({
      channelName:channelName
    })
  }
  
  render(){
    return (
      <div className="App">
      {

        this.props.user ? 
        <Fragment> 
          <Sidebar  
          channels = {this.props.app}
          addChannel = {this.addChannelHandler}
          logout={this.logout}
          name={this.props.user.name}
          image={this.props.user.image}
          />
          <Chatbar />
        </Fragment> : 

        <Login />
      }
        
      </div>
    );
  }
  
}

const mapStateToProps = (state)=>{
  return {
    user:state.user.user,
    app:state.channel.channels
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    login :(user)=> dispatch({
      type:actionType.LOGIN,
      payload:user
    }),
    logout : ()=> dispatch({
      type:actionType.LOGOUT
    }),
    addChannel : (val)=> dispatch({
      type:actionType.ADD_CHANNEL,
      value : val
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
