const uuid = require('uuid')

class UserActivity {
    constructor( type,content, datetime,relatedActivityId){
        this.id = uuid.v4();
        this.type = type; // post||comment
        this.content = content;
        this.datetime = datetime;
        this.relatedActivityId = [...relatedActivityId];
    }
    getUserActivity(){
        return this
    }
}