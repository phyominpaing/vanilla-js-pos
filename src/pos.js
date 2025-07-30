import listener from "./listener";
import setup from "./setup";

export const init = () => {
    console.log("pos init");
    
    setup();
    listener();
}