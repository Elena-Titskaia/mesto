export default class UserInfo{
    constructor( entityProfile ){
    this._profileName = document.querySelector(entityProfile.profileNameSelector);
    this._profileInfo = document.querySelector(entityProfile.profileJobSelector);
    }

    getUserInfo(){
        return{
            username: this._profileName.textContent,
            profession: this._profileInfo.textContent
        }
    }

    setUserInfo(dataUser){
        this._profileName.textContent = dataUser.username,
        this._profileInfo.textContent = dataUser.profession
    }
}
