# Jas Learning

Sales and Paddle Checkout site for **Building and Testing GenAI Agents**.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The course app always runs at [http://localhost:3001](http://localhost:3001), so it can
run alongside the portfolio on port 3000.

Without Paddle environment values, the site remains usable and purchase buttons show
a configuration message instead of opening checkout.

## Paddle setup

1. Create a Paddle product for the course.
2. Add a **one-time** price of **₹15,000 INR**. Do not configure recurring billing.
3. Copy the client-side token and price ID into:

   ```dotenv
   NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
   NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=test_replace_me
   NEXT_PUBLIC_PADDLE_PRICE_ID=pri_replace_me
   ```

4. Test checkout in Paddle sandbox and confirm that the receipt reaches the checkout
   email address.
5. For launch, create or activate the production price and set the Netlify environment
   values using `production`, a live client token, and the production price ID.

### Required checkout setting

Paddle requires a default payment link even when Paddle.js opens an overlay checkout.
Without it, checkout returns `transaction_default_checkout_url_not_set` and displays
Paddle's generic "Something went wrong" dialog.

In the Paddle sandbox dashboard, open **Checkout > Checkout settings** and set the
default payment link to:

```text
http://localhost:3001
```

Use `https://learn.jaswanth.foo` for the live Paddle account after the production domain
is deployed and approved. This setting is managed in the Paddle dashboard and is not
available through Paddle's API or MCP server.

Paddle is the source of truth for payments. The site does not store card information,
customer records, or verification tokens. A successful overlay checkout routes to
`/success`, while the Paddle receipt remains proof of purchase.

## Deployment

Create a separate Netlify site from the same GitHub repository. Configure:

```text
Base directory: learn-next
Package directory: (leave empty)
Build command: npm run build
Publish directory: .next
```

The included `netlify.toml` builds the Next.js app. Configure the three Paddle environment
values in Netlify, deploy, and attach `learn.jaswanth.foo` as the production custom domain.
Its ignore rule skips deploys when a commit changes only the portfolio.

The existing portfolio Netlify project continues to use the root `netlify.toml`, which
sets `site-next` as its base directory and skips deploys when a commit changes only the
course app.

Before accepting payments, replace or expand the purchase terms if your final refund
policy differs from the current billing-support language.

## Paddle MCP

The repository configures Paddle's hosted sandbox and live MCP servers in the workspace
[`.mcp.json`](../.mcp.json):

- `paddle-sandbox` prompts securely for a sandbox API key (`pdl_sdbx_...`) when first used.
- `paddle-live` opens Paddle in the browser for OAuth authorization when first used.

Create the sandbox key with only the permissions needed for the task. Start the live
connection with read access, keep MCP tool approval enabled, and review every `execute`
operation before allowing it. Paddle does not independently block destructive MCP
operations.

Never paste an API key into `.mcp.json` or commit it to the repository.
