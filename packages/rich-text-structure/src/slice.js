export function slice(
	{ value, selection },
	start = selection.start,
	end = selection.end
) {
	if ( value === undefined ) {
		return sliceValue( ...arguments );
	}

	return {
		selection: {
			start: selection.start - start,
			end: selection.end - end,
		},
		value: sliceValue( value, start, end ),
	};
}

function sliceValue( value, start, end ) {
	if ( Array.isArray( value ) ) {
		return [];
	}

	const { formats, text } = value;

	return {
		formats: formats.slice( start, end ),
		text: text.slice( start, end ),
	};
}
