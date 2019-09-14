 export  const  setFields =  (fields)=>
       (dispatch) => {
        dispatch( {
            type:'SET_FIELDS',
            payload:fields
        })
     }



