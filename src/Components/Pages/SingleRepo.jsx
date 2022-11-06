import React from "react";
import { useLocation } from "react-router-dom";
import Timestamp from "../OtherComponents/Timestamp";
import StarComponent from "../OtherComponents/StarComponent";
import { useEffect, useState } from "react";

function SingleRepo() {
  const location = useLocation();
  const state = location.state;
  
  return (
    <div>
      
    </div>
  );
}

export default SingleRepo;
