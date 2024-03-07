import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Regi() {
    const navigate = useNavigate();
 
     const candidate = () => {
         navigate("/addCandidate")
     }
   
     return ( <button className="btn btn-success"
     onClick={candidate}>Add Candidate
  </button> 
 );
  }