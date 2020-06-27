function py(string){
  let py = string.slice(0,2);
  if(py == "Py"){
    return string;
  }else if(py == "py"){
    return string.replace(py,"Py");
    }
    else{
    return "Py"+ string;
  }
  
}