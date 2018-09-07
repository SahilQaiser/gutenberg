export function getTextContent( { text, value } ) {
	if ( value !== undefined ) {
		if ( Array.isArray( value ) ) {
			return value.map( ( item ) => item.text );
		}

		return value.text;
	}

	return text;
}
