function search(str)
{
	
	 
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		
		if(this.readyState==4 && this.status==200)
		{
		  document.getElementById("d").innerHTML=this.responseText;
		}
	};
	
	xhttp.open("GET","searchEmp?names="+str,true);
	xhttp.send();
	
}