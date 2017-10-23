export default {
  /* 设置用户信息 */
  SET_USER(state,data){
    console.log('mutations------------',data)
    state.user.nickName = data.nickName;
  },
  /* 设置 登录状态 */
  SET_LOGINSTATUS(state,data){
    console.log('mutations--------isLogin----',data.isLogin)
    state.user.isLogin = data.isLogin;
  }
}
