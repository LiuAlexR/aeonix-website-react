import { Hono } from "hono";

// This ensures c.env.DB is correctly typed
type Bindings = {
  DB: D1Database;
};
const app = new Hono<{ Bindings: Bindings }>();

// Accessing D1 is via the c.env.YOUR_BINDING property
app.get("/api/products/namesDeprecated", async (c) => {
  try {
    const stmt = c.env.DB.prepare("SELECT product_name FROM Products");
    const { results } = await stmt.all<{ name: string }>();
    return c.json(results);
  } catch (e) {
    if(e instanceof Error)
    return c.json({ err: e.message }, 500);
  }
});
app.get("/api/products/names", async (c) => {
  try {
    const stmt = c.env.DB.prepare("SELECT product_name, product_id FROM Products");
    const { results } = await stmt.all<{ name: string }>();
    return c.json(results);
  } catch (e) {
    if(e instanceof Error)
    return c.json({ err: e.message }, 500);
  }
});
app.get("/api/product/:product_id", async (c) => {
  const product_id = c.req.param('product_id');
  try {
    const stmt = c.env.DB.prepare("SELECT * FROM Products WHERE product_id='" + product_id + "'");
    const { results } = await stmt.all<{ name: string }>();
    return c.json(results);
  } catch (e) {
    if(e instanceof Error)
    return c.json({ err: e.message }, 500);
  }
});
app.get("api/news", async (c) => {
  try {
    const stmt = c.env.DB.prepare("SELECT * FROM News");
    const { results } = await stmt.all<{ name: string }>();
    return c.json(results);
  } catch (e) {
    if(e instanceof Error)
    return c.json({ err: e.message }, 500);
  }
})
app.get("api/products", async (c) => {
  try {
    const stmt = c.env.DB.prepare("SELECT * FROM Products");
    const { results } = await stmt.all<{ name: string }>();
    return c.json(results);
  } catch (e) {
    if(e instanceof Error)
    return c.json({ err: e.message }, 500);
  }
})
app.post("/api/contact", async (c) => {
    try {
        const { name, email, message } = await c.req.json();

        if (!name || !email || !message) {
            return c.json({ error: "Missing required fields: name, email, or message" }, 400);
        }

        const stmt = c.env.DB.prepare( 
            "INSERT INTO comments (name, email, message) VALUES (?, ?, ?)"
        );

        const result = await stmt.bind(name, email, message).run();

        return c.json({
            message: "Form data submitted successfully!",
            result: result
        }, 201); // 201 Created
    } catch (e: any) {
        console.error("Error processing contact form:", e);
        return c.json({
            error: "Failed to process form submission",
            details: e.message
        }, 500);
    }
});
app.post("api/add/news", async (c) => {
  try {
    var {imageLink, redirectLink, blurb, password} = await c.req.json();
    if(password != "1234"){
      return c.json({ error: "Wrong Password"}, 400);
    }
    if(!imageLink || !redirectLink || !blurb){
      return c.json({ error: "Missing item"}, 400);
    }
    if(imageLink.substring(0, 5) != "https"){
      imageLink = "https://" + imageLink;
    }
    if(redirectLink.substring(0, 5) != "https"){
      redirectLink = "https://" + imageLink;
    }
    const stmt = c.env.DB.prepare( 
            "INSERT INTO News (date, imgurl, blurb, link) VALUES (?, ?, ?, ?)"
        );
    const date = new Date();
    const curDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
    const result = await stmt.bind(curDate, imageLink, blurb, redirectLink).run();
    return c.json({
            message: "Form data submitted successfully!",
            result: result
        }, 201);
  } catch (e: any) {
    return c.json({
      error: "Failed to add item",
      details: e.message
    }, 500);
  }
});
app.post("api/add/product", async (c) => {
  try {
    var {imageLink, productName, description1, description2, password} = await c.req.json();
    if(password != "1234"){
      return c.json({ error: "Wrong Password"}, 400);
    }
    if(!imageLink || !productName || !description1 || !description2){
      return c.json({ error: "Missing item"}, 400);
    }
    if(imageLink.substring(0, 5) != "https"){
      imageLink = "https://" + imageLink;
    }
    const stmt = c.env.DB.prepare( 
            "INSERT INTO Products (product_name, page_layout, product_description_1, product_description_2, product_image_link) VALUES (?, ?, ?, ?, ?)"
        );
    const result = await stmt.bind(productName, "1", description1, description2, imageLink).run();
    return c.json({
            message: "Form data submitted successfully!",
            result: result
        }, 201);
  } catch (e: any) {
    return c.json({
      error: "Failed to add item",
      details: e.message
    }, 500);
  }
});
app.post("api/remove/news", async (c) => {
  try {
    var {blurbText, password} = await c.req.json();
    if(password != "1234"){
      return c.json({ error: "Wrong Password"}, 400);
    }
    if(!blurbText){
      return c.json({ error: "Missing item"}, 400);
    }

    const stmt = c.env.DB.prepare(
            "DELETE FROM News WHERE blurb LIKE ?"
        );

        // Bind the blurbText with wildcards and execute the statement
        const result = await stmt.bind(`%${blurbText}%`).run();
    return c.json({
            message: "Form data submitted successfully!",
            result: result
        }, 201);
  } catch (e: any) {
    return c.json({
      error: "Failed to remove item",
      details: e.message
    }, 500);
  }
});
app.post("api/remove/product", async (c) => {
  try {
    var {blurbText, password} = await c.req.json();
    if(password != "1234"){
      return c.json({ error: "Wrong Password"}, 400);
    }
    if(!blurbText){
      return c.json({ error: "Missing item"}, 400);
    }

    const stmt = c.env.DB.prepare(
            "DELETE FROM Products WHERE product_name LIKE ?"
        );

        // Bind the blurbText with wildcards and execute the statement
        const result = await stmt.bind(`%${blurbText}%`).run();
    return c.json({
            message: "Form data submitted successfully!",
            result: result
        }, 201);
  } catch (e: any) {
    return c.json({
      error: "Failed to remove item",
      details: e.message
    }, 500);
  }
});
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));
// Export our Hono app: Hono automatically exports a
// Workers 'fetch' handler for you
export default app;