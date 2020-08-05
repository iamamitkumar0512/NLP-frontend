import { handleSubmit } from '../src/client/js/formHandler';

test( `CHECK handleSubmit() working.`, () => {
  	window.alert = () => {};
	expect( handleSubmit( new Event( 'submit' ) ) ).toBe( false );
} );