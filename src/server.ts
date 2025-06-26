import { McpServer, ResourceTemplate, ReadResourceTemplateCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// 创建一个 MCP 服务器实例
const server = new McpServer({
  name: "demo-server",
  version: "1.0.0"
});

// 注册一个简单的加法工具
server.registerTool(
  "add",
  {
    title: "加法工具",
    description: "将两个数字相加",
    inputSchema: { a: z.number(), b: z.number() }
  },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

// 注册一个动态问候资源
server.registerResource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
  {
    title: "问候资源",
    description: "动态问候生成器"
  },
  async (uri, { name }, _) => ({
    contents: [{
      uri: uri.href,
      text: `Hello, ${name}!`
    }]
  })
);

// 启动服务器，使用标准输入输出作为传输层
const transport = new StdioServerTransport();
await server.connect(transport);