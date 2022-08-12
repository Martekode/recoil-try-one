import { useRecoilValue } from "recoil";
import { charCountState } from "../App";
function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }
export default CharacterCount;