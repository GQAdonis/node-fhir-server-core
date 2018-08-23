module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-date',
		documentation: 'The capability statement publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-description',
		documentation: 'The description of the capability statement.',
	},
	EVENT: {
		name: 'event',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-event',
		documentation: 'Event code in a capability statement.',
	},
	FHIRVERSION: {
		name: 'fhirversion',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-fhirversion',
		documentation: 'The version of FHIR.',
	},
	FORMAT: {
		name: 'format',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-format',
		documentation: 'formats supported (xml | json | ttl | mime type).',
	},
	GUIDE: {
		name: 'guide',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-guide',
		documentation: 'Implementation guides supported.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-jurisdiction',
		documentation: 'Intended jurisdiction for the capability statement.',
	},
	MODE: {
		name: 'mode',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-mode',
		documentation: 'Mode - restful (server/client) or messaging (sender/receiver).',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-name',
		documentation: 'Computationally friendly name of the capability statement.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-publisher',
		documentation: 'Name of the publisher of the capability statement.',
	},
	RESOURCE: {
		name: 'resource',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource',
		documentation: 'Name of a resource mentioned in a capability statement.',
	},
	RESOURCE_PROFILE: {
		name: 'resource-profile',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource-profile',
		documentation: 'A profile id invoked in a capability statement.',
	},
	SECURITY_SERVICE: {
		name: 'security-service',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-security-service',
		documentation: 'OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates.',
	},
	SOFTWARE: {
		name: 'software',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-software',
		documentation: 'Part of a the name of a software application.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-status',
		documentation: 'The current status of the capability statement.',
	},
	SUPPORTED_PROFILE: {
		name: 'supported-profile',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-supported-profile',
		documentation: 'Profiles for use cases supported.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-title',
		documentation: 'The human-friendly name of the capability statement.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-url',
		documentation: 'The uri that identifies the capability statement.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-version',
		documentation: 'The business version of the capability statement.',
	},
};
