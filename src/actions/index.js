import * as Types from "../constants/ActionTypes";
import callApi from "../utils/callApi";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from "jwt-decode";

export const actGetAllNewsRequest = () => {
  return dispatch => {
    return callApi("news", "GET", null).then(res => {
      dispatch(actGetAllNews(res.data));
    });
  };
};

export const actGetAllNews = news => {
  return {
    type: Types.GET_NEWS,
    news
  };
};

export const actAddNewRequest = data => {
  return dispatch => {
    return callApi("posts", "POST", data).then(
      res => {
        dispatch(actAddNew(res.data));
      }
    );
  };
};

export const actAddNew = new1 => {
  return {
    type: Types.ADD_NEWS,
    new1
  };
};

export const actAddCommentsRequest = (id, new_cmt) => {  
  return dispatch => {
    return callApi(`posts/${id}`, "POST", { comment: new_cmt }).then(res => {      
      dispatch(actAddComment(res.data,res.data.comments));
    });
  };
};

export const actAddComment = (newC,comments) => {
  return {
    type: Types.ADD_COMMENTS,
    newC,
    comments
  };
};

export const actLikeRequest = id => {  
  return dispatch => {
    return callApi(`posts/${id}/like`, "POST", null).then(res => {      
      dispatch(actLike(res.data,res.data.likesQuantity));
    });
  };
};

export const actLike = (newL,likesQuantity) => {
  return {
    type: Types.LIKE_NEWS,
    newL,
    likesQuantity
  };
};

export const setCurrentUser = user => {
  return {
    type: Types.SET_CURRENT_USER,
    user
  };
};

export const actLoginUser = user => dispatch => {
  callApi("login", "POST", user).then(res => {
    const token = res.data.token;
    localStorage.setItem("jwtToken", token);
    setAuthorizationToken(token);
    const decoded = jwt_decode(token);
    dispatch(actGetProfile(decoded));
  });
};

export const actGetProfile = decoded => dispatch => {
  callApi(`users/${decoded._id}`, "GET", null).then(res => {
    dispatch(setCurrentUser(res.data))
  })
};

export const actLogoutUser = (history) => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
  history.push("/");
  dispatch(setCurrentUser({}));
};

export const actEditProfileRequest = (user) => {
  return dispatch => {
    return callApi("users/me","PATCH",user).then(res => {
      dispatch(actEditProfile(res.data));
    })
  }
}

export const actEditProfile = user => {
  return {
    type: Types.EDIT_PROFILE,
    user
  }
}
