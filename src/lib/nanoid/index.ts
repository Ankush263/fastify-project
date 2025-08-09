import { customAlphabet } from 'nanoid';

const CUSTOME_ALPHABET =
	'0123456789abdjdkjweeuorieoweioowrivdvbbkjhsierurpsdfuwovkj';

export const alphaNumericNanoid = customAlphabet(CUSTOME_ALPHABET, 10);
