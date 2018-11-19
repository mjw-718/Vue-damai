import axios from "axios";
export default ({
    method,
    url,
    params = {}
}) => {
    
    if(method==="get"){
        
        return axios({
            method,
            url,
            params
        }).then(result => {
            return result;
        }).catch(error => {
            return error
        })
    }else{
        // console.log(params)
        let data = params
        return axios({
            method: "post",
            url: "/Show/getShowList",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data
          });
    }
    
}
