
seeCustomers.onshow=function(){
   let query = "SELECT name FROM customer;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=scs63109&pass=3hGm9xnt&database=scs63109&query=" + query)

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


