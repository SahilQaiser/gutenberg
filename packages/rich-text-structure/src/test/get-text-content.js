/**
 * Internal dependencies
 */

import { getTextContent } from '../get-text-content';

describe( 'getTextContent', () => {
	it( 'should get text content for multiline record', () => {
		const record = {
			value: [ {
				formats: [ , , , , ],
				text: 'test',
			} ],
		};

		const expected = [ 'test' ];

		expect( getTextContent( record ) ).toEqual( expected );
	} );
} );
