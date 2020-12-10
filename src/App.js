import Chatbar from "./Chatbar";
import Sidebar from "./Sidebar";
import "./App.css";
import Login from "./Login";
import { auth } from "./firebase";
import * as actionType from "./store/actionTypes";
import db from "./firebase";

import React, { useState, useEffect, useCallback, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";


const App = (props) => {
  const [channelName, setchannelName] = useState("");
  const [channelId, setchannelId] = useState(null);

  const user = useSelector((state) => state.user.user);
  const channel = useSelector((state) => state.channel.channels);

  // user:state.user.user,
  // app:state.channel.channels

  const dispatch = useDispatch();

  const login = useCallback(
    (user) =>
      dispatch({
        type: actionType.LOGIN,
        payload: user,
      }),
    [dispatch]
  );
  const logout = useCallback(
    () =>
      dispatch({
        type: actionType.LOGOUT,
      }),
    [dispatch]
  );
  const addChannel = useCallback(
    (val) =>
      dispatch({
        type: actionType.ADD_CHANNEL,
        value: val,
      }),
    [dispatch]
  );

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        login({
          name: userAuth.displayName,
          email: userAuth.email,
          id: userAuth.uid,
          image: userAuth.photoURL,
        });

        db.collection("channels").onSnapshot((snapshot) => {
          if (snapshot.docs.length > 0) {
            const data = snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                channelName: doc.data(),
              };
            });
            addChannel(data);
          }
        });
      } else {
        logout();
      }
    });
  }, [logout, addChannel, login]);

  const onLogout = () => {
    auth.signOut();
  };

  const addChannelHandler = () => {
    const channelName = prompt("Enter channel name");
    db.collection("channels").add({
      channelName: channelName,
    });
  };

  const getChannel = useCallback(
    (name, id) => {
      setchannelName(name);
      setchannelId(id);
    },
    [],
  )

  return (
    <div className="App">
      {user ? (
        <Fragment>
          <Sidebar
            channels={channel}
            getChannel={getChannel}
            addChannel={addChannelHandler}
            logout={onLogout}
            name={user.name}
            image={user.image}
          />
          <Chatbar id={channelId} name={channelName} />
        </Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
