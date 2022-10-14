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

     var crossdata= xml.children.filter(item => item.children[7].value.length>0 || item.children[8].value.length>0)

     setCrossData(crossdata)
  
  })
  },[])


 console.log("ne geliorrrr",sdr)

 
  return  (

  ( user?
  <div>
 <input  onChange={txt=> setSearchText(txt)}/>
    <CurrencyTableTitle/>
     <CurrencyTable data={data}  searchText={searchText}/>
    <CrossRateTitle/>
    <CrossRateTable data={crossData}/>
    <SpecialDrawing  data={sdr}  />
     
     </div> : null)
  )
  
 
};

export default HomeScreen;
