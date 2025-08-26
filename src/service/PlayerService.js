import http from "../http-common";
class PlayerService{
    getall(){
        return http.get("/getAll")
    }
    add(data){
        return http.post("/add",data)
    }
    update(id,data){
        return http.put(`/update/${id}`,data)
    }
    getbyid(id){
        return http.get(`/getById/${id}`)
    }
    delete(id){
        return http.delete(`delete/${id}`)
    }
    display(role){
        return http.get(`/display/${role}`)
    }

}
export default new PlayerService();