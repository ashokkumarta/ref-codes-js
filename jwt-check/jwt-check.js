// Parse token and get user object
const ISSUER_KEY =  'iss';
const ISSUER_VALUE =  'https://lab.shinova.in/';
const ISSUED_AT_KEY = "iat";
const EXPIRES_AT_KEY = "exp";
const AUD_KEY = "aud";
const EMAIL_KEY = "email";
const NAME_KEY = "name";
const ALLOWED_ACTIONS_KEY = "allowed-actions";
const ALLOWED_DATA_KEY = "allowed-data";
const JTI_KEY = "jti";

const AUTHZ_MODEL = 'IMPLIED'

exports.validate = function(accessToken) {
	
    try {
        unverified = JSON.parse(atob(accessToken.split('.')[1]));
    } catch (err) {
        throw new Error("Invalid access token [Error parsing token string]");
    }

    ct = Date.now()/1000;

    if (unverified[ISSUER_KEY] !== ISSUER_VALUE) {
        throw new Error("Invalid access token [Token not from trusted source]");
    } else if (unverified[ISSUED_AT_KEY] > ct) {
        throw new Error("Invalid access token [Token is not yet valid]");
    } else if (unverified[EXPIRES_AT_KEY] < ct) {
        throw new Error("Invalid access token [Token expired]");
    }

    aud = unverified[AUD_KEY];
    if (!aud) {
        throw new Error("Invalid access token [aud claim invalid]");
    }

    var user = {
        _id: aud,
        _email: unverified[EMAIL_KEY],
        _name: unverified[NAME_KEY],
        _allowed_actions: unverified[ALLOWED_ACTIONS_KEY],
        _allowed_data: unverified[ALLOWED_DATA_KEY],
        _iat: unverified[ISSUED_AT_KEY],
        _exp: unverified[EXPIRES_AT_KEY],
        _jti: unverified[JTI_KEY],
        id: function(){
          return this._id;
        },
        email: function(){
            return this._email;
          },
        name: function(){
          return this._name;
        },
        allowedActions: function(){
            return this._allowed_actions;
        },
        allowedData: function(){
            return this._allowed_data;
        },
        issuedAt: function(){
            return this._iat;
        },
        expiresAt: function(){
            return this._exp;
        },
        tokenId: function(){
            return this._jti;
        },
        checkAccess: function(data_code, page_code, action_code){
            perm_code = page_code + '-' + action_code;
            if (!this._allowed_data.includes(data_code)) {
                return false;
            }
            if (this._allowed_actions.includes(perm_code)) {
                return true;
            }
            if (AUTHZ_MODEL === 'IMPLIED') {
                for (var i = 0; i < this._allowed_actions.length; i++) {
                    if (this._allowed_actions[i].startsWith(perm_code)) {
                        return true;
                    }
                }
            } 
            return false;
        },

    }
    
    return user;
}
