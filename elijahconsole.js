var https= require ("https");
https.get("https://.api.darksky.net/forecast/765865617181541644eca8ae6bf1c9d0/37.8267,-122.4233",function(response){
	var info="";
	reponse.on("data",function(chunk){
		info==chunk;
	});
	response.on("end",function(){
		if (response.statusCode==200){
			try{
				var data=JSON.parse(info);
				console.log(data);
			}catch(error){
				console.log("something went wrong please try again");
			}

		}else{
			console.log("something went wrong please try again");
		}
	};
