/**
 * Created by zhengqiguang on 2017/4/30.
 */

var whiteRefererSet = [];

console.log(process.env);

var common = {

    checkReferer(referer){

        if (this.isDev()) {
            return true;
        }


        if (!referer) {
            return false
        } else {
            //@TODO 白名单判断
        }
    },
    isDev(){
        return process.env.NODE_ENV === 'development';
    }


}

module.exports = common;