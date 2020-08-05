import { validURL } from './inputValidation';

const handleSubmit = ( event ) => {

	event.preventDefault(); 


	let formTxt = ( document.getElementById( 'URL' ) ) ? document.getElementById( 'URL' ).value: "";

	if( !validURL( formTxt ) ){

		alert( "Please enter a valid.\nExample: https://www.facebook.com/" );
		return false;

	}

	document.getElementById( 'Results' ).innerHTML = 'Processing......';
	
	fetch( '/process', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( {
			'url': formTxt
		} )
	})
	.then( (response) => {
		return response.json();
	} )
	.then( (data) => {
		
		let resultTxt = "";
		let valid_Result = false;

		if( data.categories ){

			if( data.categories.length > 0 ){

				resultTxt = data.categories[0].label;
				valid_Result = true;

			}

		}
		
		if( !valid_Result ){

			resultTxt = "Sorry, we could not accurately classify text " + formTxt;

		}

		document.getElementById( 'Results' ).innerHTML = resultTxt;

	});

};

export { handleSubmit };