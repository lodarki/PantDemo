import Storage from "react-native-storage";
import {AsyncStorage} from "react-native";

export default class CacheStorage {

    static STORAGE_KEY_TOKEN = 'globalToken';
    static STORAGE_KEY_USER_ID = 'globalUserID';
    static STORAGE_KEY_USER_CODE = 'globalUserCode';
    static STORAGE_KEY_NICK_NAME = 'globalNickName';
    static STORAGE_KEY_SCHOOL_ID = 'globalSchoolID';
    static STORAGE_KEY_TEACHER_WX_ID = 'globalTeacherWxID';//老师微信认证的微信编号，15天有效。
    static STORAGE_KEY_HAS_CHECK_WHITE_LIST = 'globalHasCheckWhiteList';//是否已经验证过白名单， （注：不要清这个缓存，即使是退出账号也不要清这个缓存）
    static STORAGE_KEY_IS_WHITE_LIST = 'globalIsWhiteList';//当前账号是否为白名单账号
    static STORAGE_KEY_SCHOOL_NAME = 'globalSchoolNAME';
    static STORAGE_KEY_SCHOOL_CODE = 'globalSchoolCODE';
    static STORAGE_KEY_USER_TYPE = 'globalUserType'; // 用户类型，   学生：“2”、老师：“0”、管理员：“1”
    static STORAGE_KEY_MEMBER_ID = 'globalMemberID'; // 根据当前角色   当用户类型为管理员或者教师的时候， 这个字段存的是teacherId， 否则存的是studentId
    static STORAGE_KEY_SSO_COOKIE = 'globalSSOCOOKIE'; // SSOCOOKIE --->SSO_COOKIE && SESSIONID_COOKIE_NAME
    static STORAGE_KEY_SCHOOL_USER_NAME = 'globalSchoolUserName'; // school 库的student 或 teacher 的 name
    static STORAGE_KEY_UPDATE_STATUS = 'globalUpdateStatus'; // 最新版本:"1" 需更新版本:"0"
    static STORAGE_KEY_FIRST_ENTER  = 'globalFirstEnter';// 首次进入:"1" 不是首次:"0"
    static STORAGE_KEY_MAIN_URL  = 'globalMainUrl';// main
    static STORAGE_TIME_OUT_ONE_MONTH = 1000 * 3600 * 24 * 30; //一个月
    static STORAGE_TIME_OUT_ONE_DAY = 1000 * 3600 * 24 ; //一天
    static STORAGE_TIME_OUT_FIFTEEN_DAY = 1000 * 3600 * 24 * 15 ; //15天

    static STORAGE_KEY_SCHOOL_LOGIN = 'globalSchoolLogin'; //学校数据库teacher 或 student 的Login
    static STORAGE_KEY_SCHOOL_INFO = 'globalSchoolInfo'; // 学校信息对象缓存 {schoolId:schoolId,schoolName:schoolName,schoolCode:schoolCode,userRole:userRole,userName:userName}

    static storage = new Storage({
        // 最大容量，默认值1000条数据循环存储
        size: 1000,

        // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
        // 如果不指定则数据只会保存在内存中，重启后即丢失
        storageBackend: AsyncStorage,

        // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
        defaultExpires: 1000 * 3600 * 24,

        // 读写时在内存中缓存数据。默认启用。
        enableCache: true,

        // 如果storage中没有相应数据，或数据已过期，
        // 则会调用相应的sync方法，无缝返回最新数据。
        // sync方法的具体说明会在后文提到
        // 你可以在构造函数这里就写好sync的方法
        // 或是写到另一个文件里，这里require引入
        // 或是在任何时候，直接对storage.sync进行赋值修改
        // sync:
    });

    static save(paramKey, paramRawData, paramExpires) {
        paramExpires = paramExpires || null;
        return this.storage.save({
            key: paramKey,
            id: paramKey,
            rawData: paramRawData,
            expires: paramExpires
        });
    }

    static setSync(methodObject){
        this.storage.sync = methodObject;
    }

    static load(paramKey) {
        return this.storage.load({
            key: paramKey,
            id: paramKey,
            autoSync: true,
            syncInBackground: false,
        });
    }

    static remove(paramKey) {
        return this.storage.remove({
            key: paramKey
        });
    }

    static clear() {
        this.remove(CacheStorage.STORAGE_KEY_TOKEN).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_USER_ID).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_USER_CODE).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_NICK_NAME).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_SCHOOL_ID).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_SCHOOL_NAME).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_SCHOOL_CODE).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_USER_TYPE).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_MEMBER_ID).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_SSO_COOKIE).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_SCHOOL_USER_NAME).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_SCHOOL_LOGIN).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_SCHOOL_INFO).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_UPDATE_STATUS).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_TEACHER_WX_ID).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_MAIN_URL).catch((err) => {console.log(err.message)});
        this.remove(CacheStorage.STORAGE_KEY_IS_WHITE_LIST).catch((err) => {console.log(err.message)});
    }
}
