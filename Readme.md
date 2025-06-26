https://github.com/modelcontextprotocol/inspector
下载工具（没啥用）
npx @modelcontextprotocol/inspector
创建生成服务文件
npm run build
启动服务
npx @modelcontextprotocol/inspector node dist/server.js
控制台输出
Starting MCP inspector...
⚙️ Proxy server listening on 127.0.0.1:6277
🔑 Session token: 85c8b80761c88de5e5cbd530f890dbedaae824cb6a832f0e204188a0d26978af
Use this token to authenticate requests or set DANGEROUSLY_OMIT_AUTH=true to disable auth

🔗 Open inspector with token pre-filled:
   http://localhost:6274/?MCP_PROXY_AUTH_TOKEN=85c8b80761c88de5e5cbd530f890dbedaae824cb6a832f0e204188a0d26978af
   (Auto-open is disabled when authentication is enabled)

🔍 MCP Inspector is up and running at http://127.0.0.1:6274 🚀

注意要在网页的配置中，填入 Session Token （控制台有打印） 来建立连接

New STDIO connection request
Query parameters: {"command":"node","args":"dist/server.js","env":"{\"HOME\":\"/Users/blockdance\",\"LOGNAME\":\"blockdance\",\"PATH\":\"/Users/blockdance/.npm/_npx/5a9d879542beca3a/node_modules/.bin:/Users/blockdance/Documents/Test/simple_mcp_server/node_modules/.bin:/Users/blockdance/Documents/Test/node_modules/.bin:/Users/blockdance/Documents/node_modules/.bin:/Users/blockdance/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/blockdance/.rvm/gems/ruby-3.1.0/bin:/Users/blockdance/.rvm/gems/ruby-3.1.0@global/bin:/Users/blockdance/.rvm/rubies/ruby-3.1.0/bin:/Users/blockdance/.deno/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/blockdance/.rvm/bin:/Users/blockdance/fvm/default/bin:/Users/blockdance/.pub-cache/bin\",\"SHELL\":\"/bin/zsh\",\"TERM\":\"xterm-256color\",\"USER\":\"blockdance\"}","transportType":"stdio"}
STDIO transport: command=/opt/homebrew/bin/node, args=dist/server.js
Created server transport
Created client transport
Received POST message for sessionId 10822df1-ee63-4703-8a8f-ba0831efefd3
Received POST message for sessionId 10822df1-ee63-4703-8a8f-ba0831efefd3

进行测试
点击右侧顶部的 Resource Tools 等，测试服务的功能