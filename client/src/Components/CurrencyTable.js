import React, { useEffect } from "react";
 

const CurrencyTable = (props) => {

 const {data, searchText}=props

 const datam = data.filter(item=> item.attributes.CurrencyCode.includes(searchText))

 console.log("datam",data)
  return  (

    <div>

{data &&  datam.map((item, key)=> 

<div key={key} style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial', backgroundColor: key%2===0 ? 'white': '#E5E5E5'}}> 

     

<div style={{width:200}}>{ item.attributes.CurrencyCode } / TRY</div>



    <div style={{width:100}}>{item.children[0].value}</div>
    <div style={{width:350}}>{item.children[1].value}</div>
 
    <div style={{width:150}}>{item.children[3].value}</div>
    <div style={{width:150}}>{item.children[4].value}</div>
    <div style={{width:150}}>{item.children[5].value}</div>
    <div style={{width:150}}>{item.children[6].value}</div>


</div>)}

</div>
  )
  
 
};

export default CurrencyTable;
