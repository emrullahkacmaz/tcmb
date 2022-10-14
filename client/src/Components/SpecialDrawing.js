import React, { useEffect } from "react";
 

const SpecialDrawing = (props) => {
    const {data}= props
    

 
  return  (

    <div>

 <div style={{marginTop:30, backgroundColor:  '#E5E5E5'}}>Bilgi İçin / For Information</div>

<div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial',  backgroundColor:  'white'}}> 

     

<div style={{width:200}}>
SDR / TRY

</div>



    <div style={{width:150}}>
 
    1
    </div>
    <div style={{width:320}}>
ÖZEL ÇEKME HAKKI (SDR)
    </div>
 
    <div style={{width:150}}>
{data && data.children[3].value}
    </div>
    <div style={{width:320}}>
	TÜRK LİRASI
    </div>
  


</div>  
<div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'initial',  backgroundColor:  '#E5E5E5'}}> 

     

<div style={{width:200}}>
SDR / USD

</div>



    <div style={{width:150}}>
 
    1
    </div>
    <div style={{width:320}}>
    ÖZEL ÇEKME HAKKI (SDR)
    </div>
 
    <div style={{width:150}}>
    {data && data.children[8].value}
    </div>
    <div style={{width:320}}>
 ABD DOLARI
    </div>
  


</div>  

</div>
  )
  
 
};

export default SpecialDrawing;
