// Test script: POST a server action request and check response headers
const res = await fetch("http://localhost:3000/item/123", {
  method: "POST",
  headers: {
    "Next-Action": "test123",
    "Accept": "text/x-component",
    "Content-Type": "text/plain;charset=UTF-8",
  },
  body: "[]",
});

console.log("Status:", res.status);
console.log("Content-Type:", res.headers.get("content-type"));
console.log("x-nextjs-prerender:", res.headers.get("x-nextjs-prerender"));
console.log("x-nextjs-postponed:", res.headers.get("x-nextjs-postponed"));
console.log("x-nextjs-cache:", res.headers.get("x-nextjs-cache"));

const text = await res.text();
console.log("\nFirst 200 chars of body:");
console.log(text.substring(0, 200));
