export default class UserInfo{
    constructor( entityProfile ){
    this._profileName = document.querySelector(entityProfile.profileNameSelector);
    this._profileInfo = document.querySelector(entityProfile.profileJobSelector);
    this._profileAvatar = document.querySelector(entityProfile.profileAvatarSelector)
    }

    getUserInfo(){
        return{
            username: this._profileName.textContent,
            profession: this._profileInfo.textContent
        }
    }

    setUserInfo({ username, profession, avatar }){
        this._profileName.textContent = username,
        this._profileInfo.textContent = profession,
        this._profileAvatar.src = avatar
    }
}
