import React, { useEffect, useState } from "react";
import axios from "axios";
import XMLParser from 'react-xml-parser';
import CurrencyTable from "../Components/CurrencyTable";
import CurrencyTableTitle from "../Components/CurrencyTableTitle";
import CrossRateTitle from "../Components/CrossRateTitle";
import CrossRateTable from "../Components/CrossRateTable";
import SpecialDrawing from "../Components/SpecialDrawing";

const HomeScreen = ({ user }) => {


  const [data, setData]=useState([]);
  const [sdr, setSdr]=useState();
  const [crossData, setCrossData]=useState([]);
  const [searchText, setSearchText]=useState('');

  useEffect(()=>{
    axios
    .get("https://www.tcmb.gov.tr/kurlar/today.xml", {
      "Content-Type": "application/xml; charset=utf-8"
    })
    .then(resp=> {
      var xml = new XMLParser().parseFromString(resp.data); 
      setSdr(xml.children[22])
     xml.children.splice(-1)
     setData(xml.children)

     {searchText.length>0 && setData(xml.children.filter((item=> item.attributes.CurrencyCode.toLowerCase().includes(searchText.toLowerCase()) || item.children[1].value.toLowerCase().includes(searchText.toLowerCase()) )))}

     var crossdata= xml.children.filter(item => item.children[7].value.length>0 || item.children[8].value.length>0)

     setCrossData(crossdata)
     {searchText.length>0 && setCrossData(xml.children.filter((item=> item.attributes.CurrencyCode.toLowerCase().includes(searchText.toLowerCase()) || item.children[1].value.toLowerCase().includes(searchText.toLowerCase()) )))}

  
  })
  },[searchText])


 console.log("ne geliorrrr",searchText)


 const orderHigh=()=>{
 setData(
   data
      .slice()
      .sort((a, b) => b.children[4].value - a.children[4].value)
  );

  setCrossData(
    crossData
       .slice()
       .sort((a, b) => (b.children[7].value|| b.children[8].value) - (a.children[7].value|| a.children[8].value))
   );

 }

 const orderLow=()=>{

  setData(
    data
       .slice()
       .sort((a, b) => a.children[4].value - b.children[4].value)
   );
   setCrossData(
    crossData
       .slice()
       .sort((a, b) => (a.children[7].value|| a.children[8].value) - (b.children[7].value|| b.children[8].value))
   );

 }

 
  return  (

  ( user?
  <div>
    <div style={{marginBottom:20, justifyContent:'space-between', flexDirection:'row', width:800, display:'flex'}}>
 <input type='text'   onChange={txt=> setSearchText(txt.target.value)}/>
 <button onClick={orderHigh}> yüksek fiyata göre sırala</button>
 <button onClick={orderLow}> düşük fiyata göre sırala</button>
 </div>
    <CurrencyTableTitle/>
     <CurrencyTable data={data}  searchText={searchText}/>
    <CrossRateTitle/>
    <CrossRateTable data={crossData}/>
    <SpecialDrawing  data={sdr}  />
     
     </div> : null)
  )
  
 
};

export default HomeScreen;
