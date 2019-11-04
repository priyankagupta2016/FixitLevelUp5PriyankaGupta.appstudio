
seeCustomers.onshow=function(){
   let query = "SELECT name FROM customer;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pgu04554&pass=Priyanka98*&database=Priyanka98*&query=" + query)
    if (req1.status == 200) { 
        let results = JSON.parse(req1.responseText)
              
    if (results.length == 0)
        NSB.MsgBox("There are no customers with that name.")
      else {        
        for (i=0; i< results.length; i++){
      drpCompanies.addItem(results[i])
          }
}

  } else 
        NSB.MsgBox(`Error code: ${req1.status}`)
}






drpCompanies.onclick=function(){
if (typeof(s)=="object"){
  return
  else{
  customer = s

      let query1 = "SELECT name,street,city,state,zipcode FROM customer WHERE name=" + '"'+customer+'"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pgu04554&pass=Priyanka98*&database=pgu04554&query=" + query1)
    
        if (req1.status == 200) { 

      let results = JSON.parse(req2.responseText)
          console.log(results)
           if (results.length == 0){
        NSB.MsgBox("There are no customers of that name.")
   } else {        
        console.log("the parsed JSON is " + results)

        results = results[0]
        message = (`${results[1]} \n${results[2]} \n${results[3]}, ${results[4]}, ${results[5]}`);
        console.log(message)
        txtResult.value = message;
}
    } else
 }      

        NSB.MsgBox("Error code: " + req2.status)
}
