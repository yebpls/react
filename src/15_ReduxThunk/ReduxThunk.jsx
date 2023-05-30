import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../reducers/userReducer";

function ReduxThunk() {
  const [username, setUsername] = useState("");
  const handleChangeUsername = (evt) => {
    setUsername(evt.target.value);
  };

  const { user, isLoading, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getUserAction(username));
  };

  const renderUser = () => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    if (user) {
      return (
        <div>
          <p>{user.login}</p>
          <p>{user.name}</p>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Find github user</h1>

      <div className="mb-3">
        <label className="form-label">Input username</label>
        <input
          className="form-control"
          value={username}
          onChange={handleChangeUsername}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>

      {renderUser()}
    </div>
  );
}

export default ReduxThunk;
