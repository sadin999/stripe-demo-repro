import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getDomainUrl, getStripeSession } from "~/utils/stripe.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const priceId = formData.get("priceId") as string;
  const stripeRedirectUrl = await getStripeSession(
    priceId,
    getDomainUrl(request),
    process.env.STRIPE_CUSTOMER_ID!
  );
  return redirect(stripeRedirectUrl);
};

export default function Buy() {
  return (
    <Form method="post">
      <button type="submit">buy</button>
    </Form>
  );
}
