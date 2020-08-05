const validURL = ( url ) => {

	let valid = false;

	try{

		let url_Obj = new URL( url ); 
		valid = true;

	}catch( error ){

		console.log( error.message ); 

	}

	return valid;

};

export { validURL };