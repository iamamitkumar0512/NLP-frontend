import { validURL } from '../src/client/js/inputValidation';

test( `Validates Facebook landing page`, () => {
	expect( validURL( 'https://www.facebook.com/' ) ).toBe( true );
} );

test( `Validates truncated Facebook landing page`, () => {
	expect( validURL( 'www.facebook.com/' ) ).toBe( false );
} );