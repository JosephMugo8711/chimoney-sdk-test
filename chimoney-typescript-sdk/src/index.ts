import { Base } from "./base"; // Importing the Base class
import { applyMixins } from "./utils"; // Importing the mixin utility function
import { Payments } from "./payments";

// Define the Typicode class that extends Base
class Typicode extends Base {}

// Declare that Typicode implements Payments
interface Typicode extends Payments {}

// Apply the mixins to Typicode
applyMixins(Typicode, [Payments]);

// Export Typicode as the default export of the module
export default Typicode;
