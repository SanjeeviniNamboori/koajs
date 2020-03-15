export class CatsController{
    
    constructor(){
        console.log("This is a default constructor")
    }

    async getCats()  {
        try{
           // let data: any = await this.attendanceDao.retrieve(reqData);
            return Promise.resolve({"id" : "1", "catName" : "mini"})
        }
        catch(error){
            return Promise.reject(error);
        }
    }

}