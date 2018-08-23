module.exports = {
	CONTEXT: {
		name: 'context',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-context',
		documentation: 'A use context assigned to the concept map.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-date',
		documentation: 'The concept map publication date.',
	},
	DEPENDSON: {
		name: 'dependson',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-dependson',
		documentation: 'Reference to element/field/ValueSet mapping depends on.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-description',
		documentation: 'Text search in the description of the concept map.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-identifier',
		documentation: 'Additional identifier for the concept map.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-name',
		documentation: 'Name of the concept map.',
	},
	PRODUCT: {
		name: 'product',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-product',
		documentation: 'Reference to element/field/ValueSet mapping depends on.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-publisher',
		documentation: 'Name of the publisher of the concept map.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-source',
		documentation: 'Identifies the source of the concepts which are being mapped.',
	},
	SOURCECODE: {
		name: 'sourcecode',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-sourcecode',
		documentation: 'Identifies element being mapped.',
	},
	SOURCESYSTEM: {
		name: 'sourcesystem',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-sourcesystem',
		documentation: 'Code System (if value set crosses code systems).',
	},
	SOURCEURI: {
		name: 'sourceuri',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-sourceuri',
		documentation: 'Identifies the source of the concepts which are being mapped.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-status',
		documentation: 'Status of the concept map.',
	},
	TARGET: {
		name: 'target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-target',
		documentation: 'Provides context to the mappings.',
	},
	TARGETCODE: {
		name: 'targetcode',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-targetcode',
		documentation: 'Code that identifies the target element.',
	},
	TARGETSYSTEM: {
		name: 'targetsystem',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-targetsystem',
		documentation: 'System of the target (if necessary).',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-url',
		documentation: 'The URL of the concept map.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ConceptMap-version',
		documentation: 'The version identifier of the concept map.',
	},
};
