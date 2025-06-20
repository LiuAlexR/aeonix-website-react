import { Hono } from "hono";

// This ensures c.env.DB is correctly typed
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

// Accessing D1 is via the c.env.YOUR_BINDING property
app.get("/api/products/names", async (c) => {
  try {
    const stmt = c.env.DB.prepare("SELECT product_name FROM Products");
    const { results } = await stmt.all<{ name: string }>();
    return c.json(results);
  } catch (e) {
    if(e instanceof Error)
    return c.json({ err: e.message }, 500);
  }
});
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));
// Export our Hono app: Hono automatically exports a
// Workers 'fetch' handler for you
export default app;