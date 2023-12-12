import httpCommon from "./http-common";

class Services{
    contents(){
        return httpCommon.get('/contents');
    }
}

export default new Services();