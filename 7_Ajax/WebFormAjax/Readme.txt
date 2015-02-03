1. WebFormAjax
Client/JS send Ajax send Get request to server side. Server side send the Accept-Language[0] to client side.

(1) index.aspx load indexApp.js
(2) indexApp.js send Get request to Ajax/getAcceptLanguageFirstLang.aspx
(3) Ajax/getAcceptLanguageFirstLang.aspx send Accept-Language[0] to indexApp.js

--------------------------------------------------------
2. WebFormAjax_GetWithPara
Client/JS send Ajax send Get request with parameter "name" and "age" to server side. Server side detect if 'name' equals to 'Jack' and 'age' equals to '188' then reply '88888' to client side.

(1) index.aspx load indexApp.js
(2) indexApp.js send Get request "/Ajax/getToken.aspx?name=Jack&age=188" to Ajax/getToken.aspx
(3) Ajax/getToken.aspx parse the parameter and reply.

Ajax/getToken.aspx can also be accessed by the url below:
http://localhost:55078/Ajax/getToken.aspx?name=Jack&age=188

--------------------------------------------------------




