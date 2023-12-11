# Repro repo

## ISSUE:

With the experimental vite plugin;

- If the index is loaded normally, the loader runs and useLoaderData works;
- but if coming back to that page from a navigation (Link to="/") - e.g. from the payment/success page - the loader isn't running; so data is not set.

## Steps to reproduce

- No need to complete a payment; just navigating to payment/success page then clicking the link to go back to index ("/") causes the issue
- Stripe keys aren't required for repro; no need to actually click "buy"
