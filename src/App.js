// import logo from './logo.svg';
import {
  Add,
  ArrowBack,
  Chat,
  FavoriteRounded,
  Person,
  Share,
} from "@mui/icons-material";
import "./App.css";
import ManIcon from "./component/ManIcon";
import Noti from "./component/Noti";
import Ccc from "./component/Ccc";
import No from "./component/No";
import One from "./component/One";
import Two from "./component/Two";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
import { useEffect } from "react";
import Pin from "./component/Pin";
// import Pin from './component/Pin';
import Data from "./component/Data";

function App(pinSize, imgSrc, name) {
  return (
    <div className="App">
      <div className="mainContainer">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAeFBMVEX///+9CBy6AAC3AAC9ABm8ABW8ABG7AA27AAq7AAb78fLrxMbdmZz++vvclpj89fbVgITNYGTy2dr35+jgoqXajJHEOj/vz9HBLjT03uDpvsDQanHTdXrGP0TCNTnWh4nPcHHHR0y/HibmtbfiqarHTlLLWFzAJS1p3B5ZAAAHw0lEQVRoge1b6ZKyOhCVJKyKqKiAihuj8/5veAEFspwEUOebulXTf6amhHS608vpTjOZ/NEf/dH/hKIgm643i8O+pMNis55mQfSPWIfT+XlLKCWE+J7reuXf6r/8PE/Cn+adzC8lK9e2FLLdchOXWfJzvFenKyGOyrkjh5DrZvUTvIPi4hJm4v0gRtxbEXya+fxIjXLzG3DocfbJDYRzb4jgvArs+ceYr8k45o8NkK+PcJ9uxzN/bCB/3w2ihdnWTeSQ05vBKDmSV5lXRLZvKWD+uuiNAtYvM4/ub4leEyPLF0Nxtn2fe0nkEr/CPfn2PsHdsvz0hTA8dd489o4cNtoAp/QlZ8dkk5H8k09yLw2QjuKfOB/lXsrPRpx//D343NnAfTrpYPuPtr02z9wKYdWI6/HX79uwfxnq/z3RxvYJSc+zYtXKEyfr041QAjBYR2Q5jPvMxJ355LjYxUCSKFnk1DecxbD4mxi4M3LdJ3ogEyV7S5+dGRlgftFWe4qMWLM+A8pOjnb77oDjP2nfJmQ2xHriA9XZANn0vTzVcbfpYih8zHLdIr3RL9eonqTTgcwr2micwL2Z3/vS7Jssx2XNnYXFIIXxNY3d0sUo5iVlmD/zTC/NsfB0hh4O42Ra0gqbRJDC0Gly/sCGwhOVe1YcUrsubsuq73r/AiYVw9DNrnrwi+MdOcm7LO6lF7ZbZVUCuKgRIftG9qcXPzjC5/fiU+E6Ja6ipTLYKKAexk/7ohN/R5G2vsWznaYaJFLWdTtpwTVakOo8+IaMlWaC6HttSKswzV4KizdXfcq9Y+4rBHHEOBlr49nz6VxUVeypSzJbEKgl5HX2lZcnS30j96qqCnrX1BjfFQnPV8kxdmXxhbug/+BbXdROoe6R8Fvugeg4pO4gYoBE1keQ9pHTUz5EL4fVXGJYR+LDxgOwe3bkTrLg5agijabLZX8Ljr1QN+0C1BciI+HMPrI4MYh1XxfF5gIzlBijV6r2GVHZJ+CQKAfONt32GD08Tw/mVXH1MFW3SNXDB0fP0s6K4054RrroFiN3ESxmclKdFbjeQTVrn8s1nAML9RoCZ45wtjv1CU+BD+FFDaacFGHe/iyl3ztQP+GNL1BP1bnJmDUABQLtcmiXvJyL+CL0VyGrqPbJLBmixCg8ICZESljIZMVEcVH1Q2VwAFbh5WwBsC2XCmjfngARzqpVKeV+oerQP7S/hi20USoFxN4RAj9IO1RGBuAZ0nWFs9Z5qFynZYC9iGjWYGnZ80Bs5J5p3Ysx2WimgL0QrCF7WYeIfZcZWt+1cxmpIctnaR972fEPIDZ17FvLcJRsAcLVAOll9nt1FSS9e5DeixA6tgXMBfRD5GUQe3D27ll6L0MgQIxqyKpl9gej5Sda5cOaVHwKSSYr34wKgqauUExviSCHJwgHop7CHjQ12LX7uamX5GgNE67kVwCTKI6HEDHtTrBVjoQUQDa1pKAWoqQghx0QdPnE1bKRYCIwGUvKKBBGyUEXPcTBjaCBTCJMDFNUcjGhNgFur6YclDl4sNXYBrN47eNGlHfmVz6DOk9JuAFaiNtk1ti+ACU2kL2A9ENgnCrcQGBL8I+n8TGL3zhsIFiUd04AtAHYwrH72vF6Nl6EN9GJyeaBFKRCTdxY4f3zkVl9PqLgNpwAxyKoVRVoI9MXVV1rWnAZpDHLvfQuC8oMVGSV+zx3T9RYmPBHj3tBgk8v0ZmCIgu3VrjF6oO2t7xZWSDi+sLJr1CrDpWYmq4acxofqQ9aTCbIp8TiHUZF2N5A7YVqq/nT1BeVGsWYCxQm1ncQDeD2AmyuVA/fa30/KlXRaNQ8RcVUtgQRz3KOiLuuoWuRW2Vu9dFLRhNLuZRJeRyhYG1rCTbWKvKuxTMlykYj2otNxHkR1FjRN9Y0tl+9QW+zrY02vqBc2W9J5d8ZqlPXVsRN1Uawmo16GbK7Us9xHI/QVN7aDC+nbarilrKgN/UuKSwO9/t9v1HmxQp8NaFvKZsvEC21tm92EIIbrkRzMWK4T4jwdUL3au9FWEtTtef+UKDhOkHrew177tjQPWpHGs333aQaB5T49D9Zy4UKTwvd9IH5Kkl7kVaTzR/9Gd8vVbTSt917LtImOQqTzbu8wI6t3PE8KDh52jX6rhGN99c81KhiMBqJijeGO+z+S1TDFbKQqepTsumt4C0wLpbUZD0DPEd/gS4EjCd6d4h7X++SkoqvfeoTw9ENu0DXq59HmWELdKrWuu9VN4p+X8wcMj6gj3081EDovY+GDq9pRkd4qNEXnhH3gaMjkzDHt6/cyUEYY6ThgzN4bMjd8w+MnWoaMTZUHi1IGDyUMUUHSKOGpuDIGG85uLLV08iRMTQwx6MU0C0yyj52YK6U35VYcALA2kVPL4wLljykYUnO78a53UvDksp1NccednR09OKoaOn/Qvzp+jHa0SJArw/KTiotdwbQsUdDARp6Z0y4pKSb1W2VPyLevzkkXebfU6OA1vLB1ZBO9HdHxEua5g8E0bAfKvxHBuQr+qo/D2igFmqXIOYf+jygonlZ4z2NyFAI8sw/93FERcHsSOsFQ91EHcf705+G1BsoalyPGsSS4D/wYUy7CWr0+Z/7LOhB2S9+FPWg6pOw/Jc+CXvSL34Q90d/9Edv038hnmy6EGZPFQAAAABJRU5ErkJggg=="
          style={{ width: "60px" }}
          alt=""
        />
        <div className="subMenu">
          <div>
            <ManIcon />
            <Noti />
            <Ccc />
          </div>
          <div>
            <No />
          </div>
          <div>
            <One />
            <Two />
          </div>
        </div>
      </div>

      <main>
        <div className="search-box">
          <input type="text" placeholder="search..." />
          <div className="reload">
            <WifiProtectedSetupIcon />
          </div>
        </div>
        <div className="main-box">
          {Data &&
            Data.map((data) => (
              <Pin key={data.id} pinSize={data.size} pinImg={data.imgSrc} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
