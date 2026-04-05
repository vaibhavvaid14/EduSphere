const rawAllowedOrigins = "http://localhost:5173, https://myedusphere.vercel.app/";
const allowedOrigins = rawAllowedOrigins.split(",").map(s => s.trim().replace(/\/$/, "")).filter(Boolean);

const testOrigin = (origin) => {
    console.log(`Testing origin: "${origin}"`);
    if (!origin) {
        console.log("✅ Allowed: No origin");
        return;
    }
    if (allowedOrigins.includes(origin)) {
        console.log(`✅ Allowed: ${origin}`);
    } else {
        console.log(`❌ Blocked: ${origin}. Whitelist:`, allowedOrigins);
    }
};

testOrigin("http://localhost:5173");
testOrigin("https://myedusphere.vercel.app");
testOrigin("https://malicious-site.com");
testOrigin(null);



